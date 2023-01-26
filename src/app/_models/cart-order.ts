export interface CartOrder {
  userId: number;
  date: Date;
  products: {
    productId: number;
    quantity: number;
  }[];
}
