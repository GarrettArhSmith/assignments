import React, { useState } from 'react'
import axios from 'axios'

export const RestaurantContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function RestaurantProvider(props) {
    const [restaurants, setRestaurants] = useState([])

    function getAllRestaurants() {
        userAxios.get("/api/restaurant")
            .then(res => {
                setRestaurants(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                getAllRestaurants,
            }}
        >
            {props.children}
        </RestaurantContext.Provider>
    )
}

export default RestaurantProvider