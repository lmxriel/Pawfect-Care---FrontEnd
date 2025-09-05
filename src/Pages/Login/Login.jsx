import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import OVSLogo from "../../assets/Admin-Page-Image/OVSLogo.png";

const API_BASE_URL = "http://localhost:8081";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle input change dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    // try {
    //   const res = await fetch(`${API_BASE_URL}/admin/login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: formData.email,
    //       password: formData.password,
    //     }),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     // ✅ Save token for later use
    //     localStorage.setItem("token", data.token);

    // ✅ Redirect to dashboard
    navigate("/admin/dashboard");
    //   } else {
    //     setErrorMessage(data.message || "Invalid email or password");
    //   }
    // } catch (err) {
    //   setErrorMessage("Something went wrong. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };
  // ✅ JSX should be here, NOT inside handleLogin
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Logo */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <img src={OVSLogo} alt="OVS Logo" className="w-80 h-80" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-[#600000] flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-full max-w-sm p-6">
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded focus:outline-none border"
              placeholder="Enter your email"
              // required
            />
          </div>

          {/* Password Field */}
          <div className="mb-2 relative">
            <label className="block text-white mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded focus:outline-none border"
              placeholder="Enter your password"
              // required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-black"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded font-bold transition ${
              loading
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
