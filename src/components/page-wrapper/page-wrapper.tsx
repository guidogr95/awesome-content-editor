import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>

const PageWrapper = ({ children }: Props) => {
	return (
		<div className="max-h-[100vh] w-full flex justify-center bg-flash-white">
			<div className="max-w-6xl w-full overflow-auto">
				{children}
			</div>
		</div>
	);
};

export default PageWrapper;