import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Button,
    Divider,
    styled
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
    color: theme.palette.text.primary,
    padding: theme.spacing(6, 0),
}));

const FooterLogo = styled('img')({
    height: 60,
    marginBottom: 16,
});

const ContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));

const DownloadButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

function Footer() {
    return (
        <FooterContainer component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <FooterLogo src={logo} alt="Logo" />
                            <Typography variant="h6" gutterBottom>
                                TRUNG TÂM NGHIÊN CỨU VÀ ỨNG DỤNG DỮ LIỆU DÂN CƯ VÀ CĂN CƯỚC CÔNG DÂN
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Liên hệ với chúng tôi
                            </Typography>

                            <ContactItem>
                                <FontAwesomeIcon icon={faMapMarkerAlt} color="#ff0000" />
                                <Typography>Địa chỉ: Khu E6, Phạm Hùng, Cầu Giấy, Hà Nội</Typography>
                            </ContactItem>

                            <ContactItem>
                                <FontAwesomeIcon icon={faPhoneAlt} color="#ff0000" />
                                <Typography color="error">Hotline: 1900.6712</Typography>
                            </ContactItem>

                            <ContactItem>
                                <FontAwesomeIcon icon={faEnvelope} color="#ff0000" />
                                <Typography color="error">Email: hotro.meid@gmail.com</Typography>
                            </ContactItem>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4, mb: 4 }}>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" gutterBottom align="center">
                        Tải ứng dụng MeID ngay
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        flexWrap: 'wrap'
                    }}>
                        <DownloadButton
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faAppStoreIos} />}
                            href="path/to/app-store"
                        >
                            Tải về trên App Store
                        </DownloadButton>
                        <DownloadButton
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faGooglePlay} />}
                            href="path/to/google-play"
                        >
                            Tải về trên Google Play
                        </DownloadButton>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link href="path/to/terms" color="inherit" underline="hover">
                            Điều khoản sử dụng dịch vụ
                        </Link>
                        <Link href="path/to/privacy" color="inherit" underline="hover">
                            Chính sách quyền riêng tư
                        </Link>
                    </Box>
                    <Typography variant="body2">
                        Bản quyền thuộc về Trung tâm dữ liệu Quốc gia về dân cư
                    </Typography>
                </Box>
            </Container>
        </FooterContainer>
    );
}

export default Footer;