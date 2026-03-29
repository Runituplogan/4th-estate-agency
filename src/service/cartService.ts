import axiosConfig from "@/config/axios";
import { CartStatus, UserStatus } from "@/helper";
import axios, { AxiosResponse } from "axios";

export interface CartItem {
  id: string;
  cartId: string;
  placementId: string;
  name: string;
  websiteUrl: string;
  logoUrl: string | null;
  country: string | null;
  outletName: string | null;
  channelType: string | null;
  placementType: string;
  domainAuthority: number | null;
  domainRanking: number | null;
  isDoFollow: boolean;
  minDeliveryDays: number | null;
  maxDeliveryDays: number | null;
  unitAmount: number;
  pricingTier: string;
  currency: string;
  quantity: number;
  contentType: string | null;
  contentTypeFee: number;
  lineTotal: number;
  createdAt: string;
  updatedAt: string;
}

export interface Cart {
  id: string;
  userId: string;
  status: CartStatus;
  items: CartItem[];
  subtotal: number;
  processingFee: number;
  total: number;
  currency: string;
  itemCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface AddToCartResponse {
  status: string;
  statusCode: number;
  message: string;
  data: Cart;
}

export interface AddToCartRequest {
  placementId?: string | null;
  name?: string | null;
  websiteUrl?: string | null;
  logoUrl?: string | null;
  country?: string | null;
  outletName?: string | null;
  channelType?: string | null;
  placementType?: string | null;
  domainAuthority?: number | null;
  domainRanking?: number | null;
  isDoFollow?: boolean;
  minDeliveryDays?: number | null;
  maxDeliveryDays?: number | null;
  unitAmount?: number | null; // cents
  pricingTier?: string | null;
  currency?: string | null;
  quantity?: number | null;
  contentType?: string | null;
  contentTypeFee?: number | null;
}

export interface GetCartResponse {
  status: string;
  statusCode: number;
  message?: string;
  data: Cart;
}

export interface UpdateCartItemRequest {
  quantity: number;
}

export interface UpdateCartItemResponse {
  status: string;
  statusCode: number;
  message: string;
  data: {
    id: string;
    userId: string;
    status: string;
    items: {
      id: string;
      cartId: string;
      placementId: string;
      name: string;
      websiteUrl: string;
      logoUrl: string;
      country: string;
      outletName: string;
      channelType: string;
      placementType: string;
      domainAuthority: number;
      domainRanking: number;
      isDoFollow: boolean;
      minDeliveryDays: number;
      maxDeliveryDays: number;
      unitAmount: number;
      pricingTier: string;
      currency: string;
      quantity: number;
      contentType: string;
      contentTypeFee: number;
      createdAt: string;
      updatedAt: string;
      lineTotal: number;
    }[];
    subtotal: number;
    processingFee: number;
    total: number;
    currency: string;
    itemCount: number;
    createdAt: string;
    updatedAt: string;
  };
}

class CartService {
  static addToCart = async (
    requestBody: AddToCartRequest,
  ): Promise<AxiosResponse<AddToCartResponse>> => {
    return axiosConfig.post("cart/add", requestBody);
  };

  static getMyCartItems = async (): Promise<AxiosResponse<GetCartResponse>> => {
    return axiosConfig.get("cart");
  };

  static deleteCartItem = async (
    itemId: string,
  ): Promise<AxiosResponse<GetCartResponse>> => {
    return axiosConfig.delete(`cart/items/${itemId}`);
  };

  static updateCartItem = async (
    requestBody: UpdateCartItemRequest,
    itemId: string,
  ): Promise<AxiosResponse<UpdateCartItemResponse>> => {
    return axiosConfig.patch(`cart/items/${itemId}`, requestBody);
  };
}

export default CartService;
