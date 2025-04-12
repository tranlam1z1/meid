import React from 'react';
import {
    Box,
    Button as MuiButton,
    Container,
    Grid,
    Stack,
    TextField,
    Typography,
    Link,
    FormHelperText
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import image5 from '../../../asset/image/image5.png';
import logo from '../../../asset/image/logo.png';

const schema = yup.object().shape({
    username: yup
        .string()
        .required('Tên đăng nhập là bắt buộc')
        .max(25, 'Tối đa 25 ký tự')
        .matches(/^[a-z0-9_]+$/i, 'Không viết hoa, dấu, khoảng trắng hoặc ký tự đặc biệt'),
    idCard: yup
        .string()
        .required('Căn cước công dân là bắt buộc')
        .matches(/^\d{9,12}$/, 'Số CCCD phải từ 9 đến 12 chữ số'),
    phone: yup
        .string()
        .required('Số điện thoại là bắt buộc')
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ'),
    password: yup
        .string()
        .required('Mật khẩu là bắt buộc')
        .min(6, 'Tối thiểu 6 ký tự')
        .max(50, 'Tối đa 50 ký tự'),
    confirmPassword: yup
        .string()
        .required('Vui lòng nhập lại mật khẩu')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
});

function Register() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Dữ liệu đăng ký:", data);
    };

    return (
        <Grid container sx={{display: 'flex', alignItems: 'center', flexWrap: 'nowrap'}}>
            <Grid item xs={12} md={7}>
                <Box
                    component="img"
                    src={image5}
                    alt="Banner"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Grid>

            <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="center">
                    <Stack spacing={3} alignItems="center">
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{ height: 60 }}
                        />
                        <Typography variant="h5" fontWeight={600}>
                            Đăng ký tài khoản MeID
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit(onSubmit)} width="100%">
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Tên đăng nhập"
                                        variant="outlined"
                                        error={Boolean(errors.username)}
                                        helperText={errors.username?.message}
                                    />
                                )}
                            />

                            <Controller
                                name="idCard"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Căn cước công dân"
                                        variant="outlined"
                                        error={Boolean(errors.idCard)}
                                        helperText={errors.idCard?.message}
                                        sx={{ mt: 2 }}
                                    />
                                )}
                            />

                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Số điện thoại"
                                        variant="outlined"
                                        error={Boolean(errors.phone)}
                                        helperText={errors.phone?.message}
                                        sx={{ mt: 2 }}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Mật khẩu"
                                        type="password"
                                        variant="outlined"
                                        error={Boolean(errors.password)}
                                        helperText={errors.password?.message}
                                        sx={{ mt: 2 }}
                                    />
                                )}
                            />

                            <Controller
                                name="confirmPassword"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Nhập lại mật khẩu"
                                        type="password"
                                        variant="outlined"
                                        error={Boolean(errors.confirmPassword)}
                                        helperText={errors.confirmPassword?.message}
                                        sx={{ mt: 2 }}
                                    />
                                )}
                            />

                            <MuiButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    backgroundColor: '#e53935',
                                    '&:hover': { backgroundColor: '#d32f2f' }
                                }}
                            >
                                Đăng ký
                            </MuiButton>
                        </Box>

                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Đã có tài khoản?{' '}
                            <Link href="/login" underline="none">
                                Đăng nhập ngay
                            </Link>
                        </Typography>
                    </Stack>
            </Grid>
        </Grid>
    );
}

export default Register;
