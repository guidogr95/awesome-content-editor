import { Metadata } from "next";
import SignUpForm from "../../components/auth/sign-up-form/sign-up-form";

export const metadata: Metadata = {
  title: "MonkeyTools - Sign Up",
};

const SignUp = () => {
  return (
    <section className="bg-gray-50">
      <SignUpForm/>
    </section>
  );
};

export default SignUp;
