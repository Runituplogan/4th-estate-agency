"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import OrderService, {
  MyOrderByIdResponse,
  MyOrderResponse,
} from "@/service/orderService";
import { OrderStatus } from "@/helper";

const useOrder = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const useGetMyOrders = (
    status?: OrderStatus,
    page?: number,
    limit?: number,
  ) => {
    return useQuery<MyOrderResponse>({
      queryKey: ["myOrder", status, page, limit],
      queryFn: async () => {
        const response = await OrderService.getMyOrders(status, page, limit);
        return response.data;
      },
    });
  };

  const useGetMyOrdersById = (orderId: string) => {
    return useQuery<MyOrderByIdResponse>({
      queryKey: ["myOrderId", orderId],
      queryFn: async () => {
        const response = await OrderService.getMyOrderById(orderId);
        return response.data;
      },
    });
  };
  return { useGetMyOrders, useGetMyOrdersById };
};

export default useOrder;
