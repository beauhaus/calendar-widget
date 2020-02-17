import React from 'react'

import styled from 'styled-components'

const StyledSMTWTFS = styled.svg`


`
const SMTWTFS = ({xInc, yInc, cellNum}) => {
    console.log("x/y inc: ", xInc, yInc);
        switch (cellNum) {
    case 11:
        return (
                <StyledSMTWTFS width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet"  >
                    <svg  width="100%" height="80%" viewBox="0 0 60 60" >
                      <path filter="url(#innerShad)" fill="#ddd" d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />
                    </svg>
                    
                </StyledSMTWTFS>
        )
        break;
        case 12:
        return (
            <StyledSMTWTFS width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet"  >
                
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  transform={`translate(${xInc},${yInc})`}  className="months-svg" filter="(#innerShad)"  d="M40.71 0L30 10.71 19.29 0H0v60h60V0z" />
                </svg>

            </StyledSMTWTFS>
        )
        break;
        case 13:
        return ( <description>desc</description>
            // <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
            //     <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
            //         <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
            //           <path  className="months-svg" filter="(#innerShad)"  d="M0 0v40h20v20h20V40h20V0z" />
            //         </svg>
            //     </svg>
            // </StyledSMTWTFS>
        )
        break;
        case 14:
        return ( <description>desc</description>
            // <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
            //     <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
            //         <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
            //           <path  className="months-svg" filter="url(#innerShad)" d="M40.71 60L30 49.29 19.29 60H0V0h60v60z" />
            //         </svg>
            //     </svg>
            // </StyledSMTWTFS>
        )
        break;
        case 15:
        return ( <description>desc</description>
            // <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
            //     <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
            //         <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
            //           <path  className="months-svg" filter="url(#innerShad)" d="M0 0v40h20v20h20V40h20V0z" />
            //         </svg>
            //     </svg>
            // </StyledSMTWTFS>
        )
        break;
        case 16:
        return ( <description>desc</description>
            // <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
            //     <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
            //         <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
            //           <path  className="months-svg" filter="url(#innerShad)" d="M0 0v60h20V40h20V20h20V0z" />
            //         </svg>
            //     </svg>
            // </StyledSMTWTFS>
        )
        break;
        case 17:
        return ( <description>desc</description>
            // <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
            //     <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
            //         <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
            //           <path  className="months-svg" filter="url(#innerShad)" d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />
            //         </svg>
            //     </svg>
            // </StyledSMTWTFS>
        )
        break;
            default:
                break;
        }
        
    }
       

export default SMTWTFS;
