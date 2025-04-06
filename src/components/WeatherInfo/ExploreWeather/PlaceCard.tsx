import React from "react";
import { Image, StyleSheet } from "react-native";
import Box from "@/components/ui/Box";
import { ws } from "@/utils/size";
import AppText from "@/components/ui/AppText";
import useThemeColors from "@/hooks/useThemeColors";
import hexToRgba from "@/utils/hexToRgba";
import { useThemeColor } from "@/hooks/useThemeColor";
import AppTouchableOpacity from "@/components/ui/AppTouchableOpacity";
import { useHeaderSearchSetterContext } from "@/contexts";

interface PlaceCardProps {
  data: {
    name: string;
    image: number;
  };
}

const PlaceCard: React.FC<PlaceCardProps> = ({ data }) => {
  const splittedName = data.name.split(", ");
  const city = splittedName[0];
  const stateCountry =
    splittedName[1] + (splittedName[2] ? ", " + splittedName[2] : "");

  const colors = useThemeColors();

  const textColor = useThemeColor({ light: "#eee", dark: "#999" }, "text");

  const setSearch = useHeaderSearchSetterContext();

  return (
    <AppTouchableOpacity
      flexDirection="row"
      alignItems="center"
      borderRadius={ws(12)}
      activeOpacity={0.8}
      p={ws(6)}
      bg={hexToRgba(colors.neutral100, 0.2)}
      onPress={() => {
        setSearch(data.name);
      }}
    >
      <Image source={data.image} style={styles.image} />
      <Box ml={ws(16)}>
        <AppText fontSize={ws(24)} color={textColor}>
          {city}
        </AppText>
        <AppText fontSize={ws(18)} color={textColor} mt={ws(4)}>
          {stateCountry}
        </AppText>
      </Box>
    </AppTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: ws(100),
    width: ws(100),
    borderRadius: ws(12),
  },
});

export default PlaceCard;
