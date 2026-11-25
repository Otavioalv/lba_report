import { BottomTabNavigationOptions } from "expo-router/build/layouts/TabsClient.js";
import { SymbolView, SymbolViewProps } from "expo-symbols";
import { View } from "react-native";

export type NativeTabBarIconParams = Parameters<NonNullable<BottomTabNavigationOptions['tabBarIcon']>>[0];
export type SymbolViewNameParams = Extract<SymbolViewProps['name'], object>

export interface TabBarIconProps extends SymbolViewNameParams {
    color: SymbolViewProps["tintColor"]
    focused: NativeTabBarIconParams["focused"],
};

export function TabBarIcon({
    color,
    focused,
    android,
    ios,
    web,
}: TabBarIconProps) {
    return (
        <View 
            style={{ 
                alignItems: 'center',
                backgroundColor: "blue"
            }}
        >
            {focused && (
                <View
                    style={{
                        position: 'absolute',
                        top: -12,
                        width: "100%",
                        height: 3,
                        backgroundColor: color,
                        borderRadius: 2,
                    }}
                />
            )}

            <SymbolView
                name={{ ios, android, web }}
                tintColor={color}
                size={28}
            />
        </View>
    );
}
