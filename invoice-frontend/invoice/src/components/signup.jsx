import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      const data = response.data;

      if (response.status === 201) {
        console.log("User registered successfully");
        navigate("/login");
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              className="border text-black rounded w-full py-2 px-3 placeholder-gray-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border text-black rounded w-full py-2 px-3 placeholder-gray-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border text-black rounded w-full py-2 px-3 placeholder-gray-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button
            className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-00 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Signup
          </button>
        </form>
        <p className="mt-4 text-black text-sm font-sans">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
