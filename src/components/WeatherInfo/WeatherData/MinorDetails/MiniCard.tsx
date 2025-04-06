import AppText from "@/components/ui/AppText";
import Box from "@/components/ui/Box";
import { ws } from "@/utils/size";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WeatherPropertyId } from "./types";
import getPropertyIcon from "./getPropertyIcon";
import { useThemeColor } from "@/hooks/useThemeColor";
import { cloneElement } from "react";
import useThemeColors from "@/hooks/useThemeColors";

interface MiniCardProps {
  id: WeatherPropertyId;
  title: string;
  value: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ id, title, value }) => {
  const icon = getPropertyIcon(id);

  const textColor = useThemeColor(
    {
      light: "#eee",
      dark: "#888",
    },
    "text"
  );

  const colors = useThemeColors();

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box width={ws(24)} alignItems="center">
        {cloneElement(icon, { color: textColor })}
      </Box>
      <Box alignItems="center" ml={ws(8)} minWidth={ws(94)}>
        <AppText fontSize={ws(14)} numberOfLines={1} color={textColor}>
          {title}
        </AppText>
        <Box flexDirection="row" mt={ws(4)}>
          <AppText fontSize={ws(20)} color={colors.text}>
            {value}
          </AppText>
          {id === "feels-like" && (
            <MaterialCommunityIcons
              name="temperature-celsius"
              color={textColor}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MiniCard;
