// KovaChat.js
// Chat screen where users talk to Kova

import React from "react";
import { View, Text } from "react-native";

export default function KovaChat() {
  return (
    <View style={{ flex: 1, backgroundColor: "#111", padding: 20 }}>
      <Text style={{ color: "#0f0", fontSize: 26, fontWeight: "600" }}>
        Kova Chat
      </Text>

      <Text style={{ color: "#ccc", marginTop: 10 }}>
        The AI stylist chat will go here.
      </Text>
    </View>
  );
}
