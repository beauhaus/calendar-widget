import React from 'react'

import styled from 'styled-components'

const StyledSMTWTFS = styled.svg`
path {
    filter: url(#innerShad);
    fill: #ddd;
}

`
const SMTWTFS = ({xInc, yInc, cellNum}) => {
        switch (cellNum) {
    case 11:
        return (
            // <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <StyledSMTWTFS width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet"  transform={`translate(${xInc},${yInc})`} >
                    <svg className="smtwtfs" width="100%" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />
                    </svg>
                </StyledSMTWTFS>
            // </StyledSMTWTFS>
        )
        break;
        case 12:
        return (
            <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M40.71 0L30 10.71 19.29 0H0v60h60V0z" />
                    </svg>
                </svg>
            </StyledSMTWTFS>
        )
        break;
        case 13:
        return (
            <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M0 0v40h20v20h20V40h20V0z" />
                    </svg>
                </svg>
            </StyledSMTWTFS>
        )
        break;
        case 14:
        return (
            <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M40.71 60L30 49.29 19.29 60H0V0h60v60z" />
                    </svg>
                </svg>
            </StyledSMTWTFS>
        )
        break;
        case 15:
        return (
            <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M0 0v40h20v20h20V40h20V0z" />
                    </svg>
                </svg>
            </StyledSMTWTFS>
        )
        break;
        case 16:
        return (
            <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M0 0v60h20V40h20V20h20V0z" />
                    </svg>
                </svg>
            </StyledSMTWTFS>
        )
        break;
        case 17:
        return (
            <StyledSMTWTFS  className="months-container-g" transform={`translate(${xInc},${yInc})`} >
                <svg width="13%"  className="months-container-svg" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
                    <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
                      <path  className="months-svg"  d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />
                    </svg>
                </svg>
            </StyledSMTWTFS>
        )
        break;
            default:
                break;
        }
        
    }
       

export default SMTWTFS;

// switch (cellNum) {
//     case 11:
//         return (
//             <g transform={`translate(${xInc},${yInc})`} >
//                 <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
//                     <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
//                       <path d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />
//                     </svg>
//                 </svg>
//             </g>
//         )
//         break;
        // case 12:
        // return (
        //     <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
        //         <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
        //             <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
        //               <path d="M40.71 0L30 10.71 19.29 0H0v60h60V0z" />
        //             </svg>
        //         </svg>
        //     </g>
        // )
        // break;
        // case 13:
        // return (
        //     <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
        //         <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
        //             <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
        //               <path d="M0 0v40h20v20h20V40h20V0z" />
        //             </svg>
        //         </svg>
        //     </g>
        // )
        // break;
        // case 14:
        // return (
        //     <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
        //         <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
        //             <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
        //               <path d="M40.71 60L30 49.29 19.29 60H0V0h60v60z" />
        //             </svg>
        //         </svg>
        //     </g>
        // )
        // break;
        // case 15:
        // return (
        //     <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
        //         <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
        //             <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
        //               <path d="M0 0v40h20v20h20V40h20V0z" />
        //             </svg>
        //         </svg>
        //     </g>
        // )
        // break;
        // case 16:
        // return (
        //     <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
        //         <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
        //             <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
        //               <path d="M0 0v60h20V40h20V20h20V0z" />
        //             </svg>
        //         </svg>
        //     </g>
        // )
        // break;
        // case 17:
        // return (
        //     <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
        //         <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">
        //             <svg className="smtwtfs" height="80%" viewBox="0 0 60 60" >
        //               <path d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />
        //             </svg>
        //         </svg>
        //     </g>
        // )
        // break;
    
//     default:
        
//         return (
//             <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
//                 <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">

                   
//                         <g>
//                             <rect className="shadPanelV" />
//                             <rect className="shadPanelH" />
//                             <rect className="innerframe" />
//                             <circle cx="73%" cy="50%" r="10" fill="gold" />
//                            <text x="3%" y="90%" fill="white" >{`${cellNum}`}</text>
//                         </g>
//                 </svg>
//             </g>
//            )
// }