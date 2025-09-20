"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuthStore } from "./login";
import { useRouter } from "next/navigation";

type LoginFormInputs = {
  email: string;
  password: string;
};

type SignupFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs | SignupFormInputs>();

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    // 🔹 Admin stays hardcoded
    if (email === "admin@site.com" && password === "admin123") {
      login("admin");
      router.push("/admin");
      alert("Admin login successful ✅");
      return;
    }

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify(data),
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Something went wrong");
      const userEmail = result.user?.email;

      login("user");
      alert(result.message);
/*
      if (userEmail) {
        const uRes = await fetch(`/api/users/${encodeURIComponent(userEmail)}`);
        const uJson = await uRes.json();
        if (uRes.ok) {
          // do something with uJson.user
          console.log("Full user:", uJson.user);
          // optionally store in context or localStorage (avoid storing password)
        } else {
          console.warn("Failed to fetch user details:", uJson);
        }
      }
*/
      if (isLogin) router.push("/"); // redirect user if needed
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#33accc]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded text-black border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border rounded border-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm password is required ",
              })}
              className="w-full px-4 py-2 border text-black border-black rounded"
            />
          )}

          <button
            type="submit"
            className="w-full bg-[#33accc] text-white py-2 rounded text-2xl font-semibold"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-black">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#33accc] underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
