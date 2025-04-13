import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

function UploadFileClean() {
    return (
        <Box >
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6">
                    Tải lên file làm sạch
                </Typography>
                <Box
                    sx={{
                        border: '2px solid #CCCCCC',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        padding: 2,
                    }}
                >
                    <Typography>
                        Thả hoặc nhấn để tải tệp
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default UploadFileClean;
