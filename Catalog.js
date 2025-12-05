// Catalog.js
// The main browsing section for all fashion products

import React from "react";
import { View, Text } from "react-native";

export default function Catalog() {
  return (
    <View style={{ flex: 1, backgroundColor: "#111", padding: 20 }}>
      <Text style={{ color: "#0f0", fontSize: 26, fontWeight: "600" }}>
        Catalog
      </Text>

      <Text style={{ color: "#ccc", marginTop: 10 }}>
        Here users will browse ALL products from:
        Amazon, SHEIN, H&M, Uniqlo, ASOS, Walmart, Nordstrom, and more.
      </Text>
    </View>
  );
}
