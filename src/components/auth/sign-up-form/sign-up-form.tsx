"use client";
import { Button } from "@/components/shared";
import { useSignUpForm } from "./use-sign-up-form";
import Input from "@/components/shared/ui/input/input";
import Link from "next/link";

const SignUpForm = () => {
	const {
		passwordToggle,
		onSubmit,
		register,
		errors,
		authState,
		isValid
	} = useSignUpForm();

	return (
		<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<a
				href="#"
				className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
				<img
          className="w-auto h-6 sm:h-7 mr-3"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        />
				Awesome Content Editor
			</a>
			<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
						Sign up for a new account
					</h1>
					<form
						className="space-y-4 md:space-y-6"
						onSubmit={onSubmit}>
						<div>
							<Input
								label="Your email"
								type="email"
								{...register("email")}
								id="email"
								placeholder="name@company.com"/>
							{errors.name && errors.name.type === "required" && <span>This is required</span>}
						</div>
						<div>
							<Input
								label="Password"
								type="password"
								{...register("password")}
								id="password"
								placeholder="••••••••"/>
						</div>
						<div>
							<Input
								label="Confirm Password"
								type="password"
								{...register("passwordConfirmation")}
								id="passwordConfirmation"
								placeholder="••••••••"/>
						</div>
						<Button loading={authState.authLoading} disabled={!isValid}>
							Sign up
						</Button>
						<p className="text-sm font-light text-gray-500">
							Already have an account?{" "}
							<Link
								href="/sign-in"
								className="font-medium text-primary-600 hover:underline">
								Sign in
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;