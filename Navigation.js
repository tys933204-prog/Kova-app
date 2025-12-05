// Navigation.js
// Placeholder navigation structure for Kova App
// Actual navigation logic will be added when testing on laptop (with Expo).

import HomeScreen from "./HomeScreen";
import Catalog from "./Catalog";
import KovaChat from "./KovaChat";
import Profile from "./Profile";
import CartScreen from "./CartScreen"; // will build tonight

// This file does NOT run real navigation.
// It simply defines the app's structure so we can plug into React Navigation later.

export const Tabs = {
  home: {
    name: "Home",
    component: HomeScreen
  },
  catalog: {
    name: "Catalog",
    component: Catalog
  },
  kova: {
    name: "Kova Chat",
    component: KovaChat
  },
  cart: {
    name: "Cart",
    component: CartScreen
  },
  profile: {
    name: "Profile",
    component: Profile
  }
};

// Simple export for tomorrow
export default Tabs;
