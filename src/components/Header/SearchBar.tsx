import React, { useEffect, useRef, useState } from "react";
import Box from "../ui/Box";
import { StyleSheet } from "react-native";
import { ws } from "@/utils/size";
import { Feather } from "@expo/vector-icons";
import AppTouchableOpacity from "../ui/AppTouchableOpacity";
import useThemeColors from "@/hooks/useThemeColors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AppTextInput from "../ui/AppTextInput";

interface SearchBarProps {
  onBackPress: () => void;
  onSearch: (value: string) => void;
  defaultValue: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onBackPress,
  onSearch,
  defaultValue,
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(defaultValue);
  }, [defaultValue]);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onSearch(search);
    }, 1500);
  }, [search]);

  const colors = useThemeColors();

  const scaleX = useSharedValue(0);

  useEffect(() => {
    scaleX.value = withTiming(1, {
      duration: 100,
    });
  }, []);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleX: scaleX.value,
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <Box
        flexDirection="row"
        alignItems="center"
        height="100%"
        borderRadius={ws(40)}
        bg={colors.searchBg}
        px={ws(6)}
      >
        <AppTouchableOpacity onPress={onBackPress}>
          <Feather
            name="chevron-left"
            size={ws(32)}
            color={colors.searchIcon}
          />
        </AppTouchableOpacity>
        <AppTextInput
          style={styles.searchInput}
          placeholder="Search your place..."
          placeholderTextColor={colors.inputPlaceholder}
          defaultValue={defaultValue}
          value={search}
          autoFocus
          onChangeText={(value) => {
            setSearch(value);
          }}
          verticalAlign="middle"
          textAlignVertical="center"
          flex={1}
          pt={0}
          pb={0}
          color={colors.inputColor}
        />
        <Box px={ws(4)}>
          <Feather name="search" color={colors.searchIcon} size={ws(24)} />
        </Box>
      </Box>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: ws(44),
    transformOrigin: "right",
  },
  searchInput: {
    fontSize: ws(18),
  },
});

export default SearchBar;
