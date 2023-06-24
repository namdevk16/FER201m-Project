import { useEffect, useState } from 'react'

const Content = () => {

    const [categories, setCategories] = useState([]);
    const [houses, setHouses] = useState([]);
    const [cateID, setCateID] = useState(1);

    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

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
                            <button>{category.name}</button>
                        )
                }
            </div>

            <div className='row house'>
                {
                    houses.map(house =>
                            <div className='house-item col-lg-3 col-md-3'>
                                <div>
                                    <img style={{ width: "100px", height: "100px" }} src={house.thumb} alt='#' />
                                </div>
                                <div>{house.name}</div>
                                <div>{house.description}</div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}
 
export default Content;