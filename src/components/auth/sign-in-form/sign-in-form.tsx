"use client";
import Input from "@/components/shared/ui/input/input";
import { useSignInForm } from "./use-sign-in-form";
import { Button } from "@/components/shared";
import Link from "next/link";

const SignInForm = () => {
	const {
		register,
		onSubmit,
		errors,
		isSingInLoading
	} = useSignInForm();
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
						Sign in to your account
					</h1>
					<form
						className="space-y-4 md:space-y-6"
						onSubmit={onSubmit}>
						<div>
							<Input
								label="Your email"
								type="email"
								{...register("email")}
								error={errors["email"]?.message as string}
								id="email"
								placeholder="name@company.com"/>
						</div>
						<div>
							<Input
								label="Password"
								type="password"
								{...register("password")}
								id="password"
								placeholder="••••••••"/>
						</div>
						<Button loading={isSingInLoading}>
							Sign in
						</Button>
						<p className="text-sm font-light text-gray-500">
							Don’t have an account yet?{" "}
							<Link
								href="/sign-up"
								className="font-medium text-primary-600 hover:underline">
								Sign up
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignInForm;