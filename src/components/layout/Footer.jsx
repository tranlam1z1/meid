import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Button,
    Divider,
    styled,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
    faAppStoreIos,
    faGooglePlay
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../asset/image/logo.png';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
    textAlign: 'center',
}));

const FooterLogo = styled('img')(({ theme }) => ({
    height: 60,
    marginBottom: 16,
    [theme.breakpoints.down('sm')]: {
        height: 50,
    },
}));

const ContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: theme.spacing(0.5),
        textAlign: 'center',
    },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    textTransform: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.75, 1.5),
        fontSize: '0.75rem',
        width: '100%',
        maxWidth: '250px',
        margin: '0 auto',
    },
}));

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <FooterContainer component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box >
                            <FooterLogo src={logo} alt="Logo" />
                            <Typography variant={isMobile ? "subtitle1" : "h6"} gutterBottom>
                                TRUNG TÂM NGHIÊN CỨU VÀ ỨNG DỤNG DỮ LIỆU DÂN CƯ VÀ CĂN CƯỚC CÔNG DÂN
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Box>
                            <Typography variant={isMobile ? "subtitle1" : "h6"} gutterBottom>
                                Liên hệ với chúng tôi
                            </Typography>

                            <ContactItem>
                                <FontAwesomeIcon icon={faMapMarkerAlt} color="#ff0000" />
                                <Typography variant="body2">
                                    Địa chỉ: Khu E6, Phạm Hùng, Cầu Giấy, Hà Nội
                                </Typography>
                            </ContactItem>

                            <ContactItem>
                                <FontAwesomeIcon icon={faPhoneAlt} color="#ff0000" />
                                <Typography variant="body2" color="error">Hotline: 1900.6712</Typography>
                            </ContactItem>

                            <ContactItem>
                                <FontAwesomeIcon icon={faEnvelope} color="#ff0000" />
                                <Typography variant="body2" color="error">Email: hotro.meid@gmail.com</Typography>
                            </ContactItem>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
                    <Divider sx={{ my: 2, mx: 'auto', width: { xs: '100%', md: '80%' } }} />
                    <Typography variant={isMobile ? "subtitle1" : "h6"} gutterBottom>
                        Tải ứng dụng MeID ngay
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                        flexDirection: isSmallMobile ? 'column' : 'row',
                        alignItems: 'center',
                    }}>
                        <DownloadButton
                            variant="contained"
                            startIcon={<FontAwesomeIcon icon={faAppStoreIos} />}
                            href="/"
                            sx={{ backgroundColor: '#000', color: '#fff' }}
                            fullWidth={isSmallMobile}
                        >
                            Tải về trên App Store
                        </DownloadButton>
                        <DownloadButton
                            variant="contained"
                            startIcon={<FontAwesomeIcon icon={faGooglePlay} />}
                            href="/"
                            sx={{ backgroundColor: '#000', color: '#fff' }}
                            fullWidth={isSmallMobile}
                        >
                            Tải về trên Google Play
                        </DownloadButton>
                    </Box>
                </Box>

                <Divider sx={{ my: 2, mx: 'auto', width: { xs: '100%', md: '80%' } }} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: 2,
                    textAlign: { xs: 'center', md: 'right' },
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: isSmallMobile ? 'column' : 'row',
                        justifyContent: { xs: 'center', md: 'flex-left' },
                        width: '100%',
                    }}>
                        <Link href="/" color="inherit" underline="hover">
                            <Typography variant='body2'>Điều khoản sử dụng dịch vụ</Typography>
                        </Link>
                        <Link href="/" color="inherit" underline="hover">
                            <Typography variant='body2'>Chính sách quyền riêng tư</Typography>
                        </Link>
                    </Box>
                    <Typography variant="body2" sx={{ width: '100%' }}>
                        Bản quyền thuộc về Trung tâm dữ liệu Quốc gia về dân cư
                    </Typography>
                </Box>
            </Container>
        </FooterContainer>
    );
}

export default Footer;