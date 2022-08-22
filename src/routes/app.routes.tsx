import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Welcome } from "../screens/Welcome";
import { LogIn } from "../screens/LogIn";
import { SignIn } from "../screens/SignIn";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function AppRoutes() {
  const { colors } = useContext(ThemeContext);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Welcome}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="login" size={size} color={color} />
          ),
        }}
        name="Login"
        component={LogIn}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="app-registration" size={size} color={color} />
          ),
        }}
        name="Cadastro"
        component={SignIn}
      />
    </Navigator>
  );
}
