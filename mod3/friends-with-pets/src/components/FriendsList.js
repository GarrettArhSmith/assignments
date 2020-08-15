import React from "react"

import Friend from "./Friend"
import friends from "../friends"

function FriendsList() {
    return (
        <div>
            {friends.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets}/>)}
        </div>
    )
}

export default FriendsList