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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-gray-900 p-6 relative overflow-hidden">
      {/* background glowing orbs */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-purple-600/40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/30 blur-2xl rounded-full animate-bounce"></div>

      {/* login card */}
      <div className="relative max-w-md w-full p-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_40px_rgba(139,92,246,0.5)]">
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              type="text"
              {...register("username")}
              className="w-full px-4 py-3 text-white placeholder-gray-400 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-3 text-white placeholder-gray-400 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:opacity-90 transition duration-300"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/20"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-white/20"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full py-3 text-lg font-semibold text-gray-900 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
