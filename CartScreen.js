// CartScreen.js
// Universal Kova Cart UI (placeholder)

import React from "react";
import { View, Text, ScrollView } from "react-native";
import cart from "./KovaCart";
import { Colors, Spacing, TextStyles } from "./Styles";

export default function CartScreen() {

  const items = cart.getItems();
  const total = cart.getTotal();
  const grouped = cart.getGroupedByStore();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.md }}>

      <Text style={[TextStyles.title, { color: Colors.kovaGreen }]}>
        Your Kova Cart
      </Text>

      <ScrollView style={{ marginTop: Spacing.md }}>

        {/* Grouped items by store */}
        {Object.keys(grouped).length === 0 && (
          <Text style={{ color: Colors.muted, marginTop: Spacing.lg }}>
            Your cart is empty.
          </Text>
        )}

        {Object.keys(grouped).map(store => (
          <View key={store} style={{ marginBottom: Spacing.lg }}>
            <Text style={{ color: Colors.highlight, fontSize: 20, marginBottom: Spacing.sm }}>
              {store} Items
            </Text>

            {grouped[store].map(item => (
              <View 
                key={item.id} 
                style={{
                  backgroundColor: Colors.card,
                  padding: Spacing.md,
                  borderRadius: 10,
                  marginBottom: Spacing.sm
                }}
              >
                <Text style={{ color: Colors.text }}>{item.name}</Text>
                <Text style={{ color: Colors.muted }}>${item.price}</Text>
              </View>
            ))}
          </View>
        ))}

      </ScrollView>

      {/* Total */}
      <View style={{ paddingVertical: Spacing.md }}>
        <Text style={{ color: Colors.text, fontSize: 20 }}>
          Total: ${total.toFixed(2)}
        </Text>
      </View>

      {/* Checkout placeholder */}
      <View style={{ paddingVertical: Spacing.md }}>
        <Text style={{ color: Colors.kovaGreen }}>
          Checkout flow coming soon...
        </Text>
      </View>

    </View>
  );
}
