import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PetLists({ selectedCategory }) {
  const navigate = useNavigate();
  const [selectedPet, setSelectedPet] = useState(null);

  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      gender: "Male",
      size: "Large",
      weight: "30kg",
      color: "Golden",
      category: "Dogs",
      status: { medicalHistory: "Vaccinated, Neutered" },
      image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
    },
    {
      id: 2,
      name: "Rex",
      breed: "German Shepherd",
      gender: "Male",
      size: "Large",
      weight: "35kg",
      color: "Black & Tan",
      category: "Dogs",
      status: { medicalHistory: "Vaccinated" },
      image: "https://images.pexels.com/photos/1307630/pexels-photo-1307630.jpeg",
    },
    {
      id: 3,
      name: "Rocky",
      breed: "Bulldog",
      gender: "Male",
      size: "Medium",
      weight: "25kg",
      color: "Brindle",
      category: "Dogs",
      status: { medicalHistory: "Vaccinated, Dewormed" },
      image: "https://images.pexels.com/photos/4587992/pexels-photo-4587992.jpeg",
    },
    {
      id: 4,
      name: "Bella",
      breed: "Labrador Retriever",
      gender: "Female",
      size: "Large",
      weight: "28kg",
      color: "Yellow",
      category: "Dogs",
      status: { medicalHistory: "Vaccinated, Spayed" },
      image: "https://images.pexels.com/photos/7210750/pexels-photo-7210750.jpeg",
    },
    {
      id: 5,
      name: "Mittens",
      breed: "Persian",
      gender: "Female",
      size: "Small",
      weight: "4kg",
      color: "White",
      category: "Cats",
      status: { medicalHistory: "Vaccinated" },
      image: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg",
    },
    {
      id: 6,
      name: "Whiskers",
      breed: "Siamese",
      gender: "Male",
      size: "Medium",
      weight: "5kg",
      color: "Cream & Brown",
      category: "Cats",
      status: { medicalHistory: "Vaccinated, Dewormed" },
      image: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg",
    },
    {
      id: 7,
      name: "Luna",
      breed: "Maine Coon",
      gender: "Female",
      size: "Large",
      weight: "7kg",
      color: "Gray",
      category: "Cats",
      status: { medicalHistory: "Vaccinated, Spayed" },
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
  ];

  const filteredPets =
    selectedCategory === "All" || !selectedCategory
      ? pets
      : pets.filter((pet) => pet.category === selectedCategory);

  return (
    <>
      {/* Pet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {filteredPets.map((pet) => (
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

      {/* Pet Modal */}
      {selectedPet && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPet(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-black transition"
            >
              ✖
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedPet.image}
                alt={selectedPet.name}
                className="w-full h-69 object-cover rounded-lg shadow-md mb-4"
              />
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
                    onClick={() => navigate("/user/adoption-form")}
                    className="px-6 py-2 bg-black text-white font-semibold rounded-3xl shadow-md hover:bg-gray-800 transition"
                  >
                    Adopt Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PetLists;
