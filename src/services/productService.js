// src/services/productService.js
const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// ฟังก์ชันนี้จะช่วยให้เราสามารถจัดกลุ่มหมวดหมู่ได้
const getCategories = (products) => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories;
};

export { getProducts, getCategories };
