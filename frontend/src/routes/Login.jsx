import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Import the CSS for Toastify

export default function Login({setfetch}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        // Show success toast
        localStorage.setItem("photo", response.data?.user?.photo);
        localStorage.setItem("name", response.data?.user?.name);
        toast.success("Login Successful! You have been logged in.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setfetch(true);
        navigate("/admin"); // Redirect to admin page
      } else {
        // Show error toast for invalid credentials
        toast.error("Invalid credentials. Please check your email and password.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (err) {
      // Show error toast if request fails
      toast.error("An error occurred while logging in.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="admin-card overflow-hidden">
          <div className="admin-card-inner">
            <div className="mb-6">
              <h2 className="admin-title">Admin Login</h2>
              <p className="admin-muted mt-1">Sign in to manage the conference website.</p>
            </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="admin-label">Email</label>
            <input
              type="email"
              className="admin-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="admin-label">Password</label>
            <input
              type="password"
              className="admin-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="admin-button-primary w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}
