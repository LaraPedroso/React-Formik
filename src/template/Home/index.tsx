import { Field } from 'formik'

import { Title } from 'components/Home/Title'
import { ButtonHome } from 'components/Home/Button'
import { TextAreaHome } from 'components/Home/TextAreaDescription'
import { TextFieldCustom } from 'components/Home/TextFieldCustom'
import { ContainerFormCustom } from 'components/Home/ContainerCustom'
import { TextFieldTelephone } from 'components/Home/TextFieldTelephone'

import { Box, Grid } from '@mui/material'
import { ValuesInput } from 'template/Home/Data'
function HomeTemplate() {
  return (
    <>
      <ContainerFormCustom>
        <Box>
          <Grid container alignItems="baseline">
            <Grid item xs={12} md={8}>
              <Title />
            </Grid>
            <Grid item xs={12} sm={8} md={4} sx={{ mt: 10 }}>
              {ValuesInput.map((item, key) => {
                return (
                  <Field
                    sx={{ mb: 2 }}
                    fullWidth
                    key={key}
                    name={item.name}
                    label={item.label}
                    size={item.size}
                    component={TextFieldCustom}
                  />
                )
              })}
              <TextFieldTelephone />
              <TextAreaHome />
              <ButtonHome />
            </Grid>
          </Grid>
        </Box>
      </ContainerFormCustom>
    </>
  )
}

export default HomeTemplate
