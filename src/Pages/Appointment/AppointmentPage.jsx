import React, { useState, useEffect } from "react";
import OVSLogo from "../../assets/Admin-Page-Image/OVSLogo.png";
import { useNavigate } from "react-router-dom";
import TopNavAdmin from "../../Components/Navigation/TopNavAdmin";

function AppointmentPage() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("loggedInAdmin");
    navigate("/admin/login", { replace: true });
  };

  useEffect(() => {
    // Dummy data - replace with your API call
    setAppointments([
      {
        id: 1,
        ownerName: "John Doe",
        date: "2025-08-15",
        time: "10:00 AM",
        service: "Vaccination",
        status: "Pending",
      },
      {
        id: 2,
        ownerName: "Jane Smith",
        date: "2025-08-16",
        time: "02:00 PM",
        service: "Consultation",
        status: "Pending",
      },
    ]);
  }, []);

  const handleReview = (appointment) => {
    setSelectedAppointment(appointment);
    setShowReviewModal(true);
  };

  const handleApprove = () => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === selectedAppointment.id
          ? { ...appt, status: "Confirmed" }
          : appt
      )
    );
    closeModal();
  };

  const handleReject = () => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === selectedAppointment.id
          ? { ...appt, status: "Cancelled" }
          : appt
      )
    );
    closeModal();
  };

  const closeModal = () => {
    setShowReviewModal(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="min-h-screen flex carret-transparent">
      <div className="flex-grow p-6 carret-transparent">
        <TopNavAdmin handleSignOut={handleSignOut} />
        {/* Appointments Table */}
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-lg font-semibold mb-4">Scheduled Appointments</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-600">
                <th className="py-3 px-4">Owner Name</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                appointments.map((appt) => (
                  <tr
                    key={appt.id}
                    className={`border-t hover:bg-gray-50 ${
                      appt.status === "Confirmed"
                        ? "bg-green-100"
                        : appt.status === "Cancelled"
                        ? "bg-red-100"
                        : ""
                    }`}
                  >
                    <td className="py-2 px-4">{appt.ownerName}</td>
                    <td className="py-2 px-4">{appt.date}</td>
                    <td className="py-2 px-4">{appt.time}</td>
                    <td className="py-2 px-4">{appt.service}</td>
                    <td className="py-2 px-4 font-semibold">{appt.status}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleReview(appt)}
                        className="text-blue-600 hover:underline"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Review Modal */}
        {showReviewModal && selectedAppointment && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Review Appointment</h2>
              <div className="mb-4">
                <p>
                  <strong>Owner Name:</strong> {selectedAppointment.ownerName}
                </p>
                <p>
                  <strong>Date:</strong> {selectedAppointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {selectedAppointment.time}
                </p>
                <p>
                  <strong>Service:</strong> {selectedAppointment.service}
                </p>
                <p>
                  <strong>Status:</strong> {selectedAppointment.status}
                </p>
              </div>

              {selectedAppointment.status === "Pending" ? (
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={handleApprove}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={handleReject}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel Review
                  </button>
                </div>
              ) : (
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentPage;
