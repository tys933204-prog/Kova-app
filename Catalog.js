// Catalog.js
// The main browsing section for all fashion products
// Includes add-to-cart logic (placeholder)

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors, Spacing, TextStyles } from "./Styles";
import cart from "./KovaCart";

export default function Catalog() {

  // TEMPORARY PRODUCT (until real APIs connect)
  const sampleProduct = {
    id: "sample-1",
    store: "Amazon",
    name: "Sample Streetwear Hoodie",
    price: 29.99,
    img: "",
    link: "",
    affiliate: "",
    category: "hoodies",
    styleTags: ["streetwear"]
  };

  // Add item to cart
  function addToCart() {
    cart.add(sampleProduct);
    console.log("Added to cart:", sampleProduct.name);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.md }}>

      <Text style={[TextStyles.title, { color: Colors.kovaGreen }]}>
        Catalog
      </Text>

      <Text style={{ color: Colors.muted, marginTop: Spacing.sm }}>
        This area will show real products from Amazon, SHEIN, H&M, ASOS, Walmart, etc.
      </Text>

      {/* Example product card */}
      <View 
        style={{ 
          backgroundColor: Colors.card, 
          padding: Spacing.md,
          borderRadius: 12,
          marginTop: Spacing.lg 
        }}
      >
        <Text style={{ color: Colors.text, fontSize: 18 }}>
          {sampleProduct.name}
        </Text>
        <Text style={{ color: Colors.muted }}>
          ${sampleProduct.price}
        </Text>

        <TouchableOpacity 
          onPress={addToCart}
          style={{ 
            marginTop: Spacing.md,
            padding: Spacing.md,
            backgroundColor: Colors.kovaGreen,
            borderRadius: 10
          }}
        >
          <Text style={{ color: "#000", fontWeight: "700" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
