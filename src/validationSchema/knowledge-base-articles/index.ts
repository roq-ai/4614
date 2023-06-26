import * as yup from 'yup';

export const knowledgeBaseArticleValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  customer_support_id: yup.string().nullable().required(),
});
