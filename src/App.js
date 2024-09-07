import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import ServicePage from "./Pages/Service";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/Contact";

const router = createBrowserRouter([
     {
          path: "/",
          element: (
               <>
                    <Navbar />
                    <Outlet />
                    <Footer />
               </>
          ),
          children: [
               {
                    index: true,
                    element: <Home />,
               },
               {
                    path: "/services",
                    element: <ServicePage />,
               },
               {
                    path: "/aboutus",
                    element: <AboutUs />,
               },
               {
                    path: "contact",
                    element: <ContactUs />,
               },
          ],
     },
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
