import { SymbolView } from 'expo-symbols';
import { Link, Tabs } from 'expo-router';
import { Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { TabBarIcon } from '@/src/features/components/ui/navigation/TabBarIcon';
import { TabBarButton } from '@/src/features/components/ui/navigation/TabBarButton';

export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: "#fdaaaa",
        tabBarInactiveTintColor: "#dfdfdf",
        tabBarLabelStyle: {
          fontSize: 14,
          margin: -3
        },
        tabBarButton: ({ ref, ...props }) => (
          <TabBarButton {...props} routeName={route.name} />
        ),
    })}>

      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              ios="chevron.left.forwardslash.chevron.right"
              android="assignment"
              web="assignment"
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'assignment',
                web: 'assignment',
              }}
              tintColor={color}
              size={28}
            />
          )
        }}
      />
      
      <Tabs.Screen
        name="two"
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'person',
                web: 'code',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
