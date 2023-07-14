import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EditPost = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [area, setArea] = useState('');
    const [addressdetail, setAddressdetail] = useState('');
    const [image, setImage] = useState();
    const [village, setVillage] = useState();
    const [category, setCategory] = useState();
    const [hostId, setHostId] = useState();
    const [isPost, setIsPost] = useState();


    const [categories, setCategories] = useState([]);
    const [region, setRegion] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:9999/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                setPrice(data.price);
                setDescription(data.description);
                setArea(data.area);
                setAddressdetail(data.address);
                setImage(data.thumb);
                setVillage(data.address_id);
                setCategory(data.category_id);
                setHostId(data.host_id);
                setIsPost(data.is_post);
            })
    }, [])


    useEffect(() => {
        fetch('http://localhost:9999/region')
            .then(res => res.json())
            .then(data => setRegion(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleImage = (e) => {
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.addEventListener('load', () => {
            setImage(fr.result)
        })
    }

    const handleUpadate = () => {
        const data = {
            category_id: category,
            host_id: hostId,
            name,
            price,
            description,
            address_id: village,
            address: addressdetail,
            thumb: image,
            area,
            is_post: isPost,
        }
        const option = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:9999/posts/${id}`, option)
            .then(res => res.json())
            .then(data => {
                if(data !== null) {
                    alert('Cập nhật thành công');
                    navigate('/post');
                }
            })
    }

    return (
        <div className='container edit-post'>
            <div className='row'>
                <div className='col-lg-8 col-md-6 col-sm-12 col-xs-12'>
                    <div className='edit-post-image'>
                        <h4>Hình ảnh</h4>
                        <img src={image} alt='#' />
                        <span>Thay đổi ảnh</span> <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <div className='edit-post-infor'>
                        <h4>Địa chỉ cho thuê</h4>
                        <label style={{ marginRight: '12px' }}>Xã</label> <br/>
                        <select onChange={(e) => setVillage(e.target.value)}>
                            {
                                region.map(reg =>
                                    <option key={reg.id} value={reg.id} selected={reg.id === village ? 'true' : ''}>{reg.name}</option>
                                )
                            }
                        </select>
                        <div className='form-input'>
                            <label>Địa chỉ chi tiết</label> <br/>
                            <input className="form-control" style={{width:'100%'}} type='text' value={addressdetail} onChange={(e) => setAddressdetail(e.target.value)}/>
                        </div>

                        <h4>Thông tin mô tả</h4>
                        <div className='form-input'>
                            <label>Tên</label> <br/>
                            <input className="form-control" style={{width:'100%'}} type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <label style={{ marginRight: '12px' }}>Loại</label> <br/>
                        <select onChange={(e) => setCategory(e.target.value)}>
                            {
                                categories.map(cate =>
                                    <option key={cate.id} value={cate.id} selected={cate.id === category ? 'true' : ''}>{cate.name}</option>
                                )
                            }
                        </select>
                        <textarea className="form-control" style={{width:'100%'}} type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <div className='form-input'>
                            <label>Diện tích</label> <br/>
                            <input className="form-control" style={{width:'100%'}} type='text' value={area} onChange={(e) => setArea(e.target.value)}/>
                        </div>
                        <div className='form-input'>
                            <label>Giá tiền</label> <br/>
                            <input className="form-control" style={{width:'100%'}} type='text' value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                        <Link style={{textDecoration:'none'}} to={'/post'}>Cancel</Link>
                        <button className='btn btn-primary' onClick={handleUpadate}>Cập nhật</button>       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPost;