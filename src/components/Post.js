import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Post = () => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [area, setArea] = useState('');
    const [addressdetail, setAddressdetail] = useState('');
    const [image, setImage] = useState();
    const [village, setVillage] = useState(1);
    const [category, setCategory] = useState(1);
    const [categories, setCategories] = useState([]);
    const [region, setRegion] = useState([]);
    const [houses, setHouses] = useState([]);

    const navigate = useNavigate();
    console.log(image);

    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation?host_id=${JSON.parse(sessionStorage.getItem('account')).id}`)
            .then(res => res.json())
            .then(data => setHouses(data))
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

    const openModal = () => {
        const modal = document.querySelector('.modal-house');
        modal.classList.add('open');
    }

    const closeModal = () => {
        const modal = document.querySelector('.modal-house');
        modal.classList.remove('open');
    }

    const handleImage = (e) => {
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.addEventListener('load', () => {
            setImage(fr.result)
        })
    }

    const hadleSubmit = (e) => {
        const listInputs = document.querySelectorAll('.form-control');
        const listErrors = document.querySelectorAll('.error');
        if ([...listInputs].every(listInput => listInput.value !== '')) {
            const data = {
                category_id: parseInt(category),
                host_id: JSON.parse(sessionStorage.getItem('account')).id,
                name: name,
                contact: contact,
                price: `${price}tr/tháng`,
                description: description,
                address_id: parseInt(village),
                address: addressdetail,
                thumb: image,
                area: `${area}m2`,
                is_post: false
            }
            const option = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:9999/posts`, option)
                .then(res => res.json())
                .then(() => {
                    alert('Your request has been sent. Wait for the admin to moderate');
                    window.location.reload();
                }
                )
        }

        e.preventDefault();
        if ([...listInputs].every(listInput => listInput.value === '')) {
            [...listErrors].forEach(listError =>
                listError.style.display = 'block'
            )
        }
        for (var i = 0; i < listInputs.length; i++) {
            if (listInputs[i].value !== '') {
                listErrors[i].style.display = 'none'
                for (var j = 0; j < listInputs.length; j++) {
                    if (i !== j && listInputs[i].value === '') {
                        listErrors[j].style.display = 'block';
                    }
                }
            }
        }
    }

    return (
        <div className="container post">

            <button className='create' onClick={openModal}>Post an house</button>

            <div className='row'>
                {
                    houses.map(house =>
                        <div key={house.id} className='house-item col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <Link to={`/house/detail/${house.id}`}>
                                <div className='house-img'>
                                    <img style={{ width: "100%", height: "300px" }} src={house.thumb} alt='#' />
                                </div>
                                <div className='house-name'>{house.name}</div>
                                <div>
                                    <span>Liên hệ: </span>
                                    <span>{house.contact}</span>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>

            <div className="modal-house">
                <div className="modal-container-house">
                    <div className="modal-house-title">
                        <h5>Create new house</h5>
                    </div>
                    <form onSubmit={(e) => hadleSubmit(e)}>
                        <div className="input">
                            <label htmlFor="name">Name</label><br />
                            <input id="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="input">
                            <label htmlFor="contact">Contact</label>
                            <input id="contact" type="text" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="input">
                            <label htmlFor="price">Price</label>
                            <input id="price" type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="input">
                            <label htmlFor="description">Description</label>
                            <input id="description" type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="input">
                            <label htmlFor="area">Area</label>
                            <input id="area" type="text" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="input">
                            <label htmlFor="address">Address detail</label>
                            <input id="adress" type="text" className="form-control" value={addressdetail} onChange={(e) => setAddressdetail(e.target.value)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="input-image">
                            <label htmlFor="image">Image</label>
                            <input id="image" type="file" className="form-control" accept='image/*' onChange={(e) => handleImage(e)} />
                            <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                        </div>
                        <div className="select">
                            <div className='category'>
                                <label style={{ marginRight: '8px' }}>Category</label>
                                <select onChange={(e) => setCategory(e.target.value)}>
                                    {
                                        categories.map(cate =>
                                            <option key={cate.id} value={cate.id}>{cate.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className='village'>
                                <label style={{ marginRight: '8px' }}>Village</label>
                                <select onChange={(e) => setVillage(e.target.value)}>
                                    {
                                        region.map(reg =>
                                            <option key={reg.id} value={reg.id}>{reg.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="button">
                            <span className="btn-cancel" onClick={closeModal}>Cancel</span>
                            <button type='submit' style={{ marginLeft: "6px" }} className="btn-create">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Post;