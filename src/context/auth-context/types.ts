export interface AuthState {
	loading: boolean,
	isAuthenticated: boolean
}

export interface AuthStateActions {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AuthContextReturnProps {
  authState: AuthState,
	authStateActions: AuthStateActions
}