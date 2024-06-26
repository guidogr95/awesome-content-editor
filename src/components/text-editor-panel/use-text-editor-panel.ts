import { useLocalStorage } from "@uidotdev/usehooks";
import { useAuthContextSelector } from "@/context";

export function useTextEditorPanel() {

  const {
    user
  } = useAuthContextSelector(state => state.authState);
  
  const [value, setValue] = useLocalStorage(user?.uid!, "");

  const handleChangeValue = (newValue: string) => setValue(newValue);

  const htmlContent = `${value}`;

  return {
    value,
    handleChangeValue,
    htmlContent
  };
}