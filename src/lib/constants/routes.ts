type Routes = {
	authProtected: string[]
	guestProtected: string[]
}

export const ROUTES: Routes = {
	authProtected: [
		"/content-editor",
		"/asset-manager"
	],
	guestProtected: [
		"/sign-up",
		"/sign-in"
	]
};