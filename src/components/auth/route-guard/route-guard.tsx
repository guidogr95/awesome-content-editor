import { PropsWithChildren } from "react";
import { useRouteGuard } from "./use-route-guard";
import ScreenSpinner from "@/components/screen-spinner/screen-spinner";
import Sidebar from "@/components/sidebar/sidebar";

type Props = PropsWithChildren<{}>

const RouteGuard = ({
	children
}: Props) => {
	const {
		shouldRedirect,
		authState
	} = useRouteGuard();

	if (authState.authLoading || shouldRedirect) {
		return <ScreenSpinner/>;
	}
	
	if (authState.isAuthenticated) {
		return (
			<div className="flex">
				<Sidebar/>
				<div className="w-1/2 flex flex-1 justify-center">
					{children}
				</div>
			</div>
		);
	}

	return (
		<>{children}</>
	);
};

export default RouteGuard;