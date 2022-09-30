import { Typography, Box } from '@mui/material'

export const Title = () => {
  return (
    <>
      <Box component={'div'}>
        <Typography variant="h4">
          Fale Conosco <br />
        </Typography>
        <Typography variant="h6">
          Gostaria de falar conosco algum assunto que não encontrou por aqui?
          <br />
          Sinta-se a vontade, responderemos rapidinho.
        </Typography>
      </Box>
    </>
  )
}
