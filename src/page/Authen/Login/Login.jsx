import React from 'react';
import {
    Box,
    Button as MuiButton,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import image5 from '../../../asset/image/image5.png';
import logo from '../../../asset/image/logo.png';
import vneid from '../../../asset/image/vneid.png';
import useLogin from '../../../hooks/useLogin';

const usernameRegex = /^[a-z0-9_]+$/i;

const schema = yup.object().shape({
    username: yup
        .string()
        .required('Tên người dùng là bắt buộc')
        .max(25, 'Tên người dùng tối đa 25 ký tự')
        .matches(usernameRegex, 'Không viết hoa, dấu, khoảng trắng hoặc ký tự đặc biệt'),
    password: yup
        .string()
        .required('Mật khẩu là bắt buộc')
        .max(50, 'Mật khẩu tối đa 50 ký tự'),
});

function Login() {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const loginMutation = useLogin();

    const onSubmit = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (res) => {
                console.log('Đăng nhập thành công!', res);
                localStorage.setItem('username', res.username);
            },
            onError: (err) => {
                console.error('Lỗi đăng nhập:', err);
            }
        });
    };

    return (
        <Grid container sx={{ flexWrap: 'nowrap' }} spacing={0}>
            <Grid item xs={12} md={7}>
                <Box
                    component="img"
                    src={image5}
                    alt="Banner"
                    sx={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                />
            </Grid>

            <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="center" sx={{ backgroundColor: '#fff' }}>
                <Stack spacing={3} alignItems="center" width="100%" maxWidth="400px" sx={{ p: 3 }}>
                    <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
                    <Typography variant="h5" fontWeight={600} textAlign="center">
                        Đăng nhập
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
                                    autoComplete="username"
                                    sx={{ mb: 2 }}
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
                                    type="password"
                                    label="Mật khẩu"
                                    variant="outlined"
                                    error={Boolean(errors.password)}
                                    helperText={errors.password?.message}
                                    sx={{ mb: 2 }}
                                    autoComplete="current-password"
                                />
                            )}
                        />

                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                            <FormControlLabel control={<Checkbox />} label="Duy trì đăng nhập" />
                            <Link href="/forgot-password" underline="none">
                                Quên mật khẩu?
                            </Link>
                        </Box>

                        <MuiButton
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 3,
                                backgroundColor: '#e53935',
                                '&:hover': { backgroundColor: '#d32f2f' },
                            }}
                            disabled={loginMutation.isLoading}
                        >
                            {loginMutation.isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </MuiButton>
                    </Box>

                    <Stack spacing={1} alignItems="center" mt={3}>
                        <Typography variant="body2">
                            Bạn chưa có tài khoản?{' '}
                            <Link href="/register" underline="none">
                                Đăng ký ngay
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center">
                            hoặc đăng nhập với VNEID
                        </Typography>
                        <Box component="img" src={vneid} alt="VNEID" sx={{ width: 100 }} />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Login;
