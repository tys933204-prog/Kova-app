// api.js
// Central API hub for Kova App
// All stores (Amazon, SHEIN, Walmart, ASOS, etc.) will integrate here.

import ProductModel from "./ProductModel";

// TEMPORARY EXAMPLE PRODUCT (until real APIs + scrapers are connected)
const exampleProduct = ProductModel({
  id: "temp-1",
  store: "Amazon",
  name: "Example Hoodie",
  price: 29.99,
  img: "",
  link: "",
  affiliate: "",
  category: "tops",
  styleTags: ["streetwear"]
});

// ================================
// FETCH PRODUCTS BY STORE
// ================================

export async function fetchAmazonProducts(query) {
  // TODO: Connect Amazon API
  console.log("Fetching Amazon products for:", query);
  return [exampleProduct]; // temporary output
}

export async function fetchWalmartProducts(query) {
  console.log("Fetching Walmart products for:", query);
  return [exampleProduct];
}

export async function fetchSHEINProducts(query) {
  // TODO: Add scraper later
  console.log("Scraping SHEIN for:", query);
  return [exampleProduct];
}

export async function fetchHMProducts(query) {
  console.log("Scraping H&M for:", query);
  return [exampleProduct];
}

export async function fetchASOSProducts(query) {
  console.log("Fetching ASOS items for:", query);
  return [exampleProduct];
}

export async function fetchNordstromProducts(query) {
  console.log("Fetching Nordstrom items for:", query);
  return [exampleProduct];
}

export async function fetchUniqloProducts(query) {
  console.log("Scraping Uniqlo for:", query);
  return [exampleProduct];
}

// ================================
// MASTER SEARCH FUNCTION
// ================================

export async function searchAllStores(query) {
  const results = [];

  const stores = [
    fetchAmazonProducts,
    fetchWalmartProducts,
    fetchSHEINProducts,
    fetchHMProducts,
    fetchASOSProducts,
    fetchNordstromProducts,
    fetchUniqloProducts
  ];

  for (const storeFunc of stores) {
    try {
      const items = await storeFunc(query);
      results.push(...items);
    } catch (err) {
      console.warn("Store failed:", err);
    }
  }

  return results;
}
