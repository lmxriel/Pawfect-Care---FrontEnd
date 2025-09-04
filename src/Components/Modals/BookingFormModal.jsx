import React, { useState } from "react";

const BookingFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // send data back to parent
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Appointment Booking
        </h2>
        <form onSubmit={handleSubmit}>

          {/* Service Type */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Service Type
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-4 border rounded-lg"
          >
            <option value="">Select a service</option>
            <option value="Pet Consultation">Pet Consultation</option>
            <option value="Vaccination">Vaccination</option>
          </select>

          {/* Date */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-4 border rounded-lg"
          />

          {/* Time */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-6 border rounded-lg"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#a16f4a] text-white hover:bg-[#8b5e3e]"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;
