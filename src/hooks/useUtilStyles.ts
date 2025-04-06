import { useMemo } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { StyleProps } from "react-native-reanimated";

export interface UtilStyleProps {
  // flex
  flex?: StyleProps["flex"];
  flexDirection?: StyleProps["flexDirection"];
  justifyContent?: StyleProps["justifyContent"];
  alignItems?: StyleProps["alignItems"];
  alignSelf?: StyleProps["alignSelf"];

  // position
  position?: StyleProps["position"];

  // padding
  p?: StyleProps["padding"];
  pt?: StyleProps["paddingTop"];
  pb?: StyleProps["paddingBottom"];
  px?: StyleProps["paddingHorizontal"];

  // margin
  ml?: StyleProps["marginLeft"];
  mt?: StyleProps["marginTop"];
  mb?: StyleProps["marginBottom"];

  // dimension
  height?: StyleProps["height"];
  width?: StyleProps["width"];
  minWidth?: StyleProps["minWidth"];

  // color
  bg?: StyleProps["backgroundColor"];

  // radius
  borderRadius?: StyleProps["borderRadius"];

  // overflow
  overflow?: StyleProps["overflow"];
}

export interface TextUtilStyleProps {
  color?: StyleProps["color"];
  fontSize?: StyleProps["fontSize"];
  fontWeight?: StyleProps["fontWeight"];
}

const useUtilStyles = (props: UtilStyleProps & TextUtilStyleProps) => {
  const {
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    position,
    p,
    pt,
    px,
    pb,
    ml,
    mt,
    mb,
    height,
    width,
    minWidth,
    bg,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    overflow,
  } = props;

  const style: StyleProp<ViewStyle & TextStyle> = useMemo(() => {
    return {
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      alignSelf,
      position,
      padding: p,
      paddingTop: pt,
      paddingHorizontal: px,
      paddingBottom: pb,
      marginLeft: ml,
      marginTop: mt,
      marginBottom: mb,
      height,
      width,
      minWidth,
      backgroundColor: bg,
      borderRadius,
      color,
      fontSize,
      fontWeight,
      overflow,
    };
  }, [
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    position,
    p,
    pt,
    px,
    pb,
    ml,
    mt,
    mb,
    height,
    width,
    minWidth,
    bg,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    overflow,
  ]);

  return style;
};

export default useUtilStyles;
