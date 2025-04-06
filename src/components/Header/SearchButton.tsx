import { ws } from "@/utils/size";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { UtilStyleProps } from "@/hooks/useUtilStyles";
import useThemeColors from "@/hooks/useThemeColors";
import AppPressable from "../ui/AppPressable";

interface SearchButtonProps extends UtilStyleProps {
  onPress: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onPress,
  ...utilProps
}) => {
  const colors = useThemeColors();

  return (
    <AppPressable
      width={ws(44)}
      height={ws(44)}
      bg={colors.searchBg}
      borderRadius={ws(44)}
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      {...utilProps}
    >
      <Feather name="search" color={colors.searchIcon} size={ws(24)} />
    </AppPressable>
  );
};

export default SearchButton;
