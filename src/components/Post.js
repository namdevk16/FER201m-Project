import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [area, setArea] = useState('');
    const [addressdetail, setAddressdetail] = useState('');
    const [image, setImage] = useState();
    const [village, setVillage] = useState(1);
    const [category, setCategory] = useState(1);

    const errName = useRef();
    const errPrice = useRef();
    const errDescription = useRef();
    const errArea = useRef();
    const errAddressdetail = useRef();


    const [categories, setCategories] = useState([]);
    const [region, setRegion] = useState([]);
    const [posts, setPosts] = useState([]);
    const [accounts, setAccounts] = useState([]);

    const listInputs = [name, price, description, area, addressdetail];
    const listErrors = [errName, errPrice, errDescription, errArea, errAddressdetail];



    const navigate = useNavigate()

    const checkConfirm = () => {
        if (listInputs.every(listInput => listInput !== '')) {
            return 1;
        } else if (listInputs.some(listInput => listInput === '')) {
            return 2;
        }
    }

      const checkValidate = () => {
        if (listInputs.every(listInput => listInput === '')) {
            listErrors.forEach(listError =>
                listError.current.style.display = 'block'
            )
        }

        listInputs.forEach(
            (inn,index) => {
                if (inn === '') {
                    listErrors[index].current.style.display = 'block'
                  } else {
                    listErrors[index].current = '';
                  }
            }
        )
    }

    useEffect(() => {
        fetch(`http://localhost:9999/posts?host_id=${JSON.parse(sessionStorage.getItem('account')).id}&is_post=false`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9999/region')
            .then(res => res.json())
            .then(data => setRegion(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9999/account')
            .then(res => res.json())
            .then(data => setAccounts(data))
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
        if(e.target.files[0] === null) {
            setImage('https://tse4.mm.bing.net/th?id=OIP.1Kb48pEGCuofJ2ONrfYx8wHaEi&pid=Api&P=0&h=180');
        }  else {
            const fr = new FileReader();
            fr.readAsDataURL(e.target.files[0]);
            fr.addEventListener('load', () => {
                setImage(fr.result)
            })
        }
    }

    const handleSubmit = () => {
        if (checkConfirm() === 1) {
            const data = {
                category_id: parseInt(category),
                host_id: JSON.parse(sessionStorage.getItem('account')).id,
                name: name,
                price: parseInt(area),
                description: description,
                address_id: parseInt(village),
                address: addressdetail,
                thumb: image,
                area: parseInt(area),
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
                    toast.info('Your request has been sent. Wait for the admin to moderate');
                    window.location.reload();
                }
                )
        } else if (checkConfirm() === 2) {
            checkValidate();
        } 
    }

    const handleDelete = (id) => {
        if (window.confirm("Do you want to remove")) {
            const option = {
                method: "DELETE",
            }
            fetch(`http://localhost:9999/posts/${id}`, option)
                .then(() => {
                    toast.success("Delete success.");
                    navigate('/post')
                }
                )
        }
    }

    return (
        <div className="container post">
            <div style={{margin:'10% 0 5% 0'}}>
                <button className='create' onClick={openModal}>Post an house</button>
                <div className='row'>
                    {
                        posts.map(post =>
                            <div key={post.id} className='house-item col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                                <Link to={`/post/edit/${post.id}`} style={{display:'block'}}>
                                    <div className='house-img'>
                                        <img style={{ width: "100%", height: "300px"}} src={post.thumb} alt='#' />
                                    </div>
                                    <div className='house-name'>{post.name}</div>
                                    <div>
                                        <span>Liên hệ: </span>
                                        <span>
                                            {
                                                accounts.map(acc => acc.id === post.host_id ? acc.phone : '')
                                            }
                                        </span>
                                    </div>
                                </Link>
                                <span style={{ float: "left" }}><button className="btn btn-success"><Link style={{color:'white'}} to={`/post/edit/${post.id}`}>Edit</Link></button></span>
                                <span style={{ float: "right" }}><button className="btn btn-danger" onClick={(() => handleDelete(post.id))}>Reject</button></span>
                            </div>
                        )
                    }
                </div>

                <div className="modal-house">
                    <div className="modal-container-house">
                        <div className="modal-house-title">
                            <h5>Create new house</h5>
                        </div>
                        <div>
                            <div className="input">
                                <label htmlFor="name">Name</label><br />
                                <input id="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errName}>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label htmlFor="price">Price</label>
                                <input id="price" type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errPrice}>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errDescription}>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label htmlFor="area">Area</label>
                                <input id="area" type="text" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errArea}>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label htmlFor="address">Address detail</label>
                                <input id="adress" type="text" className="form-control" value={addressdetail} onChange={(e) => setAddressdetail(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errAddressdetail}>Hãy nhập đủ thông tin</span>
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
                            <div className="button" style={{marginTop:'12px'}}>
                                <span className="btn-cancel" onClick={closeModal}>Cancel</span>
                                <button style={{ marginLeft: "6px" }} className="btn-create" onClick={handleSubmit}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
