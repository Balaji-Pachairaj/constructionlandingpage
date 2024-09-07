import React from "react";

const services = [
     {
          title: "Residential Construction",
          description:
               "Building homes with high-quality materials and craftsmanship.",
          image: "https://tse2.mm.bing.net/th?id=OIP.7yAXv1z81ivN41fAYNzJYQAAAA&pid=Api&P=0&h=180",
     },
     {
          title: "Commercial Construction",
          description:
               "Expert construction services for commercial spaces and buildings.",
          image: "https://www.marwoodconstruction.com/wp-content/uploads/2019/12/Commercial-Construction-Architecture-Design-min-scaled.jpg",
     },
     {
          title: "Renovations",
          description:
               "Updating and renovating existing spaces to meet modern standards.",
          image: "https://tse1.mm.bing.net/th?id=OIP.MPzr_O9E0w6IuOc8VSpGdQHaEK&pid=Api&P=0&h=180",
     },
     {
          title: "Project Management",
          description:
               "Overseeing and managing construction projects from start to finish.",
          image: "https://tse3.mm.bing.net/th?id=OIP.8FLy97YBMqRwskQzFvQFTwHaF9&pid=Api&P=0&h=180",
     },
     {
          title: "Design & Planning",
          description:
               "Providing design and planning services for efficient and aesthetic builds.",
          image: "https://tse2.mm.bing.net/th?id=OIP.lTmU7oZnbMGXDsB_uey5rgHaE6&pid=Api&P=0&h=180",
     },
];

const ServicePage = () => {
     return (
          <div className="  min-h-screen">
               <header className="bg-gray-300 bg-gradient-to-b from-[#9DBDFF] to-white  text-black py-16 flex flex-col items-center">
                    <div className="container mx-auto px-4 text-center">
                         <h1 className="text-4xl font-bold mb-4 ">
                              Our Services
                         </h1>
                         <p className="text-xl mb-8 text-blue-500 font-bold">
                              Discover the range of services we offer to meet
                              all your construction needs.
                         </p>
                    </div>

                    <div className="flex justify-center md:justify-start space-x-4">
                         {/* <a
                              href=""
                              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                         >
                              See our projects
                         </a> */}
                         <a
                              href="/contact"
                              className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                         >
                              Get in Touch
                         </a>
                    </div>
               </header>
               <main className="container mx-auto px-4 py-12">
                    <div className=" flex flex-row justify-evenly  flex-wrap gap-[2rem]">
                         {services.map((service, index) => (
                              <div
                                   key={index}
                                   className="bg-white rounded-lg shadow-lg overflow-hidden lg:w-[30%] md:w-[45%] w-[90%]  "
                              >
                                   <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover"
                                   />
                                   <div className="p-6">
                                        <h2 className="text-2xl font-semibold mb-2">
                                             {service.title}
                                        </h2>
                                        <p className="text-gray-700">
                                             {service.description}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>
               </main>
          </div>
     );
};

export default ServicePage;
