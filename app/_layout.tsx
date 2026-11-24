import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
// import { SystemBars } from "react-native-edge-to-edge";
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NavigationBar } from 'expo-navigation-bar';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  anchor: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style={'dark'}/>
      <NavigationBar
        style='dark'

      />
      {/* <SystemBars
          style={{
            statusBar: 'dark',
            navigationBar: 'dark',
          }}
        /> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
