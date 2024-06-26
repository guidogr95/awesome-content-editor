import { object, ref, string } from "yup";

export const signUpSchema = object({
	email: string().required("Email required"),
	password: string().required("Password required"),
	passwordConfirmation: string().nullable()
     .oneOf([ref("password"), null], "Passwords must match")
});