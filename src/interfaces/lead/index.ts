import { QuoteInterface } from 'interfaces/quote';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LeadInterface {
  id?: string;
  status: string;
  sales_representative_id: string;
  created_at?: any;
  updated_at?: any;
  quote?: QuoteInterface[];
  user?: UserInterface;
  _count?: {
    quote?: number;
  };
}

export interface LeadGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  sales_representative_id?: string;
}
