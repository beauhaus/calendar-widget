import React from 'react'

import styled from 'styled-components'



const StyledCell = styled.svg`
.circ {
    transform: translatey(calc(var(--topMargin) + ${props => props.xInc} * var(--rowIncrement))) translatex(calc(((${props => props.yInc} * var(--colIncrement)) * var(--colWidth)) + var(--Lmargin)));

}
& rect {
    width: var(--colWidth);
height: var(--rowHeight);
transform: translatey(calc(var(--topMargin) + ${props => props.xInc} * var(--rowIncrement))) translatex(calc(((${props => props.yInc} * var(--colIncrement)) * var(--colWidth)) + var(--Lmargin)));

&:nth-of-type(1) {

}
&:nth-of-type(2) {

}
&:nth-of-type(3) {
fill: transparent;
stroke: #fff;
stroke-width: 1.5;
}
}
`
const DayV4 = (props) => {

    return (
        <StyledCell
            sw={props.sw}
            xInc={props.xInc}
            yInc={props.yInc}
        // viewBox="0 0 320 260"
        >
            <rect fill="url(#vertgrad)" />
            <rect fill="url(#horizgrad)" />
            <rect id="topR" stroke="#bbb" strokeWidth="1" />
            {/* <svg width="14%" height="6%">
                <circle cx={"45"} cy={"35"} r="20" stroke="black" stroke-width="4" fill="red" />
                <rect x="0" y="0" height="100%" width="100%" fill="transparent" stroke="yellow" strokeWidth="2" />
            </svg> */}
        </StyledCell>
    )

}

export default DayV4;