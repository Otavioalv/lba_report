import { StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialIconNameType } from "@/src/types/icons";
import Animated from "react-native-reanimated";
import { theme } from "@/src/theme";
 
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface FormTextInputProps {
    title: string,
    placeholder: string,
    iconName: MaterialIconNameType,
    required?: boolean,
}


export function FormTextInput({
    iconName,
    placeholder,
    title,
    required,
}:FormTextInputProps) {
    return (
        <View
            style={style.container}
        >
            <View
                style={style.header}
            >
                <MaterialIcons
                    name={iconName}
                    style={[style.headerText, style.headerIcon]}
                />
                <View
                    style={style.headerContainerText}
                >
                    <Text
                        style={[style.headerText]}
                    >
                        {`${title} `}
                    </Text>
                    {required && (
                        <Text
                            style={[style.headerText, style.required]}
                        >
                            *
                        </Text>
                    )}
                </View>
            </View>
            <AnimatedTextInput
                placeholder={placeholder}
                style={[
                    style.textInput,
                    {
                        borderColor: {
                            default: theme.colors.lightGreen,
                            ":focus": theme.colors.darkGreen,
                        },
                    }
                ]}
                selectionColor={theme.colors.darkGreen}
                placeholderTextColor={theme.colors.lightGreen}
            />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        gap: theme.gap.xxs,
        flex: 1,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.gap.xs,
    },
    headerContainerText: {
        flexDirection: "row",
    },

    textInput: {
        borderWidth: 1,
        borderRadius: theme.radius.sm,
        paddingHorizontal: theme.padding.sm,
        fontSize: theme.typography.textMD.fontSize,
        color: theme.colors.textNeutral900,
        transitionProperty: "borderColor",
        transitionDuration: 100,
        transitionTimingFunction: "ease-in-out",
        
    },

    required: {
        color: "red",
    },
    headerIcon: {
        
    },
    headerText: {
        fontSize: theme.typography.textMD.fontSize,
        fontWeight: "400",
        color: theme.colors.textNeutral900,
    }
});
