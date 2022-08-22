import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../screens/Welcome";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
}
