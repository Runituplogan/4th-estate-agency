export interface MediaPlacementResponse {
  records: {
    id: string;
    name: string;
    description: string;
    requirements: string;
    min_delivery_days: number;
    max_delivery_days: number;
    is_featured: boolean;
    created_at: string;
    outlet_name: string;
    website_url: string;
    logo: string;
    city: string;
    state: string;
    country: string;
    channels: {
      channel_type: string;
      placement_type: string;
      is_do_follow: boolean;
      domain_authority: number;
      domain_ranking: number;
      disclaimer_name: string;
      disclaimer_description: string | null;
    }[];
    tags: {
      name: string;
    }[];
    prices: {
      unit_amount: number;
      currency: string;
      pricing_tier: string;
    }[];
  }[];
  total_records: number;
  total_pages: number;
  current_page: number;
  next_page: number | null;
  previous_page: number | null;
}

export interface GetLocationResponse {
  countries?: string[];
  states?: string[];
  cities?: string[];
}
