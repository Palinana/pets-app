import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                    position="static" 
                    style={{
                        backgroundColor: '#F4E4C7'
                    }}
                >
                    <Toolbar>
                        <NavLink to='/about'>
                            <Box
                                component="img"
                                sx={{
                                    height: 50,
                                }}
                                alt="Eulerity Logo"
                                src='https://www.eulerity.com/static/media/eulerity-logo.23abb33a.png'
                            />                
                        </NavLink>
                            
                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to='/'>
                                <Typography variant="h6" color="inherit" component="div">
                                    Gallery
                                </Typography>
                            </NavLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    )
}

export default Navbar;
