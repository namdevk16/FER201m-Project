
const Footer = () => {
    return (
        <div className="container-fluid footer">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap',margin: '0 3%'}}>
                    <div style={{flexBasis:'30%'}}>
                        <div style={{textAlign:'center'}}>
                            <h3>Thành viên dự án</h3>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap'}}>
                            <div>
                                <p>Phạm Minh Tuấn</p>
                                <p>Phan Nguyễn Tú Anh</p>
                            </div>

                            <div>
                                <p>Ngô Quang Bá</p>
                                <p>Ngô Hữu Nam</p>
                            </div>
                        </div>
                    </div>

                    <div style={{flexBasis:'15%'}}>
                        <div>
                            <h3>Liên hệ</h3>
                        </div>
                        <div>
                            <i className="fas fa-phone-square-alt"></i>
                            <span style={{ marginLeft: '12px' }}>0123445678</span>
                        </div>
                        <div>
                            <i className="far fa-envelope"></i>
                            <span style={{ marginLeft: '12px' }}>acb@gmail.com</span>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;