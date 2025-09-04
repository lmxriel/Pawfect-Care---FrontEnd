import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserNavigation from "../../Components/Navigation/TopNavUser";
import BookingPoster from "../../assets/User-Page-Image/BookingPoster.png";
import consultation from "../../assets/User-Page-Image/consultation.svg";
import deworm from "../../assets/User-Page-Image/deworm.svg";
import BookingFormModal from "../../Components/Modals/BookingFormModal";
import BookingConfirmationModal from "../../Components/Modals/BookingConfirmationModal";
import ChatWidget from "../../Components/ChatWidget/ChatWidget";

function BookingPage() {
  const navigate = useNavigate();
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const services = [
    {
      icon: consultation,
      title: "Consultation",
      description:
        "Get expert veterinary advice and personalized care for your pets.",
    },
    {
      icon: deworm,
      title: "Vaccination",
      description:
        "Maintain your pet’s health with proper deworming and anti-rabies treatments.",
    },
  ];

  const handleBookNow = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleFormSubmit = (data) => {
    setBookingData(data);
    setShowFormModal(false);
    setShowConfirmationModal(true);
    console.log("Booking submitted:", data);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <UserNavigation />

      {/* Poster Section */}
      <div className="-mt-1 w-full">
        <img src={BookingPoster} className="w-full h-auto" />
      </div>

      {/* About Section */}
      <div className="bg-[#a16f4a] py-20 min-h-screen">
        <section className="px-6 py-20 max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-white mb-12 text-center font-poppins">
            We Provide Best Services
          </h2>

          {/* Service Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-72 bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center">
                  <div className="bg-yellow-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Booking Button */}
          <div className="flex justify-center mt-16">
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-white text-black font-semibold rounded-3xl shadow-md hover:bg-gray-200"
            >
              Book Now
            </button>
          </div>
        </section>
      </div>

      {/* Booking Form Modal */}
      <BookingFormModal
        isOpen={showFormModal}
        onClose={closeFormModal}
        onSubmit={handleFormSubmit}
      />

        <BookingConfirmationModal
          isOpen={showConfirmationModal}
          onClose={closeConfirmationModal}
        />

      <ChatWidget />

      {/* Footer */}
      <footer className="bg-white text-black py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 text-m gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-2">Location:</h4>
            <p>
              Office of Veterinary Services,
              <br />
              Bonifacio Street, Barangay Poblacion,
              <br />
              Tacurong, Philippines, 9800
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Email:</h4>
            <p>ovstacurong@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Number:</h4>
            <p>09705475747</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Website:</h4>
            <p>www.pawfectcare.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BookingPage;
