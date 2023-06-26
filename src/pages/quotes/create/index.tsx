import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createQuote } from 'apiSdk/quotes';
import { Error } from 'components/error';
import { quoteValidationSchema } from 'validationSchema/quotes';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { LeadInterface } from 'interfaces/lead';
import { UserInterface } from 'interfaces/user';
import { getLeads } from 'apiSdk/leads';
import { getUsers } from 'apiSdk/users';
import { QuoteInterface } from 'interfaces/quote';

function QuoteCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: QuoteInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createQuote(values);
      resetForm();
      router.push('/quotes');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<QuoteInterface>({
    initialValues: {
      lead_id: (router.query.lead_id as string) ?? null,
      sales_representative_id: (router.query.sales_representative_id as string) ?? null,
    },
    validationSchema: quoteValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Quote
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <AsyncSelect<LeadInterface>
            formik={formik}
            name={'lead_id'}
            label={'Select Lead'}
            placeholder={'Select Lead'}
            fetcher={getLeads}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.status}
              </option>
            )}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'sales_representative_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.email}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'quote',
  operation: AccessOperationEnum.CREATE,
})(QuoteCreatePage);
