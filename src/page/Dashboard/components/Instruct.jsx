import React from "react";
import { Box, Typography } from "@mui/material";
import exel from "../../../asset/image/exel.png";

const Instruct = () => {
    return (
        <Box>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Hướng dẫn
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img
                            src={exel}
                            alt="Unchecked"
                            style={{ width: 40, height: 40, cursor: 'pointer' }}
                        />
                        <Typography sx={{ color: '#008000' }}>Tải xuống template mẫu</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img
                            src={exel}
                            alt="Checked"
                            style={{ width: 40, height: 40, cursor: 'pointer' }}
                        />
                        <Typography sx={{ color: '#008000' }}>Phần mềm mã hóa trước khi upload</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Instruct;