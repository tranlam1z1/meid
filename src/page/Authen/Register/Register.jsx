import React from 'react'
import image5 from '../../../asset/image/image5.png'
import './Register.css'
import logo from '../../../asset/image/logo.png'
import Button from '../../../components/ui/Button'
import { InputAdornment, Link, TextField, FormHelperText } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
})

function Register() {
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    }

    return (
        <div className="container-register">
            <div className="left-content">
                <img src={image5} alt="Banner" />
            </div>
            <div className="right-content-register">
                <div className="logo-register">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p className="title-register">Đăng ký tài khoản MeID</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="input-register-container">
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
                                    className="input-register"
                                    error={Boolean(errors.username)}
                                />
                                {errors.username && <FormHelperText error>{errors.username.message}</FormHelperText>}
                            </>
                        )}
                    />

                    <Controller
                        name="idCard"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <TextField
                                    {...field}
                                    label="Căn cước công dân"
                                    variant="outlined"
                                    className="input-register"
                                    style={{ marginTop: 20 }}
                                    error={Boolean(errors.idCard)}
                                />
                                {errors.idCard && <FormHelperText error>{errors.idCard.message}</FormHelperText>}
                            </>
                        )}
                    />

                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <TextField
                                    {...field}
                                    label="Số điện thoại"
                                    variant="outlined"
                                    className="input-register"
                                    style={{ marginTop: 20 }}
                                    error={Boolean(errors.phone)}
                                />
                                {errors.phone && <FormHelperText error>{errors.phone.message}</FormHelperText>}
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
                                    label="Mật khẩu"
                                    type="password"
                                    variant="outlined"
                                    className="input-register"
                                    style={{ marginTop: 20 }}
                                    error={Boolean(errors.password)}
                                />
                                {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                            </>
                        )}
                    />

                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <TextField
                                    {...field}
                                    label="Nhập lại mật khẩu"
                                    type="password"
                                    variant="outlined"
                                    className="input-register"
                                    style={{ marginTop: 20 }}
                                    error={Boolean(errors.confirmPassword)}
                                />
                                {errors.confirmPassword && (
                                    <FormHelperText error>{errors.confirmPassword.message}</FormHelperText>
                                )}
                            </>
                        )}
                    />

                    <Button text="Đăng ký" className="register-button" type="submit" />
                </form>
                <div className="register-container">
                    <div className="register-link">
                        Đã có tài khoản? <Link href="/login" underline="none">Đăng nhập ngay</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
