import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

// import GroupButton from '@/components/GroupButton';



export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#99B3FC",
            tabBarInactiveTintColor: "#323232",
            tabBarStyle: {
            position: "absolute",
            elevation: 10,
            height: 90,
            },
        }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
        title: "Overview",
        
        tabBarIcon: ({focused, color}) => (
            <Ionicons 
                name = {focused ? "person" : "person-outline"}
                color = {color}
                size = {30}
            />
        ),
        
        }} 
        /> 
      <Tabs.Screen
        name="devicesView"
        options={{
          title: "Devices",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
                name={focused ? 'analytics' : 'analytics-outline'} 
                color={color} 
                size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="treatmentView"
        options={{
          title: "Treatment",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
                name={focused ? 'medkit' : 'medkit-outline'} 
                color={color} 
                size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
