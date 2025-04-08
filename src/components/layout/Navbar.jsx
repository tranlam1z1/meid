import React from 'react'
import '../../asset/css/Navbar.css';
import Button from '../ui/Button';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="content">
        <h1>Khám phá các dịch vụ tại MelD</h1>
        <p>MelD cung cấp xác thực bằng căn cước công dân đáng tin cậy cho tất cả các giao dịch và thanh toán hàng ngày.</p>
        <Button text="Liên hệ dịch vụ" className="contact-service" />
      </div>
    </div>
  )
}

export default Navbar
