import { siteData } from "@/config/siteData";

export interface SearchResult {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  categoryType: "luxury" | "casual" | "teens";
  pos: string;
}

export function useSearch() {
  const searchProducts = (query: string): SearchResult[] => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search in luxury products
    siteData.products.luxury.items.forEach((item) => {
      if (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          ...item,
          categoryType: "luxury",
        });
      }
    });

    // Search in casual products
    siteData.products.casual.items.forEach((item) => {
      if (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          ...item,
          categoryType: "casual",
        });
      }
    });

    // Search in teens products
    siteData.products.teens.items.forEach((item) => {
      if (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          ...item,
          categoryType: "teens",
        });
      }
    });

    return results;
  };

  return { searchProducts };
}
