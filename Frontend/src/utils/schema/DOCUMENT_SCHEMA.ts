import { z } from "zod";

const fileSizeLimit = 10 * 1024 * 1024;

export const DOCUMENT_SCHEMA = z
  .instanceof(File)
  .refine((file) => ["application/pdf"].includes(file.type), {
    message: "Invalid document file type",
  })
  .refine((file) => file.size <= fileSizeLimit, {
    message: "File size should not exceed 5MB",
  });
