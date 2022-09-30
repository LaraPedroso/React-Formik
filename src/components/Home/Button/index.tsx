import { Box, Button } from '@mui/material'
import {} from 'formik'

export const ButtonHome = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Button type="submit" variant="contained" size="large" color="primary">
        Enviar
      </Button>
    </Box>
  )
}
