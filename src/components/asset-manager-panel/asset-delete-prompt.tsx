import { Button, Card, CardContent, CardHeader, CardTitle } from "../shared";
import { useAssetDeletePrompt } from "./use-asset-delete-prompts";

type Props = {
  closeToast?: () => void
  onConfirm: () => void
}

export const AssetDeletePrompt = ({
  closeToast,
  onConfirm
}: Props) => {

  const {
    handleConfirm
  } = useAssetDeletePrompt({
    closeToast,
    onConfirm
  });

  return (
    <div>
      <Card withBorder={false}>
        <CardHeader>
          <CardTitle>
            Delete Asset?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 justify-between">
            <Button onClick={handleConfirm}>
              Confirm
            </Button>
            <Button variant="destructive" onClick={() => closeToast?.()}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>      
    </div>
  );
};