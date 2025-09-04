import React from "react";
import DogAndCat from "../../assets/User-Page-Image/DogAndCatImage.png";
import UserNavigation from "../../Components/Navigation/TopNavUser";
import ChatWidget from "../../Components/ChatWidget/ChatWidget";
function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f7] text-gray-900 relative overflow-hidden">
      <UserNavigation />
      <div className="-mt-1 w-full">
        <img
          src={DogAndCat}
          alt="Happy dog and cat"
          className="w-full h-auto"
        />
      </div>
      {/* About Section */}
      <div className="px-6 bg-white md:px-20 py-16">
        <h2 className="text-2xl font-extrabold text-[#7c5e3b] mb-6 text-left">
          ABOUT US
        </h2>
        <p className="mb-16 text-base text-justify">
          Pawfect Care is a web-based management system designed to make pet
          adoption easier and more accessible for residents of Tacurong City.
          Our platform connects adopters with loving pets in need of a home
          while also providing a seamless way to schedule veterinary
          consultations. By reducing the need for manual processing, we help
          streamline adoption efforts and ensure a smooth experience for
          adopters, pet owners, and the Tacurong City Veterinary Services
          Office.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#7c5e3b] mb-2 text-left">
              OUR MISSION
            </h3>
            <div className="border-t-4 border-[#7c5e3b] w-16 mb-4"></div>
            <p className="text-base text-justify">
              Our mission is to create a more efficient and compassionate pet
              adoption process while ensuring that pet owners have easy access
              to veterinary services. We strive to connect animals with
              responsible owners and promote a community where every pet
              receives the care and love they deserve.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#7c5e3b] mb-2 text-left">
              OUR VISION
            </h3>
            <div className="border-t-4 border-[#7c5e3b] w-16 mb-4"></div>
            <p className="text-base text-justify">
              We envision a future where pet adoption is hassle-free, ensuring
              that every stray or abandoned pet finds a loving and responsible
              home. Through technology, we aim to bridge the gap between
              adopters and available pets, making the process simple,
              transparent, and efficient. Additionally, we seek to improve pet
              healthcare by providing an easy-to-use platform for booking
              consultations and vaccinations.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#7c5e3b] mb-10">
          HOW IT WORKS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center text-sm">
          {[
            {
              title: "Browse a pet",
              desc: "View detailed profiles of dogs available for adoption, including their breed, age, and health status.",
            },
            {
              title: "Apply for adoption",
              desc: "Submit an adoption request online to express your interest in providing a home for a pet.",
            },
            {
              title: "Schedule a Consultation",
              desc: "Easily book an appointment to inquire about pet care and health advice.",
            },
            {
              title: "Book Vaccination",
              desc: "Ensure your pet stays healthy by scheduling vaccinations through our platform.",
            },
            {
              title: "Stay Updated",
              desc: "Receive notifications about your adoption application, consultation, and vaccination schedules.",
            },
          ].map((step, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-xl">
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
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
    </div>
  );
}
export default UserDashboardPage;
