import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Header() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: '#5E0208',
                height: '48px',
                justifyContent: 'center',
                px: 2,
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    minHeight: '48px !important',
                }}
            >
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 400, ml: 2 }}>
                    meID
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
                    <IconButton size="small" sx={{ color: 'black' }}>
                        <NotificationsNoneIcon fontSize="small" />
                    </IconButton>
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: '#7ed321',
                        }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
