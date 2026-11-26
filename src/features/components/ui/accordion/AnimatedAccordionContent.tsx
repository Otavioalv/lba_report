
import { ComponentProps, useEffect, useState, type ReactNode } from "react";
import * as Accordion from "@rn-primitives/accordion";
import { View } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

interface AnimatedAccordionContentProps {
    isOpen: boolean;
    children: ReactNode;
    duration?: number;
    style?: ComponentProps<typeof Accordion.Content>["style"]
}

export function AnimatedAccordionContent({
    isOpen,
    children,
    duration = 70,
    style,
}: AnimatedAccordionContentProps) {
    const [contentHeight, setContentHeight] = useState(0);
    const animatedHeight = useSharedValue(0);

    useEffect(() => {
        animatedHeight.value = withTiming(
            isOpen ? contentHeight : 0,
            { duration }
        );
    }, [isOpen, contentHeight, duration]);

    const animatedStyle = useAnimatedStyle(() => ({
        height: animatedHeight.value,
    }));

    return (
        <Accordion.Content 
            forceMount
            style={isOpen ? style : null}
        >
            <Animated.View
                style={[{ overflow: "hidden" }, animatedStyle]}
                pointerEvents={isOpen ? "auto" : "none"}
                accessibilityElementsHidden={!isOpen}
                importantForAccessibility={
                    isOpen ? "auto" : "no-hide-descendants"
                }
            >
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                    }}
                    onLayout={(event) => {
                        setContentHeight(event.nativeEvent.layout.height);
                    }}
                >
                    {children}
                </View>
            </Animated.View>
        </Accordion.Content>
    );
}
