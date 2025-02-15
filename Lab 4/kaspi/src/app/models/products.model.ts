export interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    images: Record<string, string>;
    rating: number;
    productUrl: string;
  }