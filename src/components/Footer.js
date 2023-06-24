import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4'>
                        <Link to={'/'}>Logo</Link>
                    </div>

                    <div className='col-lg-4 col-md-4'>
                        <div>
                            <h3>Member</h3>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <p>Phạm Minh Tuấn</p>
                                <p>Phan Nguyễn Tú Anh</p>
                            </div>
                            
                            <div className='col-lg-6 col-md-6'>
                                <p>Ngô Quang Bá</p>
                                <p>Ngô Hữu Nam</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4' style={{textAlign:"right"}}>
                        <div>
                            <h3>Contact</h3>
                        </div>
                        <div>
                            <p>Số điện thoại</p>
                            <p>Email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;