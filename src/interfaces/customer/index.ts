import { InquiryInterface } from 'interfaces/inquiry';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  customer_support_id: string;
  created_at?: any;
  updated_at?: any;
  inquiry?: InquiryInterface[];
  user?: UserInterface;
  _count?: {
    inquiry?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  customer_support_id?: string;
}
