"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  BookText,
  HeartHandshake,
  Star,
  Eye,
  EyeClosed,
  Loader2,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const { SignUpMutation } = useAuth();
  const signUpMutation = SignUpMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerSchema = z
    .object({
      firstName: z.string().min(1, { message: "First name is required" }),
      secondName: z.string().min(1, { message: "Last name is required" }),
      email: z.email({ message: "Invalid email" }).trim(),
      password: z
        .string()
        .min(8, { message: "Password is required, at least 8 characters" })
        .max(100, { message: "Password must be less than 100 characters" })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter",
        })
        .regex(/[0-9]/, {
          message: "Password must contain at least one digit",
        })
        .regex(/[@$!%*?&#]/, {
          message:
            "Password must contain at least one special character (@, $, !, %, *, ?, &, #)",
        }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords don't match",
    });

  type RegisterFormValues = z.infer<typeof registerSchema>;
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      secondName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const isLoading = signUpMutation.isPending;
  const onSubmit = async (data: RegisterFormValues) => {
    console.log("Form submitted:", data);
    try {
      const mutationResult = await signUpMutation.mutateAsync(data);
      localStorage.setItem("email", data.email);

      form.reset();
      router.push("/email-activation");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center">
      <div className="hidden lg:flex flex-col justify-center w-1/2 px-24">
        <h2 className="text-5xl font-semibold leading-tight mb-8">
          You're just a few <br /> clicks away from
        </h2>
        <div className="space-y-4 text-xl">
          <p className="flex items-center gap-3">
            <Star size={20} /> Creating impactful stories
          </p>
          <p className="flex items-center gap-3">
            <BookText size={20} /> Getting published
          </p>
          <p className="flex items-center gap-3">
            <HeartHandshake size={20} /> Quick support whenever needed
          </p>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
        <div className="bg-white rounded-4xl border-2 w-full max-w-145 p-10">
          <h1 className="text-2xl font-semibold mb-6">Start your journey</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  {...register("secondName")}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.secondName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.secondName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye width={18} /> : <EyeClosed width={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword")}
                  className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <Eye width={18} />
                  ) : (
                    <EyeClosed width={18} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <p className="text-xs text-[#525866] font-medium">
              By submitting this form, you are agreeing to our{" "}
              <a href="#" className="font-semibold underline">
                Terms & Service
              </a>{" "}
              and{" "}
              <a href="#" className="font-semibold underline">
                Privacy Policy
              </a>
              .
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full bg-[#1B3C59] hover:bg-[#1B3C59] text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  CREATE ACCOUNT <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
