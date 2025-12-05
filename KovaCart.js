// KovaCart.js
// Universal cart system for all stores

import ProductModel from "./ProductModel";

class KovaCart {
  constructor() {
    this.items = [];  // stores all added products
  }

  // Add item to cart
  add(product) {
    const formatted = ProductModel(product);
    this.items.push(formatted);
    return formatted;
  }

  // Remove item by ID
  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Clear the entire cart
  clear() {
    this.items = [];
  }

  // Group items by store for checkout flow
  getGroupedByStore() {
    const grouped = {};

    this.items.forEach(item => {
      if (!grouped[item.store]) grouped[item.store] = [];
      grouped[item.store].push(item);
    });

    return grouped;
  }

  // Get total price of all items
  getTotal() {
    return this.items.reduce((sum, item) => sum + Number(item.price || 0), 0);
  }

  // Return all items
  getItems() {
    return this.items;
  }
}

// Export a SINGLE shared cart instance
const cart = new KovaCart();
export default cart;
