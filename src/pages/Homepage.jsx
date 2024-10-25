import { categories, products } from '../constants';
import banner1 from '../assets/img/banner1.jpg'

const Homepage = () => {
    return (
        <div className="bg-white">
            {/* Navigation and Banner Container */}
            <div className="flex container mx-auto px-4">
                {/* Categories */}
                <nav className="bg-white border-r-2 pt-10 w-2/12">
                    <ul className="flex flex-col space-y-1">
                        {categories.map((category, index) => (
                            <li className='p-2 pr-10' key={index}>
                                <a href="#" className="text-gray-700 hover:text-red-500">{category}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Banner */}
                <div className="flex-1 h-64 mt-28 flex items-center justify-center">
                    <img src={banner1} alt="iPhone" className="w-9/12" />
                </div>
            </div>

            {/* Flash Sales */}
            <div className="container mx-auto py-20">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Today&apos;s Flash Sales</h2>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <h1>Days</h1><h1>03</h1><span className='text-red-500 text-4xl'>:</span>
                        <h1>Hours</h1><h1>23</h1><span className='text-red-500 text-4xl'>:</span>
                        <h1>Minutes</h1><h1>19</h1><span className='text-red-500 text-4xl'>:</span>
                        <h1>Seconds</h1><h1>56</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative group">
                            {/* Product Image */}
                            <div className="relative w-full h-60">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />

                                {/* Add to Cart Button (slide up on hover) */}
                                <button className="absolute bottom-0 left-0 w-full bg-red-500 text-white py-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                    Add To Cart
                                </button>
                            </div>

                            {/* Product Name */}
                            <h3 className="mt-2">{product.name}</h3>

                            {/* Discount and Price */}
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-red-500">{product.discount}</span>
                                <span className="text-gray-500">
                                    ${product.price} <span className="line-through">${product.originalPrice}</span>
                                </span>
                            </div>

                            {/* Rating (Stars) */}
                            <div className="flex items-center mt-2">
                                {/* Render 5 stars */}
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={index < Math.floor(product.rating) ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}>
                                        ★
                                    </span>
                                ))}
                                <span className="text-gray-400 ml-2">({product.reviews})</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button className="w-52 bg-red-500 text-white py-4 rounded-md mt-4 hover:bg-red-600">View all products</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
