"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import CheckoutService, {
  CreateCheckoutResponse,
} from "@/service/checkoutService";

const useCheckout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const useCreateCheckoutMutation = () => {
    return useMutation({
      mutationFn: async () => {
        const reponse = await CheckoutService.createCheckoutSession();
        return reponse?.data;
      },
      onError: (error: AxiosError<{ message?: string }>) => {
        const messages = error.response?.data?.message;
        if (messages) {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => toast.error(msg));
          } else {
            toast.error(messages, {
              style: { background: "#F8B3B3", border: "none" },
            });
          }
        } else {
          toast.error("An unexpected error occurred", {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
      },
      onSuccess: (data: CreateCheckoutResponse) => {
        const { message, status } = data;
        queryClient.invalidateQueries({ queryKey: ["myOrder"] });
        if (data?.data?.url) {
          window.location.href = data.data.url;
        } else {
          toast.error("Failed to redirect to Stripe checkout", {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
        toast.success("Success, Redircting to Stripe checkout....", {
          style: { background: "#C8F8E2", border: "none" },
        });
        return { message, status };
      },
    });
  };

  return {
    useCreateCheckoutMutation,
  };
};

export default useCheckout;
