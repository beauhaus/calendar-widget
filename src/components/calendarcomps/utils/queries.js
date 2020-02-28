import React from 'react'

import styled from 'styled-components'



const StyledQueries = styled.div`
opacity: 0.3;
text-align: center;
position: absolute;
top: 0;
left: 30%;
h1 {
    font-size: 5vw;
    margin: 2vh auto;
    background: rgba(255,255,255,1);
    color: #000;
    font-family: sans-serif;
}
    .msg::after {
        content: 'phone portrait';
    }

    /*  Phone Portrait  */
    @media only screen // and (max-device-width: 414px)
    and (min-width: 320px) and (orientation: portrait) {
      .msg::after {
        content: '☎️ Portrait';
        color: maroon;
      }
    }
  
    /*  Phone Landscape  */
    @media only screen and (max-device-width: 812px) and (orientation: landscape) {
      .msg::after {
        content: '☎️ Landscape';
        color: maroon;
      }
    }
  
  
    /* ----------- iPad/Mini portrait ----------- */
    @media only screen and (min-width: 768px) and (orientation: portrait) {
      .msg::after {
        content: 'tablet';
      }
    }
  
  
    /******DESK and tablet landscape******/
    @media only screen and (min-width: 1024px) {
      .msg::after {
        content: 'DESKTOP';
      }
  
  
  
`
const Queries = () => {

    return (
        <StyledQueries className="msg-container">
            <h1 className="msg"></h1>            
        </StyledQueries>
    )

}

export default Queries;