import { useTogglePopup } from "@/hooks";
import useAuth from "@/hooks/use-auth/use-auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { signInSchema } from "./schemas";
import { FormEvent, useCallback } from "react";

export function useSignInForm() {
	const passwordToggle = useTogglePopup();
	const {
		handleLogin,
		authState,
		isSingInLoading
	} = useAuth();
	
  const router = useRouter();

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

	const onSubmit = useCallback((e: FormEvent) => {

		e.preventDefault();
		handleSubmit((values: FieldValues) => {
			handleLogin({
				userInfo: {
					email: values.email,
					password: values.password,
				},
				onSuccess: () => router.push("/")
			});

		})();
	}, [handleLogin, handleSubmit, router]);


	return {
		authState,
		register,
		onSubmit,
		errors,
		passwordToggle,
		isSingInLoading
	};
}