'use client';
import {
  ArrowRight,
  BookText,
  Eye,
  EyeClosed,
  HeartHandshake,
  Loader2,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { LoginResponse } from '@/service/authService';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { loginMutation } = useAuth();

  const LoginSchema = z.object({
    email: z
      .email({
        message: 'Invalid email',
      })
      .trim(),
    password: z.string().min(8, {
      message: 'Password is required',
    }),
  });

  type LoginFormValues = z.infer<typeof LoginSchema>;
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = loginMutation.isPending;
  const onSubmit = async (data: LoginFormValues) => {
    loginMutation.mutate(data, {
      onSuccess: (data: LoginResponse) => {
        if (data.status === 'Success') {
          router.push('/order-content');
        }
      },
    });
  };
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
          <h2 className="text-2xl font-semibold mb-6">Welcome back</h2>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                {...form.register('email')}
                className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  {...form.register('password')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye width={18} /> : <EyeClosed width={18} />}
                </button>
              </div>
              {form.formState.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                href={'/forgot-password'}
                className="text-base text-[#525866] cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full bg-[#1B3C59] hover:bg-[#1B3C59] text-white py-3 rounded-full font-medium hover:opacity-90 transition cursor-pointer"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  LOG IN <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
