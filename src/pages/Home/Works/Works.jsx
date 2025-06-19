import React from "react";
import { FaCheckCircle, FaRegLightbulb, FaShippingFast, FaUserShield } from "react-icons/fa";

const Works = () => {
  const howItWorksData = [
    {
      icon: <FaRegLightbulb className="text-4xl text-primary" />,
      title: "Choose a Service",
      description:
        "Browse our services and select the one that suits your needs.",
    },
    {
      icon: <FaUserShield className="text-4xl text-primary" />,
      title: "Secure Booking",
      description:
        "Book securely through our platform with verified professionals.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: "Get Confirmation",
      description: "Receive confirmation and real-time updates on your order.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-primary" />,
      title: "Enjoy the Service",
      description: "Sit back and relax while we deliver top-quality service.",
    },
  ];
  return <section className="py-10 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-primary">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto ">
        {howItWorksData.map((item, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <div className="mb-4 flex">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
};

export default Works;
