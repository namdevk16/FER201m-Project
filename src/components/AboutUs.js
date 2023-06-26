import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/assets/css/AboutUs.css'
import { MDBCarousel, MDBCarouselItem, MDBIcon } from "mdb-react-ui-kit";
import { Container, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signiture from '../styles/assets/img/signiture.jpg'
import Banner from '../styles/assets/img/banner3.png'
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    const milder = {
        padding: '0',
        overflow: 'hidden',
        marginTop: '4%'
    }
    const milheight = {
        height: '300px'
    }
    const machmeter = {
        padding : '5%',
    }

    const _member = [
        {
            player1: {
                name: 'MinhTuan',
                desc: 'Leader',
                image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
            },
        },
        {
            player2: {
                name: "TuAnh",
                desc: "Secretary1",
                image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
            },
        },
        {
            player3: {
                name: 'QuangBa',
                desc: 'Secretary2',
                image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
            },
        },
        {
            player4: {
                title: 'HuuNam',
                desc: 'Secretary3',
                image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
            },
        },
    ];
    return (

        <Container fluid style={milder}>
            <Row>
                <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                        alt='...'
                        style={milheight}
                    >
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                        alt='...'
                        style={milheight}
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                        alt='...'
                        style={milheight}
                    >
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                </MDBCarousel>
            </Row>
            <Row>
                <div className='intro-system'>
                    <div className='content-intro'>
                        <h3>About Us</h3>
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
                        <h3>our story</h3>
                        <p></p>
                    </div>
                    <div className='story-content'>
                        <p>
                            Homedy websites help you to search and discover suitable accommodation options. For fresh graduates, working workers or someone looking for temporary accommodation, we provide information on apartments, hostels, motel rooms and other accommodation in your area.
                            With a hostel finder website, finding a place is easy. The simple and convenient search interface allows you to search by location, price, area and other utilities. View detailed information about each location, photos, descriptions, amenities, and contact information.
                        </p>
                        <p>
                            The site offers reviews and comments from people who have stayed, suggesting popular and near-convenient areas such as schools, hospitals, and supermarkets.
                        </p>
                        <p>
                            We are committed to providing the best accommodation experience, saving you time and effort. Get started now and explore great hostel options in just a few clicks!
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
                        <h3>Project Member</h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </Row>
            <Row style={machmeter}>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='row item-member'>
                        <div className='col-12 member-img'>
                            <img src='https://i.postimg.cc/RhYnBf5m/er-slider.jpg' alt='' />
                        </div>
                        <div className='col-12 member-content'>
                            <p>MinhTuan</p>
                            <p>Leader</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='row item-member'>
                        <div className='col-12 member-img'>
                            <img src='https://i.postimg.cc/RhYnBf5m/er-slider.jpg' alt='' />
                        </div>
                        <div className='col-12 member-content'>
                            <p>TuAnh</p>
                            <p>Secretary</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='row item-member'>
                        <div className='col-12 member-img'>
                            <img src='https://i.postimg.cc/RhYnBf5m/er-slider.jpg' alt='' />
                        </div>
                        <div className='col-12 member-content'>
                            <p>QuangBa</p>
                            <p>Secretary</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='row item-member'>
                        <div className='col-12 member-img'>
                            <img src='https://i.postimg.cc/RhYnBf5m/er-slider.jpg' alt='' />
                        </div>
                        <div className='col-12 member-content'>
                            <p>HuuNam</p>
                            <p>Secretary</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
            <div className='quote'>
                    <div className='content-quote'>
                        <p></p>
                        <h3><i>“Discover the possibilities, explore the world, and create your own journey with us.”</i></h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </Row>
            <Row>
                <div className='col-12 advantage'>
                    <h3>Advantage</h3>
                </div>
                <div className='col-12 --adv'>
                    <div className='col-3 item-adv'>
                    <div className='iicon'>
                    <i class="bi bi-search"></i>
                    </div>
                    <div className='title-item'>
                        <h4>Searching is easy</h4>
                    </div>
                    <div className='desc-item'>
                        <p>The website provides a simple and convenient search interface for you to search and discover suitable accommodation options.</p>
                    </div>
                    </div>
                    <div className='col-3 item-adv'>
                    <div className='iicon'>
                    <i class="bi bi-info-circle"></i>
                    </div>
                    <div className='title-item'>
                        <h4>Details and reviews:</h4>
                    </div>
                    <div className='desc-item'>
                        <p>The website provides detailed information about each location, including photos, descriptions, amenities and contact information.</p>
                    </div>
                    </div>
                    <div className='col-3 item-adv'>
                    <div className='iicon'>
                    <i class="bi bi-alarm"></i>
                    </div>
                    <div className='title-item'>
                        <h4>Save time and effort:</h4>
                    </div>
                    <div className='desc-item'>
                        <p>Website is committed to providing the best accommodation experience, saving you time and effort.</p>
                    </div>
                    </div>
                </div>
            </Row>
            <Row style={{backgroundColor:'black'}}>
            <div className='col-12 contact'>
                    <h3>Contact With Us</h3>
                </div>

            <div className='col-12 address'>
            <i class="bi bi-geo-alt"></i> <span>Hoa Lac - 29km Dai Lo Thang Long</span>
            </div>    
            <div className='col-12 phone'>
            <i class="bi bi-telephone"></i> <span>(+84) *********</span>
            </div>    
            <div className='col-12 email'>
            <i class="bi bi-envelope"></i> <span>Homedy@gmail.com</span>
            </div>    
            <div className='col-12 goback'>
            <NavLink to={'/'}><span>Discover Now!</span></NavLink>
             
            </div>
            </Row>
            <Row>
                <div className='footer-img'></div>
            </Row>
        </Container>


    );
};

export default AboutUs;