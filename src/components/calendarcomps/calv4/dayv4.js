import React from 'react'

import styled from 'styled-components'



const StyledCell = styled.g`
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
        <StyledCell sw={props.sw} xInc={props.xInc} yInc={props.yInc}>

            <rect fill="url(#vertgrad)" />
            <rect fill="url(#horizgrad)" />
            <rect id="topR" stroke="#bbb" strokeWidth="1" />
        </StyledCell>
    )

}

export default DayV4;