import * as yup from 'yup';

export const leadValidationSchema = yup.object().shape({
  status: yup.string().required(),
  sales_representative_id: yup.string().nullable().required(),
});
