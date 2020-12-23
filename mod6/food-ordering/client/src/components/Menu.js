import React, { useContext, useEffect } from 'react';
import { ItemContext } from '../context/ItemProvider'
import Item from './Item'

function Menu(props) {
    const { title, _id } = props

    const { items, getItems } = useContext(ItemContext)

    useEffect(() => {
        getItems(_id)
    }, [])

    console.log(_id, items)
    return (
        <div className="menu">
            <h3>{title}</h3>
            <div className="list">
                {items.map(item => <Item key={item._id} {...item} />)}
            </div>
        </div>
    );
}

export default Menu;