import React from "react";
import { FaHeadset, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

const Benefit = () => {
  const benefits = [
    {
      id: 1,
      image: "https://i.ibb.co/39Dg37KX/Illustration-1.png",
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/39Dg37KX/Illustration-1.png",
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/39Dg37KX/Illustration-1.png",
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Profast</h2>

        <div className="space-y-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-base-200 rounded-xl shadow-md p-10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain mb-4 md:mb-0 md:mr-6"
              />

              {/* Divider */}
              <div className="hidden md:block border-1 border-dashed h-24 mx-4"></div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
