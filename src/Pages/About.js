import React from "react";

const AboutUs = () => {
     return (
          <div className="bg-gray-100 min-h-screen">
               {/* Header */}
               <header className="bg-blue-800 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                         <h1 className="text-5xl font-extrabold mb-4">
                              About Us
                         </h1>
                         <p className="text-lg mb-8">
                              Learn more about our company, mission, and values.
                         </p>
                    </div>
               </header>

               {/* Main Content */}
               <main className="container mx-auto px-6 py-16">
                    {/* Company Overview */}
                    <section className="mb-16">
                         <h2 className="text-4xl font-bold mb-6">
                              Company Overview
                         </h2>
                         <p className="text-lg text-gray-700 mb-4">
                              We are a premier construction company committed to
                              delivering high-quality projects that meet our
                              clients' needs. Our team is dedicated to
                              excellence and ensuring every project is completed
                              with the highest standards.
                         </p>
                         <p className="text-lg text-gray-700">
                              Founded in [Year], we have a proven track record
                              in residential, commercial, and industrial
                              construction, always striving for innovation and
                              quality in every aspect of our work.
                         </p>
                    </section>

                    {/* Our Mission */}
                    <section className="bg-white p-12 rounded-lg shadow-lg mb-16">
                         <h2 className="text-4xl font-bold mb-6">
                              Our Mission
                         </h2>
                         <p className="text-lg text-gray-700">
                              Our mission is to exceed client expectations with
                              outstanding construction services that prioritize
                              quality, safety, and efficiency. We aim to build
                              strong relationships through transparency and
                              exceptional service.
                         </p>

                         <div className=" w-full h-[300px] flex flex-row justify-center items-center">
                              <div className=" w-[90%] h-[90%]">
                                   <img
                                        src="https://tse4.mm.bing.net/th?id=OIP.v2R2foPb-RbzjITqO9U6TwHaFL&pid=Api&P=0&h=180"
                                        className=" w-full h-full object-cover"
                                   />
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
};

export default AboutUs;
