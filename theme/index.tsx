import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode: any) => ({
    ...(mode === "dark"
        ? {
            primary: {
                100: "#ede8fd",
                200: "#cab9f8",
                300: "#a68bf3",
                400: "#835def",
                500: "#5f2eea",
                600: "#4615d1",
                700: "#3610a2",
                800: "#270c74",
                900: "#170746",
            },
            secondary: {
                100: "#e7f9fd",
                200: "#b8eefa",
                300: "#88e2f6",
                400: "#59d7f3",
                500: "#29cbef",
                600: "#10b2d6",
                700: "#0c8aa6",
                800: "#096377",
                900: "#053b47",
            },
        }
        : {
            primary: {
                900: "#ede8fd",
                800: "#cab9f8",
                700: "#a68bf3",
                600: "#835def",
                500: "#5f2eea",
                400: "#4615d1",
                300: "#3610a2",
                200: "#270c74",
                100: "#170746",
            },
            secondary: {
                900: "#e7f9fd",
                800: "#b8eefa",
                700: "#88e2f6",
                600: "#59d7f3",
                500: "#29cbef",
                400: "#10b2d6",
                300: "#0c8aa6",
                200: "#096377",
                100: "#053b47",
            },
        }),
});

// mui theme settings
export const themeSettings = (mode: any) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.secondary[700],
                        main: colors.secondary[500],
                        light: colors.secondary[100],
                    },
                    background: {
                        default: colors.primary[500],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.primary[700],
                        main: colors.primary[500],
                        light: colors.primary[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState<string>("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};