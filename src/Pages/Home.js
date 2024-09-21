import React from "react";

const projects = [
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.etp3UJOoKAxBWfitTb_7GgHaFj&pid=Api&P=0&h=180",
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.q4r8tmw9G4BV0crhmhnlkgHaEK&pid=Api&P=0&h=180",
  },
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.BMA3OuNA6rsSbxZBQuiuPQHaEn&pid=Api&P=0&h=180",
  },
  {
    image:
      "https://tse4.mm.bing.net/th?id=OIP.h_5RBX8Ew9v8y6eO77ToqAAAAA&pid=Api&P=0&h=180",
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Lc3AFMtr9ctaE20zDGAIpgAAAA&pid=Api&P=0&h=180",
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.57SEBrZYuQXcRPk0Cq4kdQHaFj&pid=Api&P=0&h=180",
  },
];

const Home = () => {
  return (
    <>
      <section className="bg-white h-[calc(100vh-75px)] flex items-center md:mt-0 mt-[75px]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center h-full gap-[1rem]">
          {/* Left Section */}
          <div className="md:w-[45%] text-center md:text-left mb-8 md:mb-0 flex flex-col justify-center gap-[2rem] h-full">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Building Your Dreams, <br></br> One Project at a Time
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              At Construction Co., we are dedicated to delivering high-quality
              construction services that exceed your expectations. With years of
              experience and a team of skilled professionals, we bring your
              vision to life with precision and excellence.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="/services"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://kartrocket-mtp.s3.amazonaws.com/all-stores/image_homesolutionsvmart/data/content/2016_09_16_Sloped_Roof_Designs_26.jpg"
              alt="Construction"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>
        </div>
      </section>
      {/* <section
                    className=" bg-gradient-to-b to-[#D2E0FB] from-[#C68FE6] py-12 md:mt-0 mt-[2rem] min-h-screen"
                    id="projects"
               >
                    <div className="container mx-auto px-4 ">
                         <h2 className="text-3xl font-bold text-white mb-8 text-center">
                              Our Projects
                         </h2>
                         <p className="md:text-lg text-[16px] text-gray-700 mb-6 ps-12 pe-12 text-center">
                              At Construction Co., we are dedicated to
                              delivering high-quality construction services that
                              exceed your expectations. With years of experience
                              and a team of skilled professionals, we bring your
                              vision to life with precision and excellence.
                         </p>
                         <div className="flex flex-wrap w-full justify-evenly gap-[1rem] ">
                              {projects.map((project, index) => (
                                   <div
                                        key={index}
                                        className="bg-white overflow-hidden rounded-lg shadow-lg  lg:w-[30%] md:w-[45%] w-[45%]"
                                   >
                                        <img
                                             src={project.image}
                                             alt={`Project ${index + 1}`}
                                             className="w-full h-64 object-cover"
                                             style={{ aspectRatio: "1 / 1" }} // Ensures square aspect ratio
                                        />
                                   </div>
                              ))}
                         </div>
                    </div>
               </section> */}
    </>
  );
};

export default Home;
