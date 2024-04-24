import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { login } from "../../services/Index";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../components/spinnerMini/SpinnerMini";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await login(user);

      if (response.status === 200) {
        sessionStorage.setItem("userData", JSON.stringify(response.data));
        toast.success("User Successfully login");
        setLoading(false);
        navigate("/admin");
      } else {
        console.log("Unexpected status code:", response.status);
        toast.error(`Unexpected status code: ${response.status}`);
        setLoading(false);
      }
    } catch (error) {
      console.log("Login failed:", error.message);
      setLoading(false);
      toast.error(`${error.message}`);
      setUser((prevUser) => ({
        ...prevUser,
      }));
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col w-[40%] bg-sky-200 gap-4 p-3">
        <h1 className="text-center mt-4 text-sky-800 text-bold">Login</h1>
        <Input
          label="Email"
          id="email"
          onChange={onChange}
          name="email"
          type="text"
          disabled={loading}
        />
        <Input
          label="Password"
          id="password"
          onChange={onChange}
          name="password"
          type="password"
          disabled={loading}
        />
        <div className="flex justify-center">
          <Button
            onClick={handleLogin}
            disabled={loading}
            className="bg-sky-600 flex justify-center items-center"
          >
            {loading && <SpinnerMini />}
            <span className="text-sky-50 font-bold">Login</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
