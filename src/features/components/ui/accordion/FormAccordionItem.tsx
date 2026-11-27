import { AnimatedAccordionContent } from "./AnimatedAccordionContent";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Accordion from "@rn-primitives/accordion";
import { useEffect, type ReactNode } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";


import { theme } from "@/src/theme";

interface FormAccordionItemProps {
    value: string;
    number: string;
    title: string;
    isOpen: boolean;
    children: ReactNode;
    itemStyle?: StyleProp<ViewStyle>;
    headerStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
}

export function FormAccordionItem({
    value,
    number,
    title,
    isOpen,
    children,
    itemStyle,
    headerStyle,
    contentStyle,
}: FormAccordionItemProps) {
    const rotation = useSharedValue(0);

    useEffect(() => {
        rotation.value = withTiming(isOpen ? 180 : 0, {
            duration: 70,
        });
    }, [isOpen]);

    const iconStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation.value}deg` }],
    }));

    return (
        <Accordion.Item
            value={value}
            style={[styles.item, itemStyle]}
        >
            <Accordion.Header>
                <Accordion.Trigger
                    style={[styles.header, headerStyle]}
                >
                    <View style={styles.identification}>
                        <View style={styles.numberContainer}>
                            <Text style={styles.number}>
                                {number}
                            </Text>
                        </View>

                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>

                    <Animated.View style={iconStyle}>
                        <MaterialIcons
                            name="keyboard-arrow-up"
                            size={24}
                            color="black"
                        />
                    </Animated.View>
                </Accordion.Trigger>
            </Accordion.Header>

            <AnimatedAccordionContent isOpen={isOpen}>
                <View style={[styles.content, contentStyle]}>
                    {children}
                </View>
            </AnimatedAccordionContent>
        </Accordion.Item>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.radius.md,
        borderWidth: 1,
        borderColor: theme.colors.lightBlue,
        overflow: "hidden",
    },
    
    header: {
        padding: theme.padding.md,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    identification: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.gap.md,
    },

    numberContainer: {
        backgroundColor: theme.colors.darkBlue,
        justifyContent: "center",
        alignItems: "center",
        width: 25,
        height: 25,
        borderRadius: theme.radius.full,
    },

    number: {
        ...theme.typography.subtitle,
        color: theme.colors.white,
    },

    title: {
        ...theme.typography.subtitle,
    },

    content: {
        padding: theme.padding.sm,
    },
});
