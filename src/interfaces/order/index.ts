import { ManufacturerInterface } from 'interfaces/manufacturer';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  manufacturer_id: string;
  created_at?: any;
  updated_at?: any;

  manufacturer?: ManufacturerInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  manufacturer_id?: string;
}
