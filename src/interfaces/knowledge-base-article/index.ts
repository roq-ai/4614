import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface KnowledgeBaseArticleInterface {
  id?: string;
  title: string;
  content: string;
  customer_support_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface KnowledgeBaseArticleGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  customer_support_id?: string;
}
