import { AssetData } from "../../../shared/types/assets";
import Loader from "../shared/icons/loader";
import AssetItem from "./asset-item";
import { useAssetList } from "./use-asset-list";

type Props = {
  isInsertMode?: boolean
  onInsert?: (values: AssetData) => void
}

const AssetList = ({
  isInsertMode,
  onInsert
}: Props) => {

  const {
    assets,
    isFetchingAssets,
    isError
  } = useAssetList();

  if (isFetchingAssets) {
    return (
      <div className="flex justify-center mt-12 w-full">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center mt-12 w-full">
        <h4>There has been an error while fetching asset list</h4>
      </div>
    );
  }

  if (!assets) {
    return (
      <div className="flex justify-center mt-12 w-full">
        <h4>You have no assets. Start uploading!</h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full rounded-lg border bg-card text-card-foreground shadow-sm mt-6">
      <div>
        <div className="px-4 border-b border-solid border-gray-200 py-3">
          <h3 className="text-black-primary text-base">Asset Management Table</h3>
          <p className="text-gray-primary text-sm">Upload files and update asset details with ease</p>
        </div>
      </div>
      <div className="flex flex-col">
        {Object.values(assets)?.map(asset => (
          <AssetItem
            key={asset.id}
            assetData={asset}
            isInsertMode={isInsertMode}
            onInsert={onInsert}/>
        ))}
      </div>
    </div>
  );
};

export default AssetList;