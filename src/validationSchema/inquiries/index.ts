import * as yup from 'yup';

export const inquiryValidationSchema = yup.object().shape({
  customer_id: yup.string().nullable().required(),
  customer_support_id: yup.string().nullable().required(),
});
