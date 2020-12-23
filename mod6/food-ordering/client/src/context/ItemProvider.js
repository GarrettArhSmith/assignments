import React, { useState } from 'react'
import axios from 'axios'

export const ItemContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function ItemProvider(props) {
    const [items, setItems] = useState([])

    function getItems(menuId) {
        userAxios.get(`/api/item/${menuId}`)
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <ItemContext.Provider
            value={{
                items,
                getItems
            }}
        >
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemProvider