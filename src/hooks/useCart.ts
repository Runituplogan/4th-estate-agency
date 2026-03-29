"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import CartService, {
  AddToCartRequest,
  AddToCartResponse,
  GetCartResponse,
  UpdateCartItemRequest,
  UpdateCartItemResponse,
} from "@/service/cartService";

const useCart = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const useAddToCartMutation = () => {
    return useMutation({
      mutationFn: async (cartData: AddToCartRequest) => {
        const reponse = await CartService.addToCart(cartData);
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
      onSuccess: (data: AddToCartResponse) => {
        const { message, status } = data;
        queryClient.invalidateQueries({ queryKey: ["myCart"] });
        toast.success(message, {
          style: { background: "#C8F8E2", border: "none" },
        });
        return { message, status };
      },
    });
  };

  const useGetMyCartItems = () => {
    return useQuery<GetCartResponse>({
      queryKey: ["myCart"],
      queryFn: async () => {
        const response = await CartService.getMyCartItems();
        return response.data;
      },
    });
  };

  const useDeleteCartMutation = () => {
    return useMutation({
      mutationFn: async (itemId: string) => {
        const reponse = await CartService.deleteCartItem(itemId);
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
      onSuccess: (data: GetCartResponse) => {
        const { message, status } = data;
        queryClient.invalidateQueries({ queryKey: ["myCart"] });
        toast.success(message, {
          style: { background: "#C8F8E2", border: "none" },
        });
        return { message, status };
      },
    });
  };

  const useUpdateCartItemMutation = () =>
    useMutation({
      mutationFn: async ({
        data,
        itemId,
      }: {
        data: UpdateCartItemRequest;
        itemId: string;
      }) => {
        const response = await CartService.updateCartItem(data, itemId);
        return response.data;
      },
      onError: (error: AxiosError<{ message: string }>) => {
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
      onSuccess: (data: UpdateCartItemResponse) => {
        const { message } = data;
        queryClient.invalidateQueries({ queryKey: ["myCart"] });
        toast.success(message, {
          style: { background: "#C8F8E2", border: "none" },
        });
      },
    });

  return {
    useAddToCartMutation,
    useGetMyCartItems,
    useDeleteCartMutation,
    useUpdateCartItemMutation,
  };
};

export default useCart;
