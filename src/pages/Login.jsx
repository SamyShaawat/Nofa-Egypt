import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignInWithEmailAndPassword } from "../firebase/auth";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/"); // Redirect after login
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  // Redirect if user is already logged in
  if (userLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="h-[400px] flex items-center justify-center bg-gray-100">
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="bg-white p-8 rounded-lg border-2 border-slate-300 shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/80"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
