import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src="path/to/logo.png" alt="Logo" className="footer-logo" />
                    <div className="footer-title">TRUNG TÂM NGHIÊN CỨU VÀ ỨNG DỤNG DỮ LIỆU DÂN CƯ VÀ CĂN CƯỚC CÔNG DÂN</div>
                </div>
                <div className="footer-center">
                    <div className="contact-title">Liên hệ với chúng tôi</div>
                    <div className="contact-info">
                        <div className="contact-address">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#ff0000" }} /> 2 Địa chỉ: Khu E6, Phạm Hùng, Cầu Giấy, Hà Nội
                        </div>
                        <div className="contact-hotline">
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#ff0000" }} /> <span style={{ color: "#ff0000" }}>Hotline: 1900.6712</span>
                        </div>
                        <div className="contact-email">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ff0000" }} /> <span style={{ color: "#ff0000" }}>Email: hotro.meid@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-download">
                <div className="download-title">Tải ứng dụng MeID ngay</div>
                <div className="download-buttons">
                    <a href="path/to/app-store" className="app-store-button">
                        <FontAwesomeIcon icon={faAppStoreIos} /> Tải về trên App Store
                    </a>
                    <a href="path/to/google-play" className="google-play-button">
                        <FontAwesomeIcon icon={faGooglePlay} /> Tải về trên Google Play
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-links">
                    <a href="path/to/terms">Điều khoản sử dụng dịch vụ</a>
                    <a href="path/to/privacy">Chính sách quyền riêng tư</a>
                </div>
                <div className="copyright">
                    Bản quyền thuộc về Trung tâm dữ liệu Quốc gia về dân cư
                </div>
            </div>
        </div>
    );
}

export default Footer;