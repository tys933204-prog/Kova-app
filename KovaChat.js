// KovaChat.js
// Chat screen where users talk to Kova
// Placeholder for AI logic + cart recommendations

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors, Spacing, TextStyles } from "./Styles";
import cart from "./KovaCart";

export default function KovaChat() {

  // Sample recommended product
  const recommendedItem = {
    id: "kova-1",
    store: "ASOS",
    name: "Kova Recommended Slim-Fit Tee",
    price: 19.99,
    img: "",
    link: "",
    affiliate: "",
    category: "tees",
    styleTags: ["minimal"]
  };

  function addRecommendationToCart() {
    cart.add(recommendedItem);
    console.log("Kova recommended + added to cart:", recommendedItem.name);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.md }}>

      <Text style={[TextStyles.title, { color: Colors.kovaGreen }]}>
        Kova Chat
      </Text>

      <Text style={{ color: Colors.muted, marginTop: Spacing.sm }}>
        AI messages will appear here once backend connects.
      </Text>

      {/* Example AI recommendation */}
      <View 
        style={{
          marginTop: Spacing.lg,
          backgroundColor: Colors.card,
          padding: Spacing.md,
          borderRadius: 12
        }}
      >
        <Text style={{ color: Colors.text, fontSize: 18 }}>
          Kova Suggests:
        </Text>
        <Text style={{ color: Colors.muted }}>
          {recommendedItem.name} - ${recommendedItem.price}
        </Text>

        <TouchableOpacity 
          onPress={addRecommendationToCart}
          style={{
            marginTop: Spacing.md,
            backgroundColor: Colors.kovaGreen,
            padding: Spacing.md,
            borderRadius: 10
          }}
        >
          <Text style={{ color: "#000", fontWeight: "700" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>

      {/* Placeholder for "Go to Catalog" button */}
      <View style={{ marginTop: Spacing.lg }}>
        <Text style={{ color: Colors.muted }}>
          (Navigation to Catalog will be connected tomorrow)
        </Text>
      </View>

      {/* Placeholder for AI Mode button */}
      <View style={{ marginTop: Spacing.lg }}>
        <Text style={{ color: Colors.highlight }}>
          (AI Mode coming soon...)
        </Text>
      </View>

    </View>
  );
}
