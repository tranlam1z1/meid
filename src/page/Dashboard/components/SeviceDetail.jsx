import React from "react";
import { Box, Button, Chip, Paper, Typography } from "@mui/material";

const ServiceDetail = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" component="h1" >
                            Mã dịch vụ : #38
                        </Typography>
                        <Box>
                            <Typography>Đơn vị : Dịch vụ Xử lý & Phân Tích Đủ Liệu</Typography>
                            <Typography>Gói dịch vụ : LH - Start</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h6" gutterBottom>
                            Phê duyệt dịch vụ
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Typography>Trạng thái :</Typography>
                            <Chip
                                label="Đã Phê Duyệt"
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(205, 243, 175, 0.84)',
                                    color: '#56CA00',
                                }}
                            />
                        </Box>
                        <Typography sx={{ mb: 2 }}>Ngày đăng ký : 14/08/2023</Typography>
                        <Typography sx={{ mb: 2 }}>
                            Token mã hóa :{" "}
                        </Typography>
                        <Typography sx={{
                            fontSize: '0.8rem', backgroundColor: 'rgba(205, 243, 175, 0.84)',
                            color: '#56CA00', borderRadius: '10px', padding: '0 5px', display: 'inline-block',
                        }}>
                            85d98a95-3af8-4302-a8d0-406c9f193633
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Box sx={{ mb: 3, gap: 2 }}>
                        <Typography variant="h6" >
                            Thông tin chi tiết
                        </Typography>

                        <Box>
                            <Typography>Số trường đăng ký : 1</Typography>
                            <Typography>Báo giá theo đúng ký : 30.000 đ</Typography>
                        </Box>
                        <Typography sx={{mt: 2}}>Các trường đã đăng ký :</Typography>
                        <Button sx={{ border: '1px solid #ED1D42', borderRadius: '5px', padding: '5px 10px', color: '#ED1D42', mt: 3}}>
                            Xem các trường thông tin
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceDetail;