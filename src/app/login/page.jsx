"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";

const schema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await signIn("credentials", {
      ...data,
      callbackUrl: "/products",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
      <h2 className="text-3xl font-bold text-center text-white mb-2">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-gray-200 mb-1">Username</label>
          <input
            type="text"
            {...register("username")}
            className="w-full px-4 py-2 text-white placeholder-gray-400 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-200 mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full px-4 py-2 text-white placeholder-gray-400 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-[1px] bg-white/20"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-[1px] bg-white/20"></div>
      </div>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="w-full py-3 text-lg font-semibold text-gray-900 bg-white rounded-xl shadow hover:bg-gray-100 transition"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default LoginForm;
