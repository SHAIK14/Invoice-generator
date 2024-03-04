import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://invoice-generator-xuny.onrender.com/api/login",
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (response.status === 200) {
        console.log(data.token);
        navigate("/ProductPage");
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
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              className="border rounded text-black w-full py-2 px-3 placeholder-gray-500"
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
            className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-black text-sm font-sans">
          No account yet?
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
