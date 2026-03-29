import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { GetLocationResponse } from "@/interfaces/media-placement";

export default async function getLocation(
  req: NextApiRequest,
  res: NextApiResponse<GetLocationResponse | { error: string }>,
) {
  try {
    const { country, state } = req.query;

    let url = "https://api.presscart.com/outlets/locations/countries";
    const params: Record<string, any> = {};

    if (state) {
      url = "https://api.presscart.com/outlets/locations/cities";
      if (country) params.country = country;
      params.state = state;
    } else if (country) {
      url = "https://api.presscart.com/outlets/locations/states";
      params.country = country;
    }

    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error?.response?.status || 500).json({ error: error.message });
  }
}
