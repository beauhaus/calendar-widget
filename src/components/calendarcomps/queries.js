import React from 'react'

import styled from 'styled-components'



const StyledQueries = styled.div`
opacity: 0.3;
text-align: center;
h1 {
    margin: 2vh auto;
    background: rgba(255,255,255,1);
    color: #000;
    font-family: sans-serif;
}
    .msg::after {
        content: 'phone portrait';
    }


    /* Landscape */

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
@media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (orientation: landscape) {
        .msg::after {
            content: 'landscape 5SE';
            color: maroon;
        }
    
}    


/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

// @media only screen 
//   and (min-device-width: 375px) 
//   and (max-device-width: 667px) 
//   and (orientation: landscape) { 
//     .msg::after {
//         content: 'landscape 6/7/8';
//         color: blue;
//     }
// }

/******TAB******/
@media only screen 
  and (min-width: 668px) 
  and (max-width: 1366px) {
    .msg::after {
        content: 'TABLET';
        color: maroon;
    }
}

/******DESK******/
@media only screen and (min-width: 1366px)   {
    .msg::after {
        content: 'DESKTOP';
        color: #000;
    }
    
} 

`
const Queries = () => {

    return (
        <StyledQueries className="queries">
            <h1 className="msg"></h1>            
        </StyledQueries>
    )

}

export default Queries;