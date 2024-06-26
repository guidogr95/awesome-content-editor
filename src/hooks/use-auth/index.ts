export interface LoginOptions {
	userInfo: {
		email: string
		password: string
	}
	onSuccess?: () => void
}