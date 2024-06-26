import { FormEvent, useCallback } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./schemas";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/use-auth/use-auth";
import { useTogglePopup } from "@/hooks";

export function useSignUpForm() {
	const passwordToggle = useTogglePopup();
	const {
		handleSignUpWithEmailAndPassword,
		authState
	} = useAuth();
  const router = useRouter();

	const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(signUpSchema) });

	const onSubmit = useCallback((e: FormEvent) => {

		e.preventDefault();
		handleSubmit((values: FieldValues) => {
			handleSignUpWithEmailAndPassword({
				email: values.email,
				password: values.password,
				onSuccess: () => router.push("/")
			});

		})();
	}, [handleSignUpWithEmailAndPassword, handleSubmit, router]);

	return {
		passwordToggle,
		onSubmit,
		register,
		errors,
		authState,
		isValid
	};
}