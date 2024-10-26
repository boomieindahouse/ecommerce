import { AiFillPhone, AiFillMail } from 'react-icons/ai';

const ContactPage = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4 h-[1000px]">
                {/* Breadcrumb */}
            <div className="text-sm text-gray-800 mb-8 px-10">
                <a href="/" className="hover:text-red-500">Home</a> / <span>Contact</span>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] gap-8 bg-white p-10 rounded-lg content-center">

                    {/* ข้อมูลการติดต่อ */}
                    <div className="bg-gray-50 p-6 h-[400px] rounded-lg shadow content-center">
                        <div className="flex items-center mb-10">
                            <AiFillPhone className="text-red-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-bold">Call To Us</h3>
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +66-99-999-9999</p>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex items-center">
                            <AiFillMail className="text-red-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-bold">Write To US</h3>
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@example.com</p>
                                <p>Emails: support@example.com</p>
                            </div>
                        </div>
                    </div>

                    {/* ฟอร์มส่งข้อความ */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="col-span-1 md:col-span-1 p-3 border border-gray-300 bg-gray-200 text-black rounded"
                            />
                            <input
                                type="email"
                                placeholder="Your Email *"
                                className="col-span-1 md:col-span-1 p-3 border border-gray-300 bg-gray-200 text-black rounded"
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone *"
                                className="col-span-1 md:col-span-1 p-3 border border-gray-300 text-black bg-gray-200 rounded"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-300 bg-gray-200 text-black rounded mb-4"
                            rows="5"
                        ></textarea>
                        <button className="w-52 bg-red-600 text-white py-3 rounded hover:bg-red-500 transition-colors">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
