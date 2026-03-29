"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useRef } from "react";
import useAuth from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const VerifyAccountPage = () => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <VerifyAccount />
    </Suspense>
  );
};

const VerifyAccount = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams?.get("token") ?? "";
  const userId = searchParams?.get("userId") ?? "";

  const { useEmailVerification } = useAuth();

  const {
    refetch: verify,
    isFetching,
    isSuccess,
    isError,
  } = useEmailVerification(token, userId);

  const hasVerified = useRef(false);

  useEffect(() => {
    if (!hasVerified.current && token && userId) {
      hasVerified.current = true;
      verify();
    }
  }, [token, userId, verify]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push("/login?verified=true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-137.5 bg-white rounded-[30px] border-2 border-gray-200 p-6 sm:p-8 md:p-9 flex flex-col gap-6 sm:gap-7">
        <div className="bg-white border border-gray-200 rounded-xl p-10 max-w-md w-full text-center shadow-sm">
          {!isSuccess && !isError && (
            <>
              <h2 className="text-2xl font-bold text-[#1B3C59] mb-3">
                {isFetching
                  ? "Verifying your email..."
                  : "Preparing verification..."}
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Please wait while we activate your account.
              </p>
            </>
          )}

          {isSuccess && (
            <>
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-[#1B3C59] mb-3">
                Email verified!
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Your account is now active. Redirecting you to login...
              </p>
              <button
                onClick={() => router.push("/login")}
                className="w-full bg-[#1B3C59] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Go to Login
              </button>
            </>
          )}

          {isError && (
            <>
              <div className="text-4xl mb-4">❌</div>
              <h2 className="text-2xl font-bold text-red-600 mb-3">
                Verification failed
              </h2>
              <p className="text-gray-500 text-base mb-8">
                This link is invalid or has expired. Please request a new
                verification email.
              </p>
              <button
                onClick={() => router.push("/login")}
                className="w-full bg-[#1B3C59] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Back to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
