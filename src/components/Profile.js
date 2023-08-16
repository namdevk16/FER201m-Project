import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Profile = () => {

    const navigate = useNavigate();

    const [account, setAccount] = useState({})
    

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState();
    const [roleId, setRoleId] = useState();


    useEffect(() => {
        fetch(`http://localhost:9999/account/${JSON.parse(sessionStorage.getItem('account')).id}`)
            .then(res => res.json())
            .then(data => {
                setFullname(data.fullname);
                setEmail(data.email);
                setPhone(data.phone);
                setPassword(data.password);
                setAvatar(data.avatar);
                setRoleId(data.role_id);
            })
    }, [])

    const handleImage = (e) => {
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.addEventListener('load', () => {
            setAvatar(fr.result)
        })
    }

    const handleUpadate = () => {
        const data = {fullname, email, phone, password, avatar, role_id:roleId};
        const option = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:9999/account/${JSON.parse(sessionStorage.getItem('account')).id}`, option)
            .then(res => res.json())
            .then(data => {
                if(data !== null) {
                    sessionStorage.setItem('account', JSON.stringify(data));
                    toast.success('Thông tin cá nhân của bạn đã thay đổi thành công');
                    navigate('/');
                }
            })
    }

    return (
        <div className='container profile'>
            <div style={{margin:'10% 0 5% 0'}}>
                <div className='profile-items'>
                    <label className='profile-items-title' htmlFor='name'>Tên hiển thị</label>
                    <input id='name' className="form-control profile-items-input" style={{ width: '100%' }} type='text' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div className='profile-items'>
                    <label className='profile-items-title' htmlFor='phone'>Số điện thoại</label>
                    <input id='phone' className="form-control profile-items-input" style={{ width: '100%' }} type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='profile-items'>
                    <label className='profile-items-title' htmlFor='email'>Email</label>
                    <input id='email' className="form-control profile-items-input" style={{ width: '100%' }} type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='profile-items-password'>
                    <label className='profile-items-title' htmlFor='email'>Mật khẩu</label>
                    <div style={{width:'100%'}}>
                        <Link to={'/changepassword'}>Đổi mật khẩu</Link>
                    </div>
                </div>
                <div className='profile-items-img'>
                    <label className='profile-items-title' htmlFor='email'>Ảnh đại diện</label>
                    <div style={{width:'100%'}}>
                        <img src={avatar} alt='#' /> <br />
                        <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
                    </div>
                </div>
                <div  style={{display:'flex', justifyContent:'space-around'}}>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>Hủy</Link>
                    <button className='btn btn-primary' onClick={handleUpadate}>Cập nhật</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;