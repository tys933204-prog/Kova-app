// ProductModel.js
// Normalized shape for ALL products from ANY store

export default function ProductModel(raw) {
  return {
    id: raw.id || null,
    store: raw.store || "unknown",
    name: raw.name || "Unnamed Product",
    price: raw.price || 0,
    img: raw.img || "",
    link: raw.link || "",          // product page
    affiliate: raw.affiliate || "", // affiliate link for commissions
    category: raw.category || "",
    styleTags: raw.styleTags || [], // streetwear, cozy, etc.
    colors: raw.colors || [],
    sizes: raw.sizes || [],
  };
}
