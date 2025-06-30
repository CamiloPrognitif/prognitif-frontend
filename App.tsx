import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OverviewScreen from "./src/screens/OverviewScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Overview" component={OverviewScreen} />
        {/* más tabs si en el futuro */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
