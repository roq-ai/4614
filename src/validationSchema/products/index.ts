import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  manufacturer_id: yup.string().nullable().required(),
});
