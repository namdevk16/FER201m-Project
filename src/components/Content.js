import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {

    const [categories, setCategories] = useState([]);
    const [houses, setHouses] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [url, setUrl] = useState('');
    const [cateId, setCateId] = useState(0);

    const [type, setType] = useState('');
    const [value, setValue] = useState([0, 0]);
    const [key, setKey] = useState(0);

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginates, setPaginates] = useState([]);
    const [totalPaginate, setTotalPaginate] = useState();



    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9999/account')
            .then(res => res.json())
            .then(data => setAccounts(data))
    }, [])

    const paginateData = (data) => {
        let total = 0;
        const t = data.length;
        const d = t / 4;
        if (d % 1 === 0) {
            total = d;
        } else {
            total = Math.ceil(d);
        }
        let array = [];
        for (var i = 0; i < total; i++) {
            array.push(i + 1);
        }
        return {
            total: total,
            array: array
        }
    }


    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation?${url}`)
            .then(res => res.json())
            .then(data => {
                setTotalPaginate(paginateData(data).total);
                setPaginates(paginateData(data).array);
                setHouses(data.slice(startIndex, endIndex));
            })
    }, [url, startIndex])


    const handlePaginate = (paginate) => {
        setStartIndex((paginate - 1) * 4);
        setEndIndex((paginate - 1) * 4 + 4);
        setCurrentPage(paginate);
    }

    const changeByCateId = (msg, id) => {
        setCateId(id)
        setUrl(msg);
        setStartIndex(0);
        setEndIndex(4);
        setCurrentPage(1);
    }

    const prevPaginate = () => {
        setCurrentPage(current => current - 1);
        setStartIndex(start => start - 4);
        setEndIndex(end => end - 4)
    }

    const nextPaginate = () => {
        setCurrentPage(current => current + 1);
        setStartIndex(start => start + 4);
        setEndIndex(end => end + 4)
    }

    useEffect(() => {
        if (type === 'area') {
            switch (key) {
                case 0:
                    setValue([0, 0]);
                    break;
                case 1:
                    setValue([18, 25]);
                    break;
                case 2:
                    setValue([25, 35]);
                    break;
                case 3:
                    setValue([25, 35]);
                    break;
                case 4:
                    setValue([35, 0]);
                    break;
                default:
                    break;
            }
        }
        if (type === 'price') {
            switch (key) {
                case 0:
                    setValue([0, 0]);
                    break;
                case 1:
                    setValue([0, 1.6]);
                    break;
                case 2:
                    setValue([1.6, 2.5]);
                    break;
                case 3:
                    setValue([2.5, 3.5]);
                    break;
                case 4:
                    setValue([3.5, 0]);
                    break;
                default:
                    break;
            }
        }
    }, [key, type])

    const handleSelect = (e, msg) => {
        setKey(parseInt(e.target.value))
        setType(msg);
    }



    const handleSearch = () => {
        if (key === 0) {
            fetch('http://localhost:9999/houseInformation')
                .then(res => res.json())
                .then(data => {
                    setTotalPaginate(paginateData(data).total);
                    setPaginates(paginateData(data).array);
                    setHouses(data.slice(startIndex, endIndex));
                })
        }
        if (type === 'price') {
            fetch('http://localhost:9999/houseInformation')
                .then(res => res.json())
                .then(data => {
                    const result = data.filter(d =>
                        d.price > value[0] && d.price < value[1]
                    )
                    setTotalPaginate(paginateData(result).total);
                    setPaginates(paginateData(result).array);
                    setHouses(result.slice(startIndex, endIndex));
                }
                )
        }
        if (type === 'area') {
            fetch('http://localhost:9999/houseInformation')
                .then(res => res.json())
                .then(data => {
                    const result = data.filter(d =>
                        d.area > value[0] && d.area < value[1]
                    )
                    setTotalPaginate(paginateData(result).total);
                    setPaginates(paginateData(result).array);
                    setHouses(result.slice(startIndex, endIndex));
                })
        }
    }

    console.log(`type:${type}`);
    console.log(`key:${key}`);
    console.log(value);


    return (
        <div className="container content">
            <div className='content-header'>
                <button onClick={() => changeByCateId(` `, 0)} className={cateId === 0 ? 'btn-category active-category' : 'btn-category'}>Tất cả</button>
                {
                    categories.map(category =>
                        <button key={category.id} onClick={() => changeByCateId(`category_id=${category.id}`, category.id)} className={category.id === cateId ? 'btn-category active-category' : 'btn-category'}>{category.name}</button>
                    )
                }

                <div className='search-price'>
                    <select onChange={(e) => handleSelect(e, 'price')}>
                        <option value={0}>---Chọn giá---</option>
                        <option value={1}>Dưới 1.6tr/tháng</option>
                        <option value={2}>Từ 1.6 - 2.5tr/tháng</option>
                        <option value={3}>Từ 2.5 - 3.5tr/tháng</option>
                        <option value={4}>Trên 3.5tr/tháng</option>
                    </select>
                </div>
                <div className='search-area'>
                    <select onChange={(e) => handleSelect(e, 'area')}>
                        <option value={0}>---Chọn diện tích---</option>
                        <option value={1}>Dưới 18m2</option>
                        <option value={2}>Từ 18m2 - 25m2</option>
                        <option value={3}>Từ 25m2 - 35m2</option>
                        <option value={4}>Trên 35m2</option>
                    </select>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className='row house'>
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
                                    <span>
                                        {
                                            accounts.map(acc => acc.id === house.host_id ? acc.phone : '')
                                        }
                                    </span>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='paginate'>
                    <button disabled={currentPage === 1 ? 'true' : ''} onClick={() => prevPaginate()} className='btn-paginate-change disabled'><i class="fas fa-angle-left"></i></button>
                    {
                        paginates.map(paginate =>
                            <button onClick={() => handlePaginate(paginate)} className={paginate === currentPage ? 'btn-paginate active-paginate' : 'btn-paginate'}>{paginate}</button>
                        )
                    }
                    <button disabled={currentPage === totalPaginate ? 'true' : ''} onClick={() => nextPaginate()} className='btn-paginate-change'><i class="fas fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Content;