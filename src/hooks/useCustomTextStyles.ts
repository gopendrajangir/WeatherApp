import { StyleProps } from "react-native-reanimated";
import { useMemo } from "react";
import { StyleProp, TextStyle } from "react-native";

import useUtilStyles, { UtilStyleProps } from "./useUtilStyles";

export interface CustomTextStyleProps extends UtilStyleProps {
  color?: StyleProps["color"];
}

const useCustomTextStyles = (
  props: CustomTextStyleProps,
  defaultStyle?: StyleProp<TextStyle>
) => {
  const { color } = props;

  const utilStyle = useUtilStyles(props);

  const style: StyleProp<TextStyle> = useMemo(() => {
    return [{ color }, utilStyle, defaultStyle];
  }, [color, utilStyle, defaultStyle]);

  return style;
};

export default useCustomTextStyles;
