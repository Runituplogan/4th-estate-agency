import axiosConfig from "@/config/axios";
import { OrderStatus, PaymentStatus } from "@/helper";
import axios, { AxiosResponse } from "axios";

export interface MyOrderResponse {
  status: string;
  statusCode: number;
  data: {
    data: {
      id: string;
      status: OrderStatus;
      subtotal: number;
      processingFee: number;
      amountTotal: number;
      currency: string;
      paidAt: string;
      createdAt: string;
      updatedAt: string;
      items: {
        id: string;
        placementId: string;
        channelType: string;
        placementType: string;
        name: string;
        websiteUrl: string;
        logoUrl: string;
        country: string;
        domainAuthority: number;
        domainRanking: number;
        isDoFollow: boolean;
        unitAmount: number;
        pricingTier: string;
        currency: string;
        quantity: number;
        lineTotal: number;
        contentType: string;
        contentTypeFee: number;
      }[];
    }[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
}

export interface MyOrderByIdResponse {
  status: string;
  statusCode: number;
  data: {
    id: string;
    status: OrderStatus;
    subtotal: number;
    processingFee: number;
    amountTotal: number;
    currency: string;
    paidAt: string;
    createdAt: string;
    updatedAt: string;
    items: {
      id: string;
      placementId: string;
      channelType: string;
      placementType: string;
      name: string;
      websiteUrl: string;
      logoUrl: string;
      country: string;
      domainAuthority: number;
      domainRanking: number;
      isDoFollow: boolean;
      unitAmount: number;
      pricingTier: string;
      currency: string;
      quantity: number;
      lineTotal: number;
      contentType: string
      contentTypeFee: number;
    }[];
    payments: {
      id: string;
      status: string;
      paymentMethod: PaymentStatus;
      last4: string | null;
      cardBrand: string | null;
      amount: number;
      currency: string;
      paidAt: string;
      failureCode: string | null;
      failureMessage: string | null;
      createdAt: string;
    }[];
  };
}

class OrderService {
  static getMyOrders = async (
    status?: OrderStatus,
    page?: number,
    limit?: number,
  ): Promise<AxiosResponse<MyOrderResponse>> => {
    return axiosConfig.get("order", {
      params: {
        status,
        page,
        limit,
      },
    });
  };

  static getMyOrderById = async (
    orderId: string,
  ): Promise<AxiosResponse<MyOrderByIdResponse>> => {
    return axiosConfig.get(`order/${orderId}`);
  };
}

export default OrderService;
