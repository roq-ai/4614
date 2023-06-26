import axios from 'axios';
import queryString from 'query-string';
import {
  KnowledgeBaseArticleInterface,
  KnowledgeBaseArticleGetQueryInterface,
} from 'interfaces/knowledge-base-article';
import { GetQueryInterface } from '../../interfaces';

export const getKnowledgeBaseArticles = async (query?: KnowledgeBaseArticleGetQueryInterface) => {
  const response = await axios.get(`/api/knowledge-base-articles${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createKnowledgeBaseArticle = async (knowledgeBaseArticle: KnowledgeBaseArticleInterface) => {
  const response = await axios.post('/api/knowledge-base-articles', knowledgeBaseArticle);
  return response.data;
};

export const updateKnowledgeBaseArticleById = async (
  id: string,
  knowledgeBaseArticle: KnowledgeBaseArticleInterface,
) => {
  const response = await axios.put(`/api/knowledge-base-articles/${id}`, knowledgeBaseArticle);
  return response.data;
};

export const getKnowledgeBaseArticleById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/knowledge-base-articles/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteKnowledgeBaseArticleById = async (id: string) => {
  const response = await axios.delete(`/api/knowledge-base-articles/${id}`);
  return response.data;
};
