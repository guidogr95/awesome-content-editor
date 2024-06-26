import { useAssetManagerContext } from "@/context/asset-manager-context/use-asset-manager-context";

type Props = {
  closeToast?: () => void
  onConfirm: () => void
}

export function useAssetDeletePrompt({
  closeToast,
  onConfirm
}: Props) {

  const handleConfirm = () => {
    onConfirm();
    closeToast?.();
  };

  return {
    handleConfirm
  };
}