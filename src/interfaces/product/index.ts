import { ManufacturerInterface } from 'interfaces/manufacturer';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  manufacturer_id: string;
  created_at?: any;
  updated_at?: any;

  manufacturer?: ManufacturerInterface;
  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  manufacturer_id?: string;
}
