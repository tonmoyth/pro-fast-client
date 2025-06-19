import React from "react";
import { FaShippingFast, FaGlobeAsia, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndoAlt } from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      icon: <FaShippingFast className="text-4xl text-primary" />,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-primary" />,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-primary" />,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: <FaBuilding className="text-4xl text-primary" />,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: <FaUndoAlt className="text-4xl text-primary" />,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return <section className="py-20 bg-accent-content mb-6 rounded-xl text-center">
      <div className="max-w-4xl mx-auto mb-12 px-4">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
        <p className="text-white text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-base-100 p-6 rounded-2xl shadow-md hover:bg-primary transition-all">
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
};

export default Service;
