import React from 'react';
import './Main.css'

import SavedList from './Saved/SavedList'
import Focused from './Focused/Focused'

function Main(props) {
    return (
        <main>
            <SavedList />
            <Focused />
        </main>
    );
}

export default Main;