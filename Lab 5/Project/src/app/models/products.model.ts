export interface Product {
    price: string;
    currency: string;
    imageUrl: string;
    url: string;
    description: string;
    id: string;
    name: string;
    category: string[];
    brand: string;
    rating: number;
    
    primaryImage: {
        small: string;
        medium: string;
        large: string;
        location: string;
        verified: null | boolean;
    };
    likes: number;
}
