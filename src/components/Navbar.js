import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'   
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 10 }} align='center'>
            BLOG PAGE
          </Typography>
          <Button color="inherit" variant='contained'><Link to={'/'}>Home</Link></Button>
          <Box flexGrow={0.08} />
          <Button color="inherit" variant='contained'><Link to={'/add'}>Add Blog</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar