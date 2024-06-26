import { useAuthContextSelector } from "@/context";
import { ROUTES } from "@/lib/constants/routes";
import isGuestProtectedRouteMatch from "@/utils/routes/is-guest-protected-route-math";
import isAuthProtectedRouteMatch from "@/utils/routes/is-protected-route-match";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export function useRouteGuard() {
	const {
		authState
	} = useAuthContextSelector(state => state);
	const router = useRouter();
	const pathname = usePathname();
	const {
		isAuthProtectedRoute,
		isGuestProtectedRoute
	} = useMemo(() => ({
		isAuthProtectedRoute: isAuthProtectedRouteMatch(pathname),
		isGuestProtectedRoute: isGuestProtectedRouteMatch(pathname)
	}), [pathname]);

	const {
		isAuthProtectedRedirect,
		isGuestProtectedRedirect
	} = useMemo(() => ({
		isAuthProtectedRedirect: !authState.isAuthenticated && isAuthProtectedRoute,
		isGuestProtectedRedirect: authState.isAuthenticated && isGuestProtectedRoute
	}), [authState.isAuthenticated, isAuthProtectedRoute, isGuestProtectedRoute]);

	const shouldRedirect = useMemo(() => (isAuthProtectedRedirect || isGuestProtectedRedirect), [isAuthProtectedRedirect, isGuestProtectedRedirect]);

	useEffect(() => {
		if (authState.authLoading) {
			return;
		}

		if (isAuthProtectedRedirect) {
			router.push("/sign-in");
		}
		if (isGuestProtectedRedirect) {
			router.push("/content-editor");
		}
	}, [isAuthProtectedRedirect, isGuestProtectedRedirect, router, authState.authLoading]);	

	return {
		shouldRedirect,
		authState
	};
}