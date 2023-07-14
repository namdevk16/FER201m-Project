import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {

    const [categories, setCategories] = useState([]);
    const [houses, setHouses] = useState([]);
    const [cateID, setCateID] = useState(1);
    const [accounts, setAccounts] = useState([]);

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

    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation?category_id=${cateID}`)
            .then(res => res.json())
            .then(data => {
                const t = data.length;
                const total = Math.ceil(t/3);
                let array = [];
                for(var i = 0; i < total; i++) {
                    array.push(i+1);
                }
                setTotalPaginate(total);
                setPaginates(array);
                setHouses(data.slice(startIndex, endIndex));
            })
    }, [cateID, startIndex])


    const handlePaginate = (paginate) => {
        setStartIndex((paginate-1)*4);
        setEndIndex((paginate-1)*4+4);
        setCurrentPage(paginate);
    }

    const chageCateID = (id) => {
        setCateID(id);
        setStartIndex(0);
        setEndIndex(4);
        setCurrentPage(1);
    }

    const prevPaginate = () => {
        setCurrentPage(current => current - 1);
        setStartIndex(start => start-4);
        setEndIndex(end => end-4)
    }

    const nextPaginate = () => {
        setCurrentPage(current => current + 1);
        setStartIndex(start => start+4);
        setEndIndex(end => end + 4)
    }


    return (
        <div className="container content">
            <div className='category'>
                {
                    categories.map(category =>
                        <button key={category.id} onClick={() => chageCateID(category.id)} className={category.id === cateID ? 'btn-category active-category' : 'btn-category'}>{category.name}</button>
                    )
                }
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
    );
}

export default Content;