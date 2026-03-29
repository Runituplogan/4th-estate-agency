import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { MediaPlacementResponse } from "@/interfaces/media-placement";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MediaPlacementResponse | { error: string }>,
) {
  try {
    const {
      page,
      limit,
      sort_by = "created_at",
      order_by = "desc",
    } = req.query;

    const search = req.query["filters[search]"];
    const country = req.query["filters[country]"];
    const state = req.query["filters[state]"];
    const city = req.query["filters[city]"];
    const disclaimer = req.query["filters[disclaimer]"];

    const params: Record<string, any> = {
      page,
      limit,
      sort_by,
      order_by,
    };

    if (search) params["filters[search]"] = search;
    if (country) params["filters[country]"] = country;
    if (state) params["filters[state]"] = state;
    if (city) params["filters[city]"] = city;
    if (disclaimer) params["filters[disclaimer]"] = disclaimer;

    const tagParams = Object.entries(req.query)
      .filter(([key]) => key.startsWith("filters[tags]"))
      .map(([key, value]) => [key, value as string]);

    // add to params
    tagParams.forEach(([key, value]) => {
      params[key] = value;
    });

    const response = await axios.get<MediaPlacementResponse>(
      "https://api.presscart.com/outlets",
      {
        params,
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );

    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error?.response?.status || 500).json({ error: error.message });
  }
}
