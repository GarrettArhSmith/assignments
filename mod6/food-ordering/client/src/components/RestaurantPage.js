import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MenuContext } from '../context/MenuProvider'
import { RestaurantContext } from '../context/RestaurantProvider'

import Menu from './Menu'

function RestaurantPage(props) {
    const { restaurantId } = useParams()
    const { currentRestaurant, getOneRestaurant } = useContext(RestaurantContext)
    const { menus, getMenus } = useContext(MenuContext)

    const { name, description } = currentRestaurant

    useEffect(() => {
        getOneRestaurant(restaurantId)
        getMenus(restaurantId)
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <h4>{description}</h4>
            {menus.map(menu => <Menu key={menu._id} {...menu} />)}
        </div>
    );
}

export default RestaurantPage;