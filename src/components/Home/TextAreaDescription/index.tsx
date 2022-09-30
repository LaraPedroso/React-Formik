import { Field } from 'formik'
import { TextAreaCustom } from '../TextAreaCustom'

export const TextAreaHome = () => {
  return (
    <Field
      sx={{ mt: 2 }}
      fullWidth
      name="description"
      label="Description"
      size="small"
      minRows={5}
      component={TextAreaCustom}
    />
  )
}
