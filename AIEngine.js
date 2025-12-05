// AIEngine.js
// Kova's taste-learning + recommendation engine (placeholder)

import ProductModel from "./ProductModel";

class AIEngine {

  constructor() {
    this.userProfile = {
      favoriteStyles: [],
      favoriteStores: [],
      viewedItems: [],
      cartHistory: [],
      priceRange: null,
    };
  }

  // Track what styles the user interacts with
  recordInteraction(product) {
    const p = ProductModel(product);

    if (p.styleTags) {
      this.userProfile.favoriteStyles.push(...p.styleTags);
    }

    this.userProfile.favoriteStores.push(p.store);
    this.userProfile.viewedItems.push(p.id);
  }

  // Track items added to cart
  recordAddToCart(product) {
    const p = ProductModel(product);
    this.userProfile.cartHistory.push(p.id);
  }

  // Placeholder: Recommend items that match user’s most common style tag
  recommendBasedOnHistory(allProducts = []) {
    if (this.userProfile.favoriteStyles.length === 0) return [];

    const topStyle = this._mostCommon(this.userProfile.favoriteStyles);

    return allProducts.filter(p => 
      p.styleTags && p.styleTags.includes(topStyle)
    );
  }

  // Utility: find most common element in array
  _mostCommon(arr) {
    return arr.sort((a,b) =>
      arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
  }
}

// Export one shared AI engine
const ai = new AIEngine();
export default ai;
