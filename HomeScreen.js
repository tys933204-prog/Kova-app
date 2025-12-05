// HomeScreen.js
// Main dashboard of the Kova app

import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#111", padding: 20 }}>
      <Text style={{ color: "#0f0", fontSize: 26, fontWeight: "600" }}>
        Welcome to KOVA
      </Text>

      <Text style={{ color: "#ccc", marginTop: 10 }}>
        Home screen will show:
        - Quick actions
        - Kova Picks
        - Continue shopping
        - Coming soon features
      </Text>
    </View>
  );
}
