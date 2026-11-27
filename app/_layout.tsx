import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
// import { SystemBars } from "react-native-edge-to-edge";
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NavigationBar } from 'expo-navigation-bar';
import { MyDefaultTheme } from '@/src/constants/theme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { PortalHost } from "@rn-primitives/portal";

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
    <ThemeProvider value={MyDefaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView 
          style={{
            flex:1, 
            backgroundColor: MyDefaultTheme.colors.background
          }} 
          edges={['top']}
        >
          <StatusBar style={'dark'}/>
          <NavigationBar
            style='dark'

          />
          <Stack 
              screenOptions={{ 
                  headerShown: false,
                  animation: "none",
                  // animation: 'slide_from_leftQ',
                  // animationDuration: 100,
              }}
          >   
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <PortalHost/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
