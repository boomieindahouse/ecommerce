import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar'; 
import ProductCard from '../components/ProductCard'; 

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products'); // URL ของ API
                setProducts(response.data.products); // ตั้งค่าข้อมูลสินค้า

                // สร้างรายการหมวดหมู่จากข้อมูลสินค้า
                const uniqueCategories = [...new Set(response.data.products.map(product => product.category))];
                setCategories(uniqueCategories); // ตั้งค่าหมวดหมู่ที่ไม่ซ้ำ
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); // เปลี่ยนสถานะเป็นไม่โหลดเมื่อเสร็จสิ้น
            }
        };

        fetchProducts(); // เรียกฟังก์ชันเพื่อดึงข้อมูล
    }, []);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    // กรองสินค้าโดยใช้หมวดหมู่ที่ถูกเลือก
    const filteredProducts = selectedCategory 
        ? products.filter(product => product.category === selectedCategory) 
        : products;

    return (
        <section className="flex">
            <Sidebar categories={categories} onSelectCategory={handleSelectCategory} />
            <div className="p-4 flex-1 bg-white min-h-screen">
                <div className="head">
                    <h1 className="text-4xl font-bold text-center mb-6">Welcome to My E-Commerce Store</h1>
                    <h2 className="text-2xl font-bold mb-4">Products</h2>
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Homepage;
