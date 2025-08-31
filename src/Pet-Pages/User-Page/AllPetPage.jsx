import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PawfectCareLogo from "../../assets/User-Page-Image//PawfectCareLogo.svg";
import AdoptionBanner from "../../assets/User-Page-Image/AdoptionBanner.png";

const pets = [
  {
    id: 1,
    type: "Dog",
    name: "Buddy",
    image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
    breed: "Golden Retriever",
    size: "Large",
    gender: "Male",
    weight: "30kg",
    color: "Golden",
    status: {
      medicalHistory: "Healthy",
    },
  },
  {
    id: 2,
    type: "Dog",
    name: "Rex",
    image: "https://images.pexels.com/photos/1307630/pexels-photo-1307630.jpeg",
    breed: "German Shepherd",
    size: "Large",
    gender: "Male",
    weight: "35kg",
    color: "Black & Tan",
    status: {
      medicalHistory: "Injured",
    },
  },
  {
    id: 3,
    type: "Cat",
    name: "Whiskers",
    image: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg",
    breed: "Siamese",
    size: "Medium",
    gender: "Female",
    weight: "5kg",
    color: "White & Gray",
    status: {
      medicalHistory: "Healthy",
    },
  },
  {
    id: 4,
    type: "Cat",
    name: "Mittens",
    image: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg",
    breed: "Persian",
    size: "Small",
    gender: "Male",
    weight: "4kg",
    color: "Brown",
    status: {
      medicalHistory: "Asthma",
    },
  },
];

function AllPetPage() {
  const navigate = useNavigate();
  const [selectedPet, setSelectedPet] = useState(null);

  const delayedNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <div className="min-h-screen text-gray-900 relative">
      {/* Header */}

      {/* Banner Section */}
      <div className="-mt-1 w-full bg-[#D7DBF5]">
        <img
          src={AdoptionBanner}
          className="w-full h-auto"
          alt="Adoption Banner"
        />
      </div>

      {/* Pets Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto mt-20">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-center">
          All Pets Available for Adoption
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-8 mb-8 mt-8 relative z-10">
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

        {/* Pet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white shadow-md rounded-xl overflow-hidden p-4 text-center cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedPet(pet)}
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-bold">{pet.name}</h3>
              <p className="text-sm text-gray-600">{pet.breed}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedPet && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Close Button in Circle */}
            <button
              onClick={() => setSelectedPet(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-black transition"
            >
              ✖
            </button>

            <div className="flex flex-col items-center">
              {/* Pet Image */}
              <img
                src={selectedPet.image}
                alt={selectedPet.name}
                className="w-full h-69 object-cover rounded-lg shadow-md mb-4"
              />

              {/* Pet Name */}
              <h2 className="text-2xl font-bold">{selectedPet.name}</h2>
              <p className="text-gray-600 mb-6">{selectedPet.breed}</p>

              {/* Pet Details */}
              <div className="w-full">
                <h3 className="font-semibold text-xl mb-3 text-center border-b pb-2">
                  Pet Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium">{selectedPet.size}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">{selectedPet.gender}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="font-medium">{selectedPet.weight}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Color</p>
                    <p className="font-medium">{selectedPet.color}</p>
                  </div>
                </div>

                {/* Medical Status */}
                <h3 className="font-semibold text-xl mt-6 mb-3 text-center border-b pb-2">
                  Medical Status
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">History</p>
                    <p className="font-medium">
                      {selectedPet.status?.medicalHistory}
                    </p>
                  </div>
                </div>

                {/* Adopt Button */}
                <div className="mt-6 w-full flex justify-center">
                  <button
                    onClick={() => navigate("/adoption-form")}
                    className="px-6 py-2 bg-black text-white font-semibold rounded-3xl shadow-md hover:bg-gray-800 transition"
                  >
                    Adopt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
    </div>
  );
}

export default AllPetPage;
