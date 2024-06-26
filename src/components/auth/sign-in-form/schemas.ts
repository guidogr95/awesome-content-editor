import { object, string } from "yup";

export const signInSchema = object({
	email: string().required("Email required"),
	password: string().required("Password required"),
});