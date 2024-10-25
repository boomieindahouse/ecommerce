import aboutimg from '../assets/img/shopimg1.jpg';
import { teamMembers } from '../constants/index';

const About = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-800 mb-8 px-10">
                    <a href="/" className="hover:text-red-500">Home</a> / <span>About</span>
                </div>

                {/* Our Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
                    <div className='content-center'>
                        <h2 className="text-4xl font-semibold mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque quasi aut, esse natus odit debitis, praesentium amet autem, assumenda eos facere facilis dignissimos tempore. Reprehenderit blanditiis saepe porro doloremque animi in praesentium odio! Similique id eligendi placeat harum fugit officia praesentium! Non alias perspiciatis eos dignissimos unde sint, minus quam earum et, at nam est omnis dolorem eligendi quo.
                        </p>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quidem perferendis! Est quasi, nobis recusandae nisi ratione possimus odio nam perferendis quibusdam ut, sequi sit incidunt ipsum doloribus fuga harum vel? Temporibus velit minima inventore iusto vero maxime provident ex.
                        </p>
                    </div>
                    <div>
                        <img src={aboutimg} alt="" />
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-32 px-10 text-center">
                    <div className="border p-4 rounded-lg hover:bg-red-500 group">
                        <i className="fas fa-store text-4xl text-red-500 mb-4 group-hover:text-white"></i>
                        <p className="text-2xl font-bold group-hover:text-white">10.5k</p>
                        <p className="text-gray-600 group-hover:text-white">Sellers active on our site</p>
                    </div>
                    <div className="border p-4 rounded-lg hover:bg-red-500 group">
                        <i className="fas fa-dollar-sign text-4xl text-red-500 mb-4 group-hover:text-white"></i>
                        <p className="text-2xl font-bold group-hover:text-white">33k</p>
                        <p className="group-hover:text-white">Monthly Product Sale</p>
                    </div>
                    <div className="border p-4 rounded-lg hover:bg-red-500 group">
                        <i className="fas fa-shopping-bag text-4xl text-red-500 mb-4 group-hover:text-white"></i>
                        <p className="text-2xl font-bold group-hover:text-white">45.5k</p>
                        <p className="text-gray-600 group-hover:text-white">Customer active in our site</p>
                    </div>
                    <div className="border p-4 rounded-lg hover:bg-red-500 group">
                        <i className="fas fa-dollar-sign text-4xl text-red-500 mb-4 group-hover:text-white"></i>
                        <p className="text-2xl font-bold group-hover:text-white">25k</p>
                        <p className="text-gray-600 group-hover:text-white">Annual gross sale in our site</p>
                    </div>
                </div>


                {/* Team Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-start">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="mx-auto mb-6 h-96 w-72 object-cover"
                            />
                            <h2 className="font-normal pl-20">{member.name}</h2>
                            <p className="text-gray-600 pl-20">{member.role}</p>
                            <div className="flex justify-start space-x-2 mt-4 pl-20 gap-3">
                                <a href={member.socialLinks.twitter}>
                                    <i className="fab fa-twitter text-red-500 text-2xl"></i>
                                </a>
                                <a href={member.socialLinks.instagram}>
                                    <i className="fab fa-instagram text-red-500 text-2xl"></i>
                                </a>
                                <a href={member.socialLinks.linkedin}>
                                    <i className="fab fa-linkedin text-red-500 text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-10 text-center">
                    <div className="p-4">
                        <i className="fas fa-shipping-fast text-4xl text-black mb-4"></i>
                        <h3 className="font-bold text-lg">FREE AND FAST DELIVERY</h3>
                        <p className="text-gray-600">Free delivery for all orders over $140</p>
                    </div>
                    <div className="p-4">
                        <i className="fas fa-headset text-4xl text-black mb-4"></i>
                        <h3 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
                        <p className="text-gray-600">Friendly 24/7 customer support</p>
                    </div>
                    <div className="p-4">
                        <i className="fas fa-user-shield text-4xl text-black mb-4"></i>
                        <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
                        <p className="text-gray-600">We return money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
