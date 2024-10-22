import { useEffect, useState } from 'react';
import { getProducts, getCategories } from '../services/productService';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar'; // นำเข้า Sidebar Component

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setCategories(getCategories(productsData)); // ดึงหมวดหมู่จากสินค้าที่ได้
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar categories={categories} /> {/* ส่ง categories ไปที่ Sidebar */}
      <div className="products-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
