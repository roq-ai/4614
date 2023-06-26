import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  lead_id: yup.string().nullable().required(),
  sales_representative_id: yup.string().nullable().required(),
});
