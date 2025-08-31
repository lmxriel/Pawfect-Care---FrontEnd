import React, { useState, useEffect } from "react";
import OVSLogo from "../../assets/Admin-Page-Image/OVSLogo.png";
import { useNavigate } from "react-router-dom";
import TopNavAdmin from "../../Components/Navigation/TopNavAdmin";

function AdoptionRequest() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("loggedInAdmin");
    navigate("/admin/login", { replace: true });
  };

  useEffect(() => {
    // Dummy data - replace with your API call
    setRequests([
      {
        id: 1,
        adopterName: "John Doe",
        petName: "Buddy",
        dateRequested: "2025-08-10",
        status: "Pending",
      },
      {
        id: 2,
        adopterName: "Jane Smith",
        petName: "Luna",
        dateRequested: "2025-08-11",
        status: "Pending",
      },
    ]);
  }, []);

  // Open review modal for selected request
  const handleReview = (request) => {
    setSelectedRequest(request);
    setShowReviewModal(true);
  };

  // Approve the selected request
  const handleApprove = () => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === selectedRequest.id ? { ...req, status: "Approved" } : req
      )
    );
    closeModal();
  };

  // Reject the selected request
  const handleReject = () => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === selectedRequest.id ? { ...req, status: "Rejected" } : req
      )
    );
    closeModal();
  };

  const closeModal = () => {
    setShowReviewModal(false);
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen flex carret-transparent">
      <div className="flex-grow p-6 carret-transparent">
        <TopNavAdmin handleSignOut={handleSignOut} />
        {/* Adoption Requests Table */}
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-lg font-semibold mb-4">Adoption Requests</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-600">
                <th className="py-3 px-4">Adopter Name</th>
                <th className="py-3 px-4">Pet Name</th>
                <th className="py-3 px-4">Date Requested</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No adoption requests found.
                  </td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr
                    key={req.id}
                    className={`border-t hover:bg-gray-50 ${
                      req.status === "Approved"
                        ? "bg-green-100"
                        : req.status === "Rejected"
                        ? "bg-red-100"
                        : ""
                    }`}
                  >
                    <td className="py-2 px-4">{req.adopterName}</td>
                    <td className="py-2 px-4">{req.petName}</td>
                    <td className="py-2 px-4">{req.dateRequested}</td>
                    <td className="py-2 px-4 font-semibold">{req.status}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleReview(req)}
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
        {showReviewModal && selectedRequest && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">
                Review Adoption Request
              </h2>
              <div className="mb-4">
                <p>
                  <strong>Adopter Name:</strong> {selectedRequest.adopterName}
                </p>
                <p>
                  <strong>Pet Name:</strong> {selectedRequest.petName}
                </p>
                <p>
                  <strong>Date Requested:</strong>{" "}
                  {selectedRequest.dateRequested}
                </p>
                <p>
                  <strong>Status:</strong> {selectedRequest.status}
                </p>
              </div>

              {selectedRequest.status === "Pending" ? (
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={handleApprove}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={handleReject}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
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

export default AdoptionRequest;
