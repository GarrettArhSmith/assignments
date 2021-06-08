import React from 'react';
import styled from 'styled-components'
// import { Context } from '../../Context'

import SavedList from './Saved/SavedList'
import Focused from './Focused/Focused'

const MainContent = styled.main`
    ${'' /* height: 80vh; */}
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        height: 90vh;
        grid-template-columns: 2fr 5fr;
    }
    @media(min-width: 1024px) {
        grid-template-columns: 1fr 3fr;
    }
    @media(min-width: 1200px) {
    }
`

function Main(props) {
    // const {saved} = useContext(Context)

    return (
        <MainContent>
            <SavedList />
            <Focused />
        </MainContent>
    );
}

export default Main;