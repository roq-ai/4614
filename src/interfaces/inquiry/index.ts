import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InquiryInterface {
  id?: string;
  customer_id: string;
  customer_support_id: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InquiryGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  customer_support_id?: string;
}
