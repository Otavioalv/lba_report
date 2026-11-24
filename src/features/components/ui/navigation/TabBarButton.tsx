
import { useNavigationState } from 'expo-router/build/react-navigation/index.js';
import { TouchableOpacity, View } from 'react-native';
import { TabsHostProps } from 'react-native-screens';

/* 
type NativeTabBarIconParams = Parameters<NonNullable<BottomTabNavigationOptions['tabBarIcon']>>[0];
type SymbolViewNameParams = Extract<SymbolViewProps['name'], object>

<Tabs 
    screenOptions={({route}) => ({
        tabBarButton: ({ ref, ...props }) => (
            <TabBarButton {...props} routeName={route.name} />
        ),
})}>
*/

type NativeTabsscreenOptionsParams = Parameters<NonNullable<TabsHostProps["s"]>>;



type Props = React.ComponentProps<typeof TouchableOpacity> & {
    routeName: string;
};

export function TabBarButton({ routeName, ...props }: Props) {
    const focused = useNavigationState(
        (state) => state.routes[state.index]?.name === routeName
    );

    return (
        <View 
            style={{
                height: "100%", 
                // backgroundColor: "red"
            }}
        >
            <View
                style={{
                    backgroundColor: focused ? '#fdaaaa' : "transparent",
                    width: "100%",
                    height: 3,
                    borderBottomLeftRadius: 11,
                    borderBottomRightRadius: 10,
                    overflow: "hidden",
                }}
            />
            <TouchableOpacity
                {...props}
                activeOpacity={1}
            />
        </View>
    );
}
