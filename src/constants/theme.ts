import { DarkTheme, DefaultTheme, Stack, ThemeProvider, Theme } from 'expo-router';
import { theme } from "../theme";


// const customDefaultBG = theme.;
// const customDarkBG = "#000000"


export const MyDefaultTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: theme.colors.lightTheme,
        text: theme.colors.textNeutral900
    }
}

// export const MyDarkTheme: Theme = {
//     ...DarkTheme,
//     colors: {
//         ...DarkTheme.colors,
//         background: customDarkBG
//     },
// };