import { useCallback } from "react";
import { LoginOptions } from ".";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignOut } from "react-firebase-hooks/auth";
import { firebaseAuth } from "@/firebase/config";
import { SignUpArgs } from "./types";
import { useAuthContextSelector } from "@/context";

export default function useAuth() {
	const { authState } = useAuthContextSelector(state => state);
	const [
		signInWithEmailAndPassword, ,
		isSingInLoading
	] = useSignInWithEmailAndPassword(firebaseAuth);
	const [ signOut ] = useSignOut(firebaseAuth);
	const [
		createUserWithEmailAndPassword,
		isSignUpLoading
	] = useCreateUserWithEmailAndPassword(firebaseAuth);

	const handleLogin = useCallback(({ userInfo, onSuccess }: LoginOptions) => {
		const { email, password } = userInfo;

		signInWithEmailAndPassword(email, password)
			.then(() => {
				onSuccess?.();
			});
	}, [signInWithEmailAndPassword]);

	const handleSignUpWithEmailAndPassword = useCallback(({ email, password, onSuccess }: SignUpArgs) => {
		createUserWithEmailAndPassword(email, password)
			.then(() => {
				onSuccess?.();
			});
	}, [createUserWithEmailAndPassword]);

	const handleLogout = () => {
		signOut();
	};

	return {
		authState,
		handleLogin,
		handleLogout,
		handleSignUpWithEmailAndPassword,
		isSingInLoading,
		isSignUpLoading
	};
}