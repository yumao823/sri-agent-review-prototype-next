import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import Typography from '@mui/material/Typography'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://sri.sg/" target="_blank">
        SRI Pte. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export interface RegisterFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const { onSubmit } = props

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="overline">SRI BigData</Typography>
      <Typography component="h1" variant="h5">
        Create Account
      </Typography>
      <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={
            <>
              I agree to the{' '}
              <a href="https://sri.sg/terms" rel="noreferrer" target="_blank">
                terms & conditions
              </a>
            </>
          }
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Register
        </Button>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  )
}

export interface RegisterSuccessProps {
  onBack: () => void
}
const RegisterSuccess: React.FC<RegisterSuccessProps> = (props) => {
  const { onBack } = props
  return (
    <Box textAlign="center">
      <Typography variant="h4" mb={3}>
        Registration successful
      </Typography>
      <Typography variant="subtitle1" mb={3}>
        You will receive an email with your account once your account is approved.
      </Typography>
      <Button variant="text" onClick={onBack}>
        Return to Home
      </Button>
    </Box>
  )
}

export default function RegisterView() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')
    if (!email || !password) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 3000)
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/images/bigdata.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            pt: { xs: 10, md: 20 },
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : isSubmitted ? (
            <RegisterSuccess onBack={() => setIsSubmitted(false)} />
          ) : (
            <RegisterForm onSubmit={handleSubmit} />
          )}
        </Box>
      </Grid>
    </Grid>
  )
}
