import React from 'react'
import image5 from '../../../asset/image/image5.png'
import logo from '../../../asset/image/logo.png'
import Button from '../../../components/ui/Button'
import vneid from '../../../asset/image/vneid.png'
import { Checkbox, FormControlLabel, Link, TextField, FormHelperText } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './Login.css'
import useLogin from '../../../hooks/useLogin'

const usernameRegex = /^[a-z0-9_]+$/i

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
})

function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    })

    const loginMutation = useLogin();

    const onSubmit = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (res) => {
                console.log('Đăng nhập thành công!', res);
                localStorage.setItem('accessToken', res.accessToken);
                localStorage.setItem('username', res.username);
                localStorage.setItem('firstName', res.firstName);
                localStorage.setItem('lastName', res.lastName);
            },
            onError: (err) => {
                console.error('Lỗi đăng nhập:', err);
            },
        });
    };

    return (
        <div className="container-login">
            <div className="left-content">
                <img src={image5} alt="Banner" />
            </div>
            <div className="right-content-login">
                <div className='logo-login'>
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p className='title-login'>Đăng nhập</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="input-login-container">
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <TextField
                                    {...field}
                                    label="Tên đăng nhập"
                                    variant="outlined"
                                    className="input-login"
                                    error={Boolean(errors.username)}
                                />
                                {errors.username && (
                                    <FormHelperText error>{errors.username.message}</FormHelperText>
                                )}
                            </>
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <TextField
                                    {...field}
                                    type="password"
                                    label="Mật khẩu"
                                    variant="outlined"
                                    className="input-login"
                                    style={{ marginTop: '20px' }}
                                    error={Boolean(errors.password)}
                                />
                                {errors.password && (
                                    <FormHelperText error>{errors.password.message}</FormHelperText>
                                )}
                            </>
                        )}
                    />

                    <div className='checkbox-container'>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Duy trì đăng nhập"
                            className="checkbox-login"
                        />
                        <Link href="/forgot-password" underline="none">
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <Button type="submit" text="Đăng nhập" className="login-button" />
                </form>

                <div className='register-container'>
                    <div className="register-link">
                        Bạn chưa có tài khoản?{' '}
                        <Link href="/register" underline="none">
                            Đăng ký ngay
                        </Link>
                    </div>
                    <p>hoặc đăng nhập với VNEID</p>
                    <img src={vneid} alt="VNEID" className="vneid-logo" />
                </div>
            </div>
        </div>
    )
}

export default Login
