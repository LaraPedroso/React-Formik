import { ReactNode } from 'react'
import { Formik, Form } from 'formik'
import { Container } from '@mui/material'

import { initialValues } from 'template/Home/function/initialValues'
import { validationSchema } from 'template/Home/function/validationSchema'

type ContainerFormTypes = {
  children: ReactNode
}

export function ContainerFormCustom({ children }: ContainerFormTypes) {
  return (
    <>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm({})
          }}
        >
          <Form noValidate autoComplete="off">
            {children}
          </Form>
        </Formik>
      </Container>
    </>
  )
}
