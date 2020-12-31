import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MenuContext } from '../context/MenuProvider'
import { RestaurantContext } from '../context/RestaurantProvider'

import Menu from './Menu'
import MenuForm from './MenuForm'

function RestaurantPage(props) {
    const { restaurantId } = useParams()
    const { currentRestaurant, getOneRestaurant } = useContext(RestaurantContext)
    const { menus, getMenus, addMenu, deleteMenu } = useContext(MenuContext)

    const { name, description } = currentRestaurant

    useEffect(() => {
        getOneRestaurant(restaurantId)
        getMenus(restaurantId)
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <h4>{description}</h4>
            {menus.map(menu => <Menu
                key={menu._id} 
                {...menu} 
                owner={currentRestaurant?.user?._id} 
                deleteMenu={deleteMenu}
            />)}
            <MenuForm addMenu={addMenu} currentRestaurant={currentRestaurant} />
        </div>
    );
}

export default RestaurantPage;