/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const useThemeColors = () => {
  const theme = useColorScheme() ?? "light";

  return Colors[theme];
};

export default useThemeColors;
