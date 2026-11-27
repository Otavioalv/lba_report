import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";
import { View, ViewProps } from "react-native";


export function FormRow({ children, style, ...props }: ViewProps) {
    return (
        <View style={[styles.container, style]} {...props}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: theme.gap.sm,
    },
});
