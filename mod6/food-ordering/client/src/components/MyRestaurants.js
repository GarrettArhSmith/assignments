import React, { useContext, useEffect } from 'react';
import { RestaurantContext } from '../context/RestaurantProvider'
import { UserContext } from '../context/UserProvider'
import Restaurant from './Restaurant';

function MyRestaurants(props) {
    const { user: { _id } } = useContext(UserContext)
    const { myRestaurants, getUserRestaurants } = useContext(RestaurantContext)

    useEffect(() => {
        getUserRestaurants(_id)
    }, [])

    return (
        <div>
            <h1>My Restaurants</h1>
            <div className="list">
                {myRestaurants?.map(restaurant => <Restaurant {...restaurant} key={restaurant._id} />)}
            </div>
        </div>
    );
}

export default MyRestaurants;