import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
const Tabs = createBottomTabNavigator();
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Products from "../screens/Products";
const TabsNavigations = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e70680",
        tabBarInactiveTintColor: "#2f7a33ab",
        tabBarStyle: {
          backgroundColor: "#2f7a33ab",
        },

        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { paddingBottom: 5, height: 65 },
      }}
    >
      <Tabs.Screen
        component={HomeScreen}
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        component={Cart}
        name="Cart"
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cart-plus" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        component={Profile}
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        component={Products}
        name="Products"
        options={{
          headerShown: false,
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-circle-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigations;
