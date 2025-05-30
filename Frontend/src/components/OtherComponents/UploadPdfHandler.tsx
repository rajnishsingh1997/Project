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

  const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  function onSubmit(values: z.infer<typeof DOCUMENT_SCHEMA>) {
    console.log(values);
  }

  return  (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default UploadPdfHandler;
