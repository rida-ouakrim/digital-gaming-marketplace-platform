export interface Product {
  id: string;
  title: string;
  type: 'Account' | 'Currency' | 'Item' | 'Service';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  instantDelivery: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
