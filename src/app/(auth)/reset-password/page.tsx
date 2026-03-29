"use client";
import React, { Suspense, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { Eye, EyeClosed, Loader2, MoveRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ResetPasswordResponse } from "@/service/authService";
import { toast } from "sonner";

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <ResetPassword />
    </Suspense>
  );
};

const ResetPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const { useResetPasswordMutation } = useAuth();

  const ResetPasswordSchema = z
    .object({
      newPassword: z
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
    .refine((data) => data.newPassword === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords don't match",
    });

  type ResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const isLoading = useResetPasswordMutation.isPending;

  const onSubmit = async (data: ResetPasswordFormValues) => {
    if (!token) {
      toast.error("Invalid or missing reset token.");
      return;
    }
    useResetPasswordMutation.mutate(
      { data, token },
      {
        onSuccess: (data: ResetPasswordResponse) => {
          const { status } = data;
          if (status === "Success") {
            localStorage.clear();
            router.push("/login");
          }
        },
      },
    );
  };
  return (
    <>
      <div className="min-h-screen flex items-start justify-center px-4 pt-24">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center tracking-wide">
              Create a new password
            </h2>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...form.register("newPassword")}
                  placeholder="Enter your new password"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye width={18} /> : <EyeClosed width={18} />}
                </button>
                {form.formState.errors.newPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  {...register("confirmPassword")}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black bg-white"
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
                {form.formState.errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full bg-[#1B3C59] hover:bg-[#1B3C59] text-white py-3 rounded-full font-medium hover:opacity-90 transition cursor-pointer tracking-wide"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>UPDATE PASSWORD</>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
