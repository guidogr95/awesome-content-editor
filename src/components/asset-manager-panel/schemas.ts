import { mixed, object, string } from "yup";

const fileSchema = mixed()
  .test("fileRequired", "File is required", value => {
    return value && value instanceof FileList;
  });

export const fileUploadSchema = object({
  file: fileSchema.required("File required"),
	name: string().max(20, "Name must be at most 20 characters").required("Name required"),
	description: string().required("Description required"),
	category: string().max(15, "Category must be at most 15 characters").required("Category required"),
	tags: string().required("Tags required"),
	status: string().max(15, "Status must be at most 15 characters").required("Status required"),
});

export const fileUpdateSchema = object({
	name: string().max(20, "Name must be at most 20 characters").required("Name required"),
	description: string().required("Description required"),
	category: string().max(15, "Category must be at most 15 characters").required("Category required"),
	tags: string().required("Tags required"),
	status: string().max(15, "Status must be at most 15 characters").required("Status required"),
});