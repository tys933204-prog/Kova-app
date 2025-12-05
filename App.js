// App.js
// Entry point for the Kova mobile app

import React from "react";
import { Text, View } from "react-native";

// Temporary screens (these will be real soon)
import HomeScreen from "./HomeScreen";
import KovaChat from "./KovaChat";
import Catalog from "./Catalog";
import Profile from "./Profile";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#0f0", fontSize: 20 }}>
        KOVA APP — Navigation Coming Soon
      </Text>
    </View>
  );
}
