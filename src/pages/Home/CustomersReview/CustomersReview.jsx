import React, {  useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import customer from "../../../assets/customer-top.png"

const reviews = [
  {
    id: 1,
    comment: "Profast is amazing! My parcel arrived within hours. Super fast and safe!",
    userImage: "/assets/user1.jpg",
    userName: "Tanvir Ahmed",
    userRole: "E-commerce Seller",
  },
  {
    id: 2,
    comment: "I love the live tracking. I always know where my delivery is!",
    userImage: "/assets/user2.jpg",
    userName: "Farzana Islam",
    userRole: "Online Shop Owner",
  },
  {
    id: 3,
    comment: "24/7 call support helped me resolve an issue at midnight. Impressed!",
    userImage: "/assets/user3.jpg",
    userName: "Mahmudul Hasan",
    userRole: "Logistics Manager",
  },
];
const CustomersReview = () => {
        const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  
  return (
     <section className="py-16  text-center">
      {/* Illustration */}
      <img
        src={customer}
        alt="illustration"
        className="mx-auto mb-6 w-60 h-24"
      />

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        What our customers are saying
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Enhance posture, mobility, and well-being effortlessly with Profast. Achieve proper alignment, reduce pain, and strengthen your workflow with ease!
      </p>

      {/* Review Cards */}
      <div className="flex gap-4 justify-center items-center px-4 overflow-hidden">
        {reviews.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-500 max-w-xs w-full p-6 rounded-xl border
              ${
                index === current
                  ? "bg-white shadow-xl opacity-100 scale-100 z-10"
                  : "bg-gray-100 opacity-50 scale-90"
              }`}
          >
            <p className="text-sm italic text-gray-700 mb-6">"{item.comment}"</p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">{item.userName}</h4>
                <p className="text-xs text-gray-500">{item.userRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? "bg-primary" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CustomersReview;
