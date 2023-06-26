import { LeadInterface } from 'interfaces/lead';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QuoteInterface {
  id?: string;
  lead_id: string;
  sales_representative_id: string;
  created_at?: any;
  updated_at?: any;

  lead?: LeadInterface;
  user?: UserInterface;
  _count?: {};
}

export interface QuoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  lead_id?: string;
  sales_representative_id?: string;
}
