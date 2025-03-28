import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <form>
        <Grid>
            <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Correo" type="email"></TextField>
            </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default LoginPage
