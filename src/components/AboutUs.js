import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/assets/css/AboutUs.css'
import { Container, Row, Carousel, Image } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signiture from '../styles/assets/img/signiture.jpg'
import Banner from '../styles/assets/img/banner3.png'
import { NavLink } from 'react-router-dom';
import avatar from '../images/abv.png'
import { useState } from 'react';

const AboutUs = () => {

    const [humnan, setHumans] = useState([
        {
            id: 1,
            name: "MinhTuan",
            role: "trưởng nhóm"
        }, {
            id: 2,
            name: "TuAnh",
            role: "thành viên"
        }, {
            id: 3,
            name: "QuangBa",
            role: "thành viên"
        }, {
            id: 4,
            name: "HuuNam",
            role: "thành viên"
        }

    ]);
    const milder = {
        padding: '0',
        overflow: 'hidden',
        marginTop: '4%'
    }
    const machmeter = {
        padding: '5%',
    }

    return (

        <Container fluid style={milder}>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="https://www.ohanaliving.vn/542ac03681516bcca0dd605bedd41a2b.jpg"
                            alt="tu world"
                            height={300}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="https://datnendep.vn/wp-content/uploads/2020/09/cac-mau-phong-tro-dep-hien-nay-duoc-khach-hang-ua-chuong.jpg"
                            alt="hydraulic pumps"
                            height={300}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src="https://kfa.vn/wp-content/uploads/2021/08/thiet-ke-phong-tro-dep-9.jpg"
                            alt="everything industrial"
                            height={300}
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <div className='intro-system'>
                    <div className='content-intro'>
                        <h3>Giới Thiệu</h3>
                        <p>Welcome to Homedy</p>
                    </div>
                </div>
            </Row>
            <Row>
                <div className='col-lg-6 col-md-12 col-sm-12 p-left'>
                    <img src={Banner}
                        alt='...'
                    />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 p-right'>
                    <div className='story-title'>
                        <h3>Câu chuyên Homedy</h3>
                        <p></p>
                    </div>
                    <div className='story-content'>
                        <p>
                            Homedy giúp bạn tìm kiếm và khám phá các lựa chọn chỗ ở phù hợp. Đối với sinh viên mới tốt nghiệp, công nhân đang đi làm hoặc ai đó đang tìm chỗ ở tạm thời, chúng tôi cung cấp thông tin về căn hộ, ký túc xá, phòng trọ và các chỗ ở khác trong khu vực của bạn. Với trang web tìm nhà trọ, việc tìm kiếm một địa điểm thật dễ dàng. Giao diện tìm kiếm đơn giản và thuận tiện cho phép bạn tìm kiếm theo vị trí, giá cả, khu vực và các tiện ích khác. Xem thông tin chi tiết về từng vị trí, hình ảnh, mô tả, tiện nghi và thông tin liên hệ.
                        </p>
                        <p>
                            Trang web đưa ra những đánh giá, nhận xét của những người đã từng ở, gợi ý những khu vực nổi tiếng và gần khu vực thuận tiện đi lại như trường học, bệnh viện, siêu thị.
                        </p>
                        <p>
                            Chúng tôi cam kết mang đến trải nghiệm lưu trú tốt nhất, tiết kiệm thời gian và công sức cho bạn. Bắt đầu ngay bây giờ và khám phá các lựa chọn ký túc xá tuyệt vời chỉ trong vài cú nhấp chuột!
                        </p>
                    </div>
                    <div className='signiture'>
                        <img src={Signiture} alt='' />
                    </div>
                </div>
            </Row>
            <Row>
                <div className='intro-member'>
                    <div className='content-intro'>
                        <p></p>
                        <h3>Thành viên nhóm</h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </Row>
            <Row style={machmeter}>
                {
                    humnan.map((h,key) => 
                        <div className='col-lg-3 col-md-6 col-sm-12' key={key}>
                            <div className='row item-member'>
                                <div className='col-12 member-img'>
                                    <img src={avatar} alt='' />
                                </div>
                                <div className='col-12 member-content'>
                                    <p>{h.name}</p>
                                    <p>{h.role}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Row>
            <Row>
                <div className='quote'>
                    <div className='content-quote'>
                        <p></p>
                        <h3><i>“Khám phá các khả năng, khám phá thế giới và tạo hành trình của riêng bạn với chúng tôi.”</i></h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </Row>
            <Row>
                <div className='col-12 advantage'>
                    <h3>Những lợi thế của chúng tôi</h3>
                </div>
                <div className='row --adv'>
                    <div className='col-lg-3 col-md-12 item-adv'>
                        <div className='iicon'>
                            <i className="bi bi-search"></i>
                        </div>
                        <div className='title-item'>
                            <h4>Tìm kiếm dễ dàng</h4>
                        </div>
                        <div className='desc-item'>
                            <p>Trang web cung cấp một giao diện tìm kiếm đơn giản và thuận tiện để bạn tìm kiếm và khám phá các lựa chọn chỗ ở phù hợp.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 item-adv'>
                        <div className='iicon'>
                            <i className="bi bi-info-circle"></i>
                        </div>
                        <div className='title-item'>
                            <h4>Chi tiết và đánh giá</h4>
                        </div>
                        <div className='desc-item'>
                            <p>Trang web cung cấp thông tin chi tiết về từng địa điểm, bao gồm hình ảnh, mô tả, tiện nghi và thông tin liên lạc.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 item-adv'>
                        <div className='iicon'>
                            <i className="bi bi-alarm"></i>
                        </div>
                        <div className='title-item'>
                            <h4>Tiết kiệm thời gian và công sức</h4>
                        </div>
                        <div className='desc-item'>
                            <p>Website cam kết mang lại trải nghiệm lưu trú tốt nhất, tiết kiệm thời gian và công sức cho bạn.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ backgroundColor: 'black' }}>
                <div className='col-12 contact'>
                    <h3>Liên hệ với chúng tôi</h3>
                </div>

                <div className='col-12 address'>
                    <i className="bi bi-geo-alt"></i> <span>Hoa Lac - 29km Dai Lo Thang Long</span>
                </div>
                <div className='col-12 phone'>
                    <i className="bi bi-telephone"></i> <span>(+84) *********</span>
                </div>
                <div className='col-12 email'>
                    <i className="bi bi-envelope"></i> <span>Homedy@gmail.com</span>
                </div>
                <div className='col-12 goback'>
                    <NavLink to={'/'}><span>Khám phá ngay!</span></NavLink>

                </div>
            </Row>
            <Row>
                <div className='footer-img'></div>
            </Row>
        </Container>


    );
};

export default AboutUs;