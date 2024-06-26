import { AssetManagerProvider } from "@/context/asset-manager-context/asset-manager-context";
import AssetManagerPanel from "../asset-manager-panel/asset-manager-panel";
import { AssetData } from "../../../shared/types/assets";

type Props = {
  onInsert: (values: AssetData) => void
}

export const AssetManagerModal = ({
  onInsert
}: Props) => {
  return (
    <AssetManagerProvider>
      <AssetManagerPanel isInsertMode onInsert={onInsert} />
    </AssetManagerProvider>
  );
};