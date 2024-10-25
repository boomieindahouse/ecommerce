import { categories, products } from '../constants';
import banner1 from '../assets/img/banner1.jpg'

const Homepage = () => {
    return (
        <div className="bg-white">
            {/* Navigation and Banner Container */}
            <div className="flex container mx-auto px-4">
                {/* Categories */}
                <nav className="bg-white border-r-2 pt-20 w-2/12">
                    <ul className="flex flex-col space-y-1">
                        {categories.map((category, index) => (
                            <li className='p-2 pr-10' key={index}>
                                <a href="#" className="text-gray-700 hover:text-red-500">{category}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Banner */}
                <div className="flex-1 h-64 mt-40 flex items-center justify-center">
                    <img src={banner1} alt="iPhone" className="w-9/12" />
                </div>
            </div>

            {/* Flash Sales */}
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4">Today&apos;s Flash Sales</h2>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <span className="font-bold">Days</span><span>03</span>:
                        <span className="font-bold">Hours</span><span>23</span>:
                        <span className="font-bold">Minutes</span><span>19</span>:
                        <span className="font-bold">Seconds</span><span>56</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                            <h3 className="mt-2">{product.name}</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-red-500">{product.discount}</span>
                                <span className="text-gray-500">
                                    ${product.price} <span className="line-through">${product.originalPrice}</span>
                                </span>
                            </div>
                            <button className="w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600">Add To Cart</button>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                <button className="w-56 bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600">View all products</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
