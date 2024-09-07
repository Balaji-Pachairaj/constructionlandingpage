import React, { useState } from "react";

const ContactUs = () => {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          message: "",
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value,
          });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log("Form submitted:", formData);
     };

     return (
          <div className="bg-gray-100 min-h-screen">
               {/* Main Content */}
               <main className="container mx-auto px-6 py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                         {/* Left Side */}
                         <div className="flex-1 bg-blue-100 p-8 rounded-lg shadow-lg">
                              <h2 className="text-3xl font-bold mb-6">
                                   Get in Touch
                              </h2>
                              <p className="text-lg text-gray-700 mb-4">
                                   If you have any questions or need further
                                   information, feel free to reach out to us. We
                                   are here to help you and ensure your
                                   experience with our services is smooth and
                                   satisfying.
                              </p>
                              <p className="text-lg text-gray-700">
                                   Our team will get back to you as soon as
                                   possible to assist with your inquiries or
                                   concerns.
                              </p>
                         </div>

                         {/* Right Side */}
                         <div className="flex-1">
                              <form
                                   onSubmit={handleSubmit}
                                   className="bg-white p-8 rounded-lg shadow-lg"
                              >
                                   <div className="mb-4">
                                        <label
                                             htmlFor="name"
                                             className="block text-lg font-semibold mb-2"
                                        >
                                             Name
                                        </label>
                                        <input
                                             type="text"
                                             id="name"
                                             name="name"
                                             value={formData.name}
                                             onChange={handleChange}
                                             className="w-full p-3 border border-gray-300 rounded-lg"
                                             required
                                             placeholder="Enter a name"
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label
                                             htmlFor="email"
                                             className="block text-lg font-semibold mb-2"
                                        >
                                             Email
                                        </label>
                                        <input
                                             type="email"
                                             id="email"
                                             name="email"
                                             value={formData.email}
                                             onChange={handleChange}
                                             className="w-full p-3 border border-gray-300 rounded-lg"
                                             required
                                             placeholder="Enter a email"
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label
                                             htmlFor="message"
                                             className="block text-lg font-semibold mb-2"
                                        >
                                             Message
                                        </label>
                                        <textarea
                                             id="message"
                                             name="message"
                                             value={formData.message}
                                             onChange={handleChange}
                                             className="w-full p-3 border border-gray-300 rounded-lg"
                                             rows="6"
                                             required
                                             placeholder="Enter a message"
                                        />
                                   </div>
                                   <button
                                        type="submit"
                                        className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                   >
                                        Send Message
                                   </button>
                              </form>
                         </div>
                    </div>
               </main>
          </div>
     );
};

export default ContactUs;
