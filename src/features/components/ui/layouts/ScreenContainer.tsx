import { theme } from "@/src/theme";
import { View, ViewProps } from "react-native";

interface ScreenContainerProps extends ViewProps{}

export function ScreenContainer({
  children,
  style,
  ...props
}: ScreenContainerProps) {
    return (
        <View
            {...props}
            style={[
                {
                    flex: 1,
                    paddingHorizontal: theme.spacing.sm,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}