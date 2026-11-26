import { ScreenContainer } from "@/src/features/components/ui/layouts/ScreenContainer";
import { theme } from "@/src/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as Accordion from "@rn-primitives/accordion";
import { useState } from "react";
import { FormAccordionItem } from "@/src/features/components/ui/accordion/FormAccordionItem";

export default function ReportForm() {
    const [expandedItems, setExpandedItems] = useState<string[]>(["beneficiario"]);

    return (
        <ScreenContainer>
            <Accordion.Root 
                type="multiple"
                style={style.formAccordionRoot}
                value={expandedItems}
                onValueChange={setExpandedItems}
            >
                <FormAccordionItem
                    value="beneficiario"
                    number={"2"}
                    title="Identificação do Beneficiário"
                    isOpen={expandedItems.includes("beneficiario")}
                >
                    <View>
                        <View>
                            {/* icone */}
                            {/* Texto titulo */}
                        </View>
                        <TextInput
                            placeholder="Teste"
                        />
                    </View>
                </FormAccordionItem>

                <FormAccordionItem
                    value="beneficiario2"
                    number={"2"}
                    title="Identificação do Beneficiário2"
                    isOpen={expandedItems.includes("beneficiario2")}
                >
                    <Text>
                        test
                    </Text>
                </FormAccordionItem>

                <FormAccordionItem
                    value="beneficiario3"
                    number={"2"}
                    title="Identificação do Beneficiário3"
                    isOpen={expandedItems.includes("beneficiario3")}
                >
                    <Text>
                        test
                    </Text>
                </FormAccordionItem>

            </Accordion.Root>
        </ScreenContainer>
    );
}


const style = StyleSheet.create({
    formAccordionRoot: {
        // backgroundColor: theme.colors.white,
        // width: "100%",
        // height: 100,
        gap: theme.gap.xs,
    }
});

