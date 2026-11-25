import { SymbolView } from 'expo-symbols';
import { theme } from '@/src/theme';
import { TopTabs } from 'expo-router/js-top-tabs';
import AntDesign from '@expo/vector-icons/AntDesign'
import { createTabOptions } from '@/src/features/components/ui/navigation/createTabOptions';


export default function TabLayout() {

  return (
    <TopTabs 
      tabBarPosition='bottom'
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: theme.colors.darkBrown,
        tabBarInactiveTintColor: theme.colors.mediumBrown,

        tabBarPressOpacity: 1,
        tabBarPressColor: 'transparent',
        
        tabBarLabelStyle: {
          fontSize: theme.typography.textSM.fontSize,
          margin: -3 // margin theme definir
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.darkBrown,
          borderBottomLeftRadius: theme.radius.sm,
          borderBottomRightRadius: theme.radius.sm,
          bottom: undefined,
          height: 3,
        },
    }}>

      <TopTabs.Screen
        name="index"
        options={createTabOptions({
          iconName: "assignment",
          title: "Relatórios"
        })}
      />
      
      <TopTabs.Screen
        name="two"
        options={createTabOptions({
          title: "Meu Perfil",
          iconName: "person"
        })}
      />
    </TopTabs>
  );
}
