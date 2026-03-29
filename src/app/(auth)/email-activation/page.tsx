"use client";
import React, { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EmailActivationPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { useResendEmailVerificationMutation } = useAuth();
  const { mutate: resendEmail, isPending } = useResendEmailVerificationMutation;

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const onSubmit = () => {
    if (!email) {
      toast.error("Email not found. Please go back and try again.");
      router.back();
      return;
    }
    resendEmail({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-137.5 bg-white rounded-[30px] border-2 border-gray-200 p-6 sm:p-8 md:p-9 flex flex-col gap-6 sm:gap-7">
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gray-200">
          <Image src="/images/mail.png" alt="mail" width={28} height={28} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold">Check your email</h1>

        <p className="text-sm sm:text-base text-[#525866]">
          We just sent an email to{" "}
          <span className="font-medium break-all">{email}</span>. Open the email
          to verify your email address.
        </p>

        <p className="text-sm sm:text-base text-[#525866]">
          If you don't see the email in your inbox, please check your spam
          folder. If you still don't see it, please contact us and we'll help
          you out. Thank you for joining 4E Agency!
        </p>

        <p className="text-sm sm:text-base font-bold text-[#525866]">
          Click the link in your email to continue
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <a
            href="mailto:info@4thestateagency.com"
            className="w-full sm:w-auto px-5 py-3 sm:py-4 rounded-full border border-gray-300 text-sm sm:text-base hover:bg-gray-50 transition"
          >
            Contact Us
          </a>

          <button
            onClick={onSubmit}
            disabled={isPending || !email}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-5 py-3 sm:py-4 rounded-full bg-[#1F3F5B] text-white text-sm sm:text-base hover:opacity-90 transition"
          >
            <RotateCcw size={16} className={isPending ? "animate-spin" : ""} />
            {isPending ? "SENDING..." : "RESEND CONFIRMATION EMAIL"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailActivationPage;
