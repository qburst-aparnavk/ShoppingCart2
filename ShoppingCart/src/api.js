// List of products.
const products = [
  { id: 1, name: "Product A", price: 100.1, count: 0 },
  { id: 2, name: "Product B", price: 120.3, count: 0 },
  { id: 3, name: "Product C", price: 40.3, count: 0 },
  { id: 4, name: "Product D", price: 15.5, count: 0 },
  { id: 5, name: "Product E", price: 50.2, count: 0 },
  { id: 6, name: "Product F", price: 60.4, count: 0 }
];

export const getProducts = () => {
  // This is to mock a delayed async response like from an `XMLHttpRequest` or `fetch`
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export const findProductById = productId => {
  const [product] = products.filter(({ id }) => productId === id);
  return product;
};
