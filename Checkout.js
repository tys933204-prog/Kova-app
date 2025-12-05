// Checkout.js
// Store-by-store checkout flow (placeholder)

import React from "react";
import { View, Text, ScrollView } from "react-native";
import cart from "./KovaCart";
import { Colors, Spacing, TextStyles } from "./Styles";

export default function Checkout() {

  const grouped = cart.getGroupedByStore();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.md }}>

      <Text style={[TextStyles.title, { color: Colors.kovaGreen }]}>
        Checkout
      </Text>

      <Text style={{ color: Colors.muted, marginTop: Spacing.sm }}>
        Kova will guide you through store-by-store checkout.
      </Text>

      <ScrollView style={{ marginTop: Spacing.lg }}>

        {Object.keys(grouped).length === 0 && (
          <Text style={{ color: Colors.muted }}>
            Your cart is empty.
          </Text>
        )}

        {Object.keys(grouped).map(store => (
          <View 
            key={store} 
            style={{ 
              backgroundColor: Colors.card, 
              padding: Spacing.md, 
              borderRadius: 12, 
              marginBottom: Spacing.lg 
            }}
          >
            <Text 
              style={{ 
                color: Colors.highlight, 
                fontSize: 22, 
                marginBottom: Spacing.sm 
              }}
            >
              {store} Checkout
            </Text>

            <Text style={{ color: Colors.muted, marginBottom: Spacing.sm }}>
              {grouped[store].length} items will be purchased on {store}.
            </Text>

            <Text style={{ color: Colors.kovaGreen }}>
              (Button to open {store} checkout coming soon)
            </Text>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}
