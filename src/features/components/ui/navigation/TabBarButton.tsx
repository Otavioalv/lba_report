import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { 
    DescriptorRouteProp, 
    useNavigationState,
    ParamListBase, 
} from 'expo-router/build/react-navigation/index.js';
import { theme } from '@/src/theme';


export type Props = React.ComponentProps<typeof TouchableOpacity> & {
    route: DescriptorRouteProp<ParamListBase, string>;
    activeColor: ViewStyle["backgroundColor"],
};

export function TabBarButton({ 
    route,
    activeColor,
    ...props 
}: Props) {
    const focused = useNavigationState(
        (state) => state.routes[state.index]?.name === route.name
    );

    return (
        <View 
            style={{
                height: "100%", 
            }}
        >
            <View
                style={{
                    backgroundColor: focused ? activeColor : "transparent",
                    width: "100%",
                    height: 3,
                    borderBottomLeftRadius: theme.radius.sm,
                    borderBottomRightRadius: theme.radius.sm,
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
