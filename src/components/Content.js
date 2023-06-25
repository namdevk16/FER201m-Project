import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {

    const [categories, setCategories] = useState([]);
    const [houses, setHouses] = useState([]);
    const [cateID, setCateID] = useState(1);

    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation?category_id=${cateID}`)
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [cateID])

    return (
        <div className="container content">
            <div className='category'>
                {
                    categories.map(category => 
                            <button key={category.id} onClick={() => setCateID(category.id)} className={ category.id === cateID ? 'btn-category active-category' : 'btn-category'}>{category.name}</button>
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
                                        <span>{house.contact}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                }
            </div>
        </div>
    );
}
 
export default Content;