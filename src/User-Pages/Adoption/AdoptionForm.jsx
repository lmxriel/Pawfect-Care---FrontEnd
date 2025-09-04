import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdoptionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    purpose: "",
    street: "",
    barangay: "",
    city: "",
    province: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/adoption", { state: { showAdoptionConfirmation: true } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Adoption Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <div className="flex">
              <span className="px-3 py-2 bg-gray-200 border border-r-0 rounded-l-lg text-gray-700">
                +63
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="9123456789"
                className="w-full border border-gray-300 rounded-r-lg p-2 focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Date of Birth & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              placeholder="Purok/Street/Block No."
              className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-1 focus:ring-black"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <select
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              >
                <option value="">Select Barangay</option>
                <option value="Baras">Baras</option>
                <option value="Buenaflor">Buenaflor</option>
                <option value="Calean">Calean</option>
                <option value="D'Ledesma">D'Ledesma</option>
                <option value="E.J.C. Montilla">E.J.C. Montilla</option>
              </select>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              >
                <option value="">Select City</option>
                <option value="Tacurong City">Tacurong City</option>
              </select>
            </div>

            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:ring-1 focus:ring-black"
            >
              <option value="">Select Province</option>
              <option value="Sultan Kudarat">Sultan Kudarat</option>
            </select>
          </div>

          {/* Purpose */}
          <div>
            <label className="block font-medium mb-1">Purpose of Adoption</label>
            <p className="text-xs italic mb-1 text-gray-500">
              Note: This section helps ensure that the adopter is responsible
              and understands the commitment of providing a safe and loving home
              for the pet.
            </p>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black"
              rows="3"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#a16f4a] text-white py-2 rounded-lg font-semibold hover:bg-amber-900 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
