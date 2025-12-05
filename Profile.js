// Profile.js
// User settings, saved items, and account info

import React from "react";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: "#111", padding: 20 }}>
      <Text style={{ color: "#0f0", fontSize: 26, fontWeight: "600" }}>
        Profile
      </Text>

      <Text style={{ color: "#ccc", marginTop: 10 }}>
        This screen will include:
        - Account settings
        - Saved items
        - Style preferences
        - App theme/settings
      </Text>
    </View>
  );
}
