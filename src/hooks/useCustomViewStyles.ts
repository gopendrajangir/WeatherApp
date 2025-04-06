import { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";

import useUtilStyles, { UtilStyleProps } from "./useUtilStyles";

export interface  CustomViewStyleProps extends UtilStyleProps {}

const useCustomViewStyles = (
  props: CustomViewStyleProps,
  defaultStyle?: StyleProp<ViewStyle>
) => {
  const utilStyle = useUtilStyles(props);

  const style: StyleProp<ViewStyle> = useMemo(() => {
    return [utilStyle, defaultStyle];
  }, [utilStyle, defaultStyle]);

  return style;
};

export default useCustomViewStyles;
