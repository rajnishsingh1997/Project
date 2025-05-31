import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { DOCUMENT_SCHEMA } from "@/utils/schema/DOCUMENT_SCHEMA";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ErrorType {
  doc_upload?: string;
}

const UploadPdfHandler = () => {
  const [uploadedFile, setUploadedFile] = useState<File | undefined>();
  const [error, setError] = useState<ErrorType>({});

  const form = useForm<z.infer<typeof DOCUMENT_SCHEMA>>({
    resolver: zodResolver(DOCUMENT_SCHEMA),
    defaultValues: {
      file: undefined,
    },
  });

  const validateFile = (file: File, schema: any, field: keyof ErrorType) => {
    const result = schema.safeParse({ file });
    if (!result.success) {
      setError((prevError) => ({
        ...prevError,
        [field]: result.error.errors[0].message,
      }));
      return false;
    } else {
      setError((prevError) => ({
        ...prevError,
        [field]: undefined,
      }));
      return true;
    }
  };

  function onSubmit(values: z.infer<typeof DOCUMENT_SCHEMA>) {
    console.log(uploadedFile);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto"
      >
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Upload your PDF here
              </FormLabel>
              <FormControl>
                <Input
                  className="cursor-pointer"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const isValid = validateFile(
                        file,
                        DOCUMENT_SCHEMA,
                        "doc_upload"
                      );
                      if (isValid) {
                        setUploadedFile(file);
                        field.onChange(file);
                      } else {
                        field.onChange(undefined);
                      }
                    }
                  }}
                  type="file"
                  accept="application/pdf"
                />
              </FormControl>
              {error.doc_upload && (
                <p className="text-sm text-red-500 mt-1">{error.doc_upload}</p>
              )}
              <FormDescription className="text-gray-500"></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default UploadPdfHandler;
