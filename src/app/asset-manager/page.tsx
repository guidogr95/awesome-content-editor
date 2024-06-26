"use client";
import AssetManagerPanel from "@/components/asset-manager-panel/asset-manager-panel";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { AssetManagerProvider } from "@/context/asset-manager-context/asset-manager-context";

const AssetManagerPage = () => {

	return (
		<PageWrapper>
			<AssetManagerProvider>
				<AssetManagerPanel />
			</AssetManagerProvider>
		</PageWrapper>
	);
};

export default AssetManagerPage;