import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Paper,
    Avatar,
    useTheme
} from '@mui/material';
import image1 from '../../asset/image/image1.png';
import image2 from '../../asset/image/image2.png';
import image3 from '../../asset/image/image3.png';

function Content() {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container spacing={4} sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}
>
                <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                color: theme.palette.error.main,
                                fontWeight: 'bold',
                                mb: 2
                            }}
                        >
                            DỊCH VỤ CỦA MelD
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                mb: 3,
                                fontSize: { xs: '1.8rem', sm: '2.5rem' }
                            }}
                        >
                            Lợi ích khi sử dụng dịch vụ của MelD
                        </Typography>

                        <Typography variant="body1" >
                            MelD là một nền tảng định danh đáng tin cậy và tiện lợi. Với MelD, người dùng có thể sử dụng một tài khoản duy nhất để truy cập vào nhiều dịch vụ khác nhau, tiết kiệm thời gian và công sức. Nền tảng này cung cấp các dịch vụ định danh dựa trên cơ sở dữ liệu dân cư, đảm bảo tính chính xác và tin cậy của thông tin cá nhân.
                        </Typography>

                        <Grid container spacing={3} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        maxWidth: 300,
                                        width: '100%',
                                        [theme.breakpoints.down('sm')]: { width: '100%' }
                                    }}
                                >
                                    <Typography variant="body2" >
                                        Luôn cập nhật để hoàn thiện tính năng của MelD, liên hệ với chúng tôi nếu bạn gặp vấn đề khi sử dụng các tính năng.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            bgcolor: 'error.main',
                                            color: 'white',
                                            mt: 2,
                                            '&:hover': { bgcolor: 'error.dark' }
                                        }}
                                    >
                                        Liên hệ với chúng tôi
                                    </Button>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { xs: 'center', sm: 'flex-start' },
                                        textAlign: { xs: 'center', sm: 'left' }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Avatar
                                            src={image2}
                                            alt="Settings Icon"
                                            sx={{
                                                bgcolor: 'primary.light',
                                                mr: 2,
                                                width: 56,
                                                height: 56,
                                                p: 1
                                            }}
                                        />
                                        <Typography variant="subtitle1">Lượt sử dụng</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            src={image3}
                                            alt="User Icon"
                                            sx={{
                                                bgcolor: 'primary.light',
                                                mr: 2,
                                                width: 56,
                                                height: 56,
                                                p: 1
                                            }}
                                        />
                                        <Typography variant="subtitle1">Khách hàng</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box>
                        <Box
                            component="img"
                            src={image1}
                            alt="MelD service illustration"
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                objectFit: 'contain',
                                mx: 'auto',
                                p: { xs: 2, md: 0 }
                            }}
                        />

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Content;