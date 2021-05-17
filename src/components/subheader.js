import React from 'react';
import styled from 'styled-components'

const SubheaderWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 30vh;
    width: 100vw;
    background: #A1E6F5;
    @media (min-width: 1024px) {
        
    }

    h1 {
        position: absolute;
        left: 3vw;
        bottom: 10px;
        color: #343434;
        font-size: 26px;
        text-transform: uppercase;
        @media (min-width: 700px) {
            font-size: 32px;
        }
    }
`

class Subheader extends React.Component {
    render() {
        return(
            <>
                <SubheaderWrapper> <h1>{ this.props.title }</h1> </SubheaderWrapper>
            </>
        )
    }
}

export default Subheader