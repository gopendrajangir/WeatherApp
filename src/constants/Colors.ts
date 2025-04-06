/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const darkNeutralColorPalatte = {
  neutral100: "#0A0A0A",
  neutral90: "#141414",
  neutral80: "#1E1E1E",
  neutral70: "#282828",
  neutral60: "#323232",
  neutral50: "#3C3C3C",
  neutral40: "#464646",
  neutral30: "#505050",
  neutral20: "#5A5A5A",
  neutral10: "#646464",
};

const lightNeutralColorPalatte = {
  neutral100: "#F5F5F5",
  neutral90: "#EBEBEB",
  neutral80: "#E1E1E1",
  neutral70: "#D7D7D7",
  neutral60: "#CDCDCD",
  neutral50: "#C3C3C3",
  neutral40: "#B9B9B9",
  neutral30: "#AFAFAF",
  neutral20: "#A5A5A5",
  neutral10: "#9B9B9B",
};

export const Colors = {
  light: {
    bgGradient1: "#2980b9",
    bgGradient2: "#fab170",

    searchBg: "rgba(255, 255, 255, 0.3)",
    searchIcon: "#fff",
    inputColor: "#222",
    inputPlaceholder: "#eee",

    ...lightNeutralColorPalatte,

    heading: "#eee",

    text: "#fff",
    background: "#fff",
    tint: tintColorLight,
    icon: "#2980b9",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    bgGradient1: "#0F2027",
    bgGradient2: "#203A43",

    searchBg: "rgba(255, 255, 255, 0.1)",
    searchIcon: "#aaa",
    inputColor: "#eee",
    inputPlaceholder: "#aaa",

    ...darkNeutralColorPalatte,

    heading: "#aaa",

    text: "#eee",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
