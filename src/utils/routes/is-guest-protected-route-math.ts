import { ROUTES } from "@/lib/constants/routes";

function isGuestProtectedRouteMatch(pathname: string) {
	return ROUTES.guestProtected.includes(pathname);
};

export default isGuestProtectedRouteMatch;