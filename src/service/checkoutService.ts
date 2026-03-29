import axiosConfig from "@/config/axios";
import { CartStatus } from "@/helper";
import axios, { AxiosResponse } from "axios";

export interface CheckoutSessionData {
  sessionId: string;
  status: string | null;
  paymentStatus: string;
  amountTotal: number;
  currency: string | null;
  expiresAt: string;
  url: string | null;
}

export interface CheckoutSessionApiResponse {
  status: string;
  statusCode: number;
  data: CheckoutSessionData;
}

export interface CreateCheckoutResponse {
  status: string;
  statusCode: number;
  message: string;
  data: {
    url: string | null;
  };
}
class CheckoutService {
  static createCheckoutSession = async (): Promise<
    AxiosResponse<CreateCheckoutResponse>
  > => {
    return axiosConfig.post("checkout");
  };

  static getCheckoutSession = async (
    sessionId: string,
  ): Promise<AxiosResponse<CheckoutSessionApiResponse>> => {
    return axiosConfig.get(`checkout/${sessionId}`);
  };
}
export default CheckoutService;
