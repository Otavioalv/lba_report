// import { TopTabsScreenPropsType } from "./TopTabsScreen";
import { MaterialIconNameType } from '@/src/types/icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TopTabs } from 'expo-router/js-top-tabs';
import { ComponentProps } from "react";

export type TopTabsScreenPropsType = ComponentProps<typeof TopTabs.Screen>;
export type TopTabsOptionsTabBarIconType = Exclude<
  NonNullable<TopTabsScreenPropsType['options']>,
  (...args: any[]) => any
>;

export interface CreateTabOptionsParams {
    title: TopTabsOptionsTabBarIconType["title"],
    iconName: MaterialIconNameType
}

export function createTabOptions({
    title,
    iconName,
}: CreateTabOptionsParams): TopTabsOptionsTabBarIconType{

    return {
        title,
        tabBarIcon: ({ color }) => (
            <MaterialIcons
                name={iconName}
                size={28}
                color={color?.toString()}
            />
        ),
    };
}
