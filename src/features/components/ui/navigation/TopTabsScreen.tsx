import { MaterialIconNameType } from '@/src/types/icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TopTabs } from 'expo-router/js-top-tabs';
import { SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";

export type TopTabsScreenPropsType = ComponentProps<typeof TopTabs.Screen>;
export type SymbolViewNameParams = Extract<SymbolViewProps['name'], object>
export type TopTabsOptionsTabBarIconType = Exclude<
  NonNullable<TopTabsScreenPropsType['options']>,
  (...args: any[]) => any
>;

// type test = typeof MaterialIcons;

export interface TabsScreenProps {
    name: TopTabsScreenPropsType["name"],
    title: string,
    iconName: MaterialIconNameType
}

export function TopTabsScreen({
    name,
    title,
    iconName,
}: TabsScreenProps) {
    return (
        <TopTabs.Screen
            name={name}
            options={{
                title: title,
                tabBarIcon: ({color}) => (
                    <MaterialIcons
                        name={iconName}
                        size={28}
                        color={color?.toString()}
                    />
                )
            }}
        />
    );
}