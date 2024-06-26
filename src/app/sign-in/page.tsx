import SignInForm from "@/components/auth/sign-in-form/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonkeyTools - Sign In",
};

const SignIn = () => {
  return (
    <section className="bg-gray-50">
      <SignInForm/>
    </section>
  );
};

export default SignIn;
