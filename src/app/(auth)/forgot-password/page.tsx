"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import { Loader2, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ForgotPasswordResponse } from "@/service/authService";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { useForgotPasswordMutation } = useAuth();

  const ForgotPasswordSchema = z.object({
    email: z.string().trim().nonempty("Email is required"),
  });

  type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const isLoading = useForgotPasswordMutation.isPending;
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    useForgotPasswordMutation.mutate(data, {
      onSuccess: (response: ForgotPasswordResponse) => {
        const { status } = response;
        // if (status === "Success") {
        //   router.push("/reset-password");
        // }
      },
    });
  };
  return (
    <>
      <div className="min-h-screen flex items-start justify-center px-4 pt-24">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center tracking-wide">
              Forgot Password
            </h2>
            <p className="text-center  mt-2">
              Enter your email address to receive instructions for resetting
              your password.
            </p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                {...form.register("email")}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black bg-white"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full bg-[#1B3C59] hover:bg-[#1B3C59] text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <>SUBMIT</>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
