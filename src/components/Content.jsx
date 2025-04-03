import React from 'react';
import '../css/Content.css';
import image1 from '../asset/image/image1.png';
import image2 from '../asset/image/image2.png';
import image3 from '../asset/image/image3.png';

import Button from './Button';

function Content() {
    return (
        <div className="container">
            <div className="left-content">
                <p className="section-title">DỊCH VỤ CỦA MelD</p>
                <p className="main-title">Lợi ích khi sử dụng dịch vụ của MelD</p>
                <p className="description">
                    MelD là một nền tảng định danh đáng tin cậy và tiện lợi. Với MelD, người dùng có thể sử dụng một tài khoản duy nhất để truy cập vào nhiều dịch vụ khác nhau, tiết kiệm thời gian và công sức. Nền tảng này cung cấp các dịch vụ định danh dựa trên cơ sở dữ liệu dân cư, đảm bảo tính chính xác và tin cậy của thông tin cá nhân.
                </p>
                <div className='contact-group'>
                    <div className="update-contact">
                        <p>Luôn cập nhật để hoàn thiện tính năng của MelD, liên hệ với chúng tôi nếu bạn gặp vấn đề khi sử dụng các tính năng.</p>
                        <Button text="Liên hệ với chúng tôi" className="contact-button" />
                    </div>
                    <div className='info-grid'>
                        <div className="info-item">
                            <div className="icon">
                                <img src={image2} alt="Settings Icon" />
                            </div>
                            <div className="text">
                                <p>Lượt sử dụng</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon">
                                <img src={image3} alt="User Icon" />
                            </div>
                            <div className="text">
                                <p>Khách hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <div className="image-grid">
                    <div className="image-item">
                        <img src={image1} alt="MelD service illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
