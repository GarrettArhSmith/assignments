import React, { useContext, useEffect } from 'react';
import { RestaurantContext } from '../context/RestaurantProvider'

function Home(props) {
    const { restaurants, getAllRestaurants } = useContext(RestaurantContext)

    useEffect(() => {
        getAllRestaurants()
    }, [])

    console.log(restaurants)

    return (
        <div>
            <h1>Home</h1>
            {restaurants?.map(restaurant => <h1>{restaurant.name}</h1>)}
        </div>
    );
}

export default Home;