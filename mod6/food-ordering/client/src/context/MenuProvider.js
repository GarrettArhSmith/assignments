import React, { useState } from 'react'
import axios from 'axios'

export const MenuContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function MenuProvider(props) {
    const [menus, setMenus] = useState([])

    function getMenus(restaurantId) {
        userAxios.get(`/api/menu/${restaurantId}`)
            .then(res => {
                setMenus(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <MenuContext.Provider
            value={{
                menus,
                getMenus
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuProvider