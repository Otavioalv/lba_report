import { theme } from "@/src/theme";
import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";


export interface FormContainerProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export function FormContainer({
    children,
    style
}:FormContainerProps) {
    return (
        <View
            style={[styleCont.container, style]}
        >
            {children}
        </View>
    );
}

const styleCont = StyleSheet.create({
    container: {
        gap: theme.gap.xs
    }
});
