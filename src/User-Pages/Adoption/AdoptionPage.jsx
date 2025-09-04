import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import UserNavigation from "../../Components/Navigation/TopNavUser";
import AdoptionBanner from "../../assets/User-Page-Image/AdoptionBanner.png";
import PetGroup from "../../assets/User-Page-Image/PetGroup.svg";
import AdoptionConfirmationModal from "../../Components/Modals/AdoptionConfirmationModal"; // ✅ added
import ChatWidget from "../../Components/ChatWidget/ChatWidget";

function AdoptionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAdoptionModal, setShowAdoptionModal] = useState(false);

  useEffect(() => {
    if (location.state?.showAdoptionConfirmation) {
      setShowAdoptionModal(true);
      const timer = setTimeout(() => {
        setShowAdoptionModal(false);
      }, 2000);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can we help you today? 🐾" },
  ]);
  const [input, setInput] = useState("");

  // Handle send message
  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Optional: simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thanks for reaching out! We’ll get back to you soon,",
        },
      ]);
    }, 1000);
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen text-gray-900 relative bg-white">
      <UserNavigation />

      <div className="w-full bg-[#D7DBF5] mt-[64px]">
        <img
          src={AdoptionBanner}
          alt="Adoption Campaign Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Pet Category Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto mt-12">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-center">
          Available Pets for Adoption
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-8 mb-0 relative z-10">
          <button
            onClick={() => navigate("/dogs")}
            className="px-6 py-2 bg-[#a9b2d6] text-white font-medium rounded-3xl shadow-md"
          >
            Dogs
          </button>
          <button
            onClick={() => navigate("/cats")}
            className="px-6 py-2 bg-[#dbcdb4] text-white font-medium rounded-3xl shadow-md"
          >
            Cats
          </button>
          <button
            onClick={() => navigate("/all")}
            className="px-6 py-2 bg-[#a16f4a] text-white font-medium rounded-3xl shadow-md"
          >
            All
          </button>
        </div>

        {/* Pet Group Image */}
        <div className="flex justify-center -mt-48">
          <img
            src={PetGroup}
            alt="Group of pets illustration"
            className="w-[800px] max-w-full h-auto"
          />
        </div>
      </section>

      {/* Floating Chat Icon */}
      <ChatWidget />
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 md:px-20">
        <div className="text-center mb-6"></div>
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

      {/* Adoption Confirmation Modal */}
      <AdoptionConfirmationModal
        isOpen={showAdoptionModal}
        onClose={() => setShowAdoptionModal(false)}
      />
    </div>
  );
}

export default AdoptionPage;
