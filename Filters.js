// Filters.js
// Filtering + search logic for the Kova catalog (placeholder)

import ProductModel from "./ProductModel";

export function filterProducts(products, filters = {}) {
  let results = products.map(ProductModel);

  // Filter by store (Amazon, SHEIN, ASOS, etc.)
  if (filters.store) {
    results = results.filter(p => p.store === filters.store);
  }

  // Filter by style tags (streetwear, cozy, minimal, etc.)
  if (filters.styleTag) {
    results = results.filter(p => 
      p.styleTags && p.styleTags.includes(filters.styleTag)
    );
  }

  // Filter by price range
  if (filters.minPrice !== undefined) {
    results = results.filter(p => p.price >= filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    results = results.filter(p => p.price <= filters.maxPrice);
  }

  // Filter by category (tops, pants, jackets, etc.)
  if (filters.category) {
    results = results.filter(p => p.category === filters.category);
  }

  // Sort options
  if (filters.sortBy === "price-low-high") {
    results.sort((a, b) => Number(a.price) - Number(b.price));
  }
  if (filters.sortBy === "price-high-low") {
    results.sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (filters.sortBy === "name") {
    results.sort((a, b) => a.name.localeCompare(b.name));
  }

  return results;
}

// Basic search (V1)
export function searchProducts(products, query) {
  const q = query.toLowerCase();

  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.styleTags && p.styleTags.some(tag => tag.includes(q))) ||
    (p.category && p.category.toLowerCase().includes(q))
  );
}
