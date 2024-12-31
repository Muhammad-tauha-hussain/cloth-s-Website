import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import DressStyle from "../components/DressStyle.jsx";
import Header from "../components/Header.jsx";
import NavbarAdds from "../components/NavbarAdds.jsx";
import Testimonials from "../components/Testimonials.jsx";
import { testimonials } from "./../utils/data.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const Home = () => {
  const navigate = useNavigate()
  // const [isAuthenticated, setIsAuthenticated] = useState(null); // null means "loading"
  // const navigate = useNavigate();

  // // Authentication Check
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigate("/login");
  //     } else {
  //       setIsAuthenticated(true);
  //     }
  //   });

  //   return () => unsubscribe(); // Cleanup listener on unmount
  // }, [navigate]);

  // // Prevent rendering until authentication is checked
  // if (isAuthenticated === null) {
  //   return <div className="text-center py-10">Loading...</div>;
  // }

  const tShirts = [
    {
      id: 1,
      name: "Graphic T-Shirt",
      description: "A stylish graphic t-shirt with modern artwork.",
      price: 19.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Blue"],
      stock: 50,
      imageUrl: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Plain Cotton T-Shirt",
      description: "A comfortable and breathable plain cotton t-shirt.",
      price: 14.99,
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Gray", "White", "Navy"],
      stock: 75,
      imageUrl: "https://images.pexels.com/photos/1897886/pexels-photo-1897886.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Vintage T-Shirt",
      description: "A retro-style t-shirt with a vintage print.",
      price: 22.99,
      size: ["M", "L", "XL"],
      color: ["Red", "Black", "Green"],
      stock: 30,
      imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Basic V-Neck T-Shirt",
      description: "A simple and elegant v-neck t-shirt, perfect for layering.",
      price: 17.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Charcoal"],
      stock: 60,
      imageUrl: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <NavbarAdds />
        {/* New Arrivals Section */}
        <div className="bg-white py-10 px-5 w-[90%] m-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            New Arrivals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tShirts.map((tShirt) => (
              <Card
                key={tShirt.id}
                url={tShirt.imageUrl}
                headings={tShirt.name}
                price={tShirt.price}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
            <button 
            onClick={()=> navigate('/products')}
            className="px-12 py-4 bg-[#FF6F61] text-white font-semibold rounded-full shadow-lg hover:bg-[#FF4E43] transition duration-300">
              Show More
            </button>
          </div>
        </div>
        {/* Top Selling Section */}
        <div className="bg-white py-10 px-5 w-[90%] m-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Top Selling
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tShirts.map((tShirt) => (
              <Card
                key={tShirt.id}
                url={tShirt.imageUrl}
                headings={tShirt.name}
                price={tShirt.price}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
            <button 
            onClick={()=> navigate('/products')}
            className="px-12 py-4 bg-[#FF6F61] text-white font-semibold rounded-full shadow-lg hover:bg-[#FF4E43] transition duration-300">
              Show More
            </button>
          </div>

        </div>
        <DressStyle />
        <div className="flex gap-2 overflow-x-auto my-10">
          {testimonials.map((testimonial, index) => (
            <Testimonials
              key={index}
              name={testimonial.name}
              review={testimonial.review.slice(0, 200)}
            />
          ))}
        </div>
        <Footer />
      </div>

    </>
  );
};

export default Home;
