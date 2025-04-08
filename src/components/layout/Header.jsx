import React from 'react';
import '../../asset/css/Header.css';
import Button from '../ui/Button';
import logo from '../../asset/image/logo.png'; 

const MENU_ITEMS = [
  { id: 1, text: 'Dành cho cá nhân', href: '#' },
  { id: 2, text: 'Dành cho doanh nghiệp', href: '#' },
  { id: 3, text: 'Nhà phát triển', href: '#' },
  { id: 4, text: 'Bảo mật', href: '#' },
  { id: 5, text: 'Liên hệ', href: '#' }
];

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="menu">
          <ul className="menu-list">
            {MENU_ITEMS.map(item => (
              <li key={item.id} className="menu-item">
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
          <div className="auth-buttons">
            <Button text="Đăng ký" className="register" />
            <Button text="Đăng nhập" className="login" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;