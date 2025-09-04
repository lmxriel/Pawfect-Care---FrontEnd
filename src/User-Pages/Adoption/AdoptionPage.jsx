import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserNavigation from "../../Components/Navigation/TopNavUser";
import AdoptionBanner from "../../assets/User-Page-Image/AdoptionBanner.png";
import PetGroup from "../../assets/User-Page-Image/PetGroup.svg";
import AdoptionConfirmationModal from "../../Components/Modals/AdoptionConfirmationModal"; 
import ChatWidget from "../../Components/ChatWidget/ChatWidget";
import CategoryButtons from "../../Components/PetCategory/CategoryButtons";
import PetLists from "../../Components/PetCategory/PetLists";

function AdoptionPage() {
  const location = useLocation();
  const [showAdoptionModal, setShowAdoptionModal] = useState(false);
  const navigate = useNavigate();

  // Default category is "All" so pets show immediately
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    if (location.state?.showAdoptionConfirmation) {
      setShowAdoptionModal(true);
      const timer = setTimeout(() => {
        setShowAdoptionModal(false);
      }, 2000);
      window.history.replaceState({}, document.title);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen text-gray-900 relative bg-white">
      {/* Top Navigation */}
      <UserNavigation />

      {/* Banner */}
      <div className="w-full bg-[#D7DBF5] mt-[64px]">
        <img
          src={AdoptionBanner}
          alt="Adoption Campaign Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Pet Category Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Available Pets for Adoption
        </h2>

        {/* Category Buttons */}
        <CategoryButtons 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Pet Group Image - hide if a category is selected */}
        {!selectedCategory && (
          <div className="flex justify-center -mt-48 mb-12">
            <img
              src={PetGroup}
              alt="Group of pets illustration"
              className="w-[800px] max-w-full h-auto"
            />
          </div>
        )}

        {/* Show pets */}
        {selectedCategory && (
          <PetLists
            selectedCategory={selectedCategory}
            onSelectPet={setSelectedPet}
          />
        )}
      </section>

      {/* Floating Chat Icon */}
      <ChatWidget />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 md:px-20">
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
