import { ROUTES } from "@/lib/constants/routes";

function isAuthProtectedRouteMatch(pathname: string) {
	return ROUTES.authProtected.includes(pathname);
};

export default isAuthProtectedRouteMatch;