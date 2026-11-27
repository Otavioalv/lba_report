import { FormAccordionItem } from "@/src/features/components/ui/accordion/FormAccordionItem";
import { FormContainer } from "@/src/features/components/ui/forms/FormContainer";
import { FormRow } from "@/src/features/components/ui/forms/FormRow";
import { FormTextInput } from "@/src/features/components/ui/forms/FormTextInput";
import { ScreenContainer } from "@/src/features/components/ui/layouts/ScreenContainer";
import { theme } from "@/src/theme";
import * as Accordion from "@rn-primitives/accordion";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import * as Select from "@rn-primitives/select";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ReportForm() {
    const [expandedItems, setExpandedItems] = useState<string[]>(["beneficiario"]);     
    const [value, setValue] = useState<{ value: string, label: string } | undefined>();

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
                    <FormContainer>
                        <FormTextInput
                            iconName="person"
                            placeholder="Nome completo"
                            title="Nome completo"
                            required
                        />
                        <FormTextInput
                            iconName="mail"
                            placeholder="E-mail"
                            title="E-mail"
                            required
                        />
                        
                        <FormRow>
                            <FormTextInput
                                iconName="badge"
                                placeholder="RG"
                                title="RG"
                                required
                            />
                            <FormTextInput
                                iconName="credit-card"
                                placeholder="CPF"
                                title="CPF"
                                required
                            />
                        </FormRow>

                        <FormRow>
                            <FormTextInput
                                iconName="phone"
                                placeholder="Telefone"
                                title="Telefone"
                                required
                            />
                            
                            
                        </FormRow>

                        {/* Root: controla o valor selecionado. */}
                        <Select.Root
                            value={value}
                            onValueChange={setValue}
                        >      
                            {/* Trigger: campo que abre o menu. */}
                            <Select.Trigger>
                                {/* Value: mostra a opção selecionada ou o placeholder. */}
                                <Select.Value
                                    placeholder="Selecione uma opção"
                                />
                                {/* <MaterialIcons name="keyboard-arrow-down" size={22} /> */}
                            </Select.Trigger>
                            {/* Portal: renderiza o menu fora da hierarquia visual normal. */}
                            <Select.Portal>
                                {/* Overlay: camada de fundo. */}
                                <Select.Overlay style={StyleSheet.absoluteFill}>
                                    {/* Content: painel do menu. */}
                                    <Select.Content>
                                        {/* É responsável pela região de exibição e permite organizar a lista de opções, inclusive com rolagem quando necessário. */}
                                        <Select.Viewport>
                                            {/* Item: opção selecionável. */}

                                            <Select.Item
                                                value="medio"
                                                label="Ensino médio"
                                            >
                                                <Text>Ensino médio</Text>
                                                <Select.ItemIndicator>
                                                    <MaterialIcons name="check" size={18} />
                                                </Select.ItemIndicator>
                                            </Select.Item>

                                            <Select.Item
                                                value="medio2"
                                                label="Ensino médio2"
                                            >
                                                <Text>Ensino médio3</Text>

                                                {/* ItemIndicator: indicador da opção selecionada. */}
                                                <Select.ItemIndicator>
                                                    <MaterialIcons name="check" size={18} />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                            
                                            <Select.Item
                                                value="medio3"
                                                label="Ensino médio3"
                                            >
                                                <Text>Ensino médio2</Text>
                                                <Select.ItemIndicator>
                                                    <MaterialIcons name="check" size={18} />
                                                </Select.ItemIndicator>
                                            </Select.Item>

                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Overlay>
                            </Select.Portal>
                        </Select.Root>


                        {/*  */}
                    </FormContainer>
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
    },
});

