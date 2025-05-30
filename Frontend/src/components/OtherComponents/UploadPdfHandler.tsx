import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const UploadPdfHandler = () => {
  const [uploadedFile, setUploadedFile] = useState<File | undefined>();

  return <Input type="file" />;
};

export default UploadPdfHandler;
