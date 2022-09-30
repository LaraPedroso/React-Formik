import { Box, Tooltip } from '@mui/material'
import { Field } from 'formik'
import { TextFieldCustom } from '../TextFieldCustom'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

const IconHelpTelephone = () => (
  <Tooltip
    title="( DDD ) 0000-0000"
    placement="right-start"
    sx={{ mt: 1, ml: 1 }}
  >
    <HelpOutlineOutlinedIcon />
  </Tooltip>
)

export const TextFieldTelephone = () => {
  return (
    <Box display="flex" flexDirection={'row'}>
      <Field
        fullWidth
        name="tel"
        label="Telephone"
        size="small"
        component={TextFieldCustom}
      />
      <IconHelpTelephone />
    </Box>
  )
}
