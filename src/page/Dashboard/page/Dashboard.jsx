import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from '../components/HeaderDashboard';
import ServiceDetail from '../components/SeviceDetail';
import Instruct from '../components/Instruct';
import UploadFileClean from '../components/UploadFileClean';
import CleanHistoryTable from '../components/CleanHistoryTable';

export default function Dashboard() {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Box display="flex" justifyContent="center">
                <HeaderDashboard />
            </Box>

            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-start" sx={{ mt: '48px' }}>
                <Box display="flex" width="100%" maxWidth="1200px">
                    <Sidebar />
                    <Box flexGrow={1} p={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 3,
                                        alignItems: 'stretch',
                                    }}
                                >
                                    <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
                                            <ServiceDetail />
                                        </Paper>
                                    </Box>
                                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <Paper elevation={3} sx={{ p: 3 }}>
                                            <Instruct />
                                        </Paper>
                                        <Paper elevation={3} sx={{ p: 3 }}>
                                            <UploadFileClean />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <CleanHistoryTable />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
