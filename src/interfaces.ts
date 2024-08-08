// children prop interface
export interface IChildren {
  children: JSX.Element | JSX.Element[] | string | string[];
}

// coin interface
export interface ICoinInfo {
  description: string;
  development_status: string;
  first_data_at: string;
  hardware_wallet: boolean;
  hash_algorithm: string;
  id: string;
  is_active: boolean;
  is_new: boolean;
  last_data_at: string;
  links: {
    explorer: string[];
    reddit: string[];
    source_code: string[];
    website: string[];
  };
  links_extended: { type: string; url: string }[];
  logo: string;
  message: string;
  name: string;
  open_source: boolean;
  org_structure: string;
  proof_type: string;
  rank: number;
  started_at: string;
  symbol: string;
  tags: {
    coin_counter: number;
    ico_counter: number;
    id: string;
    name: string;
  }[];
  team: [];
  type: string;
  whitepaper: { link: string; thumbnail: string };
}

// tickers interface
export interface ITickers {
  beta_value: number;
  first_data_at: string;
  id: string;
  last_updated: string;
  max_supply: number;
  name: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
  rank: number;
  symbol: string;
  total_supply: number;
}

export interface IOhlcvHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
