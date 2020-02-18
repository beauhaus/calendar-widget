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


    /* Landscape */

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
@media only screen 
    and (min-width: 320px) 
    and (max-width: 568px)
    and (orientation: landscape) {
        .msg::after {
            content: 'landscape 5SE';
            color: maroon;
        }
    
}    



/*  Landscape pixel XL and iPhoneX */
@media only screen 
  and (min-width: 812px) 
  and (max-width: 824px) 
  and (orientation: landscape) { 
    .msg::after {
        content: 'Pix/iPhX landscape';
        color: maroon;
    }
}


/*  Landscape  iPhoneX */
@media only screen 
and (min-device-width: 375px) 
and (max-device-width: 812px) 
and (-webkit-min-device-pixel-ratio: 3)
and (orientation: landscape) { 
    .msg::after {
        content: 'iPhX landscape';
        color: maroon;
    }
}
/* ----------- iPad 1, 2, Mini and Air ----------- */

/* Portrait and Landscape */
@media only screen 
and (min-width: 768px) 
and (max-width: 1024px) {
    .msg::after {
        content: 'iPad1,2,Mini & Air';
        color: maroon;
    }
}


/******generic TAB******/
// @media only screen 
//   and (min-width: 668px) 
//   and (max-width: 1366px) {
//     .msg::after {
//         content: 'TABLET';
//         color: maroon;
//     }
// }

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