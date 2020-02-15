import React from 'react'
import styled from 'styled-components'
import SMTWTFS from './smtwtfs'

const StyledCell = styled.g`
rect {
    width: 100%;
    height: 100%;
}
.smtwtfs {
    filter: url(#innerShad);
    fill: #ddd;
}

.innerframe {
    stroke: #ccc;
    stroke-width: 6;
    fill: transparent;
    &:hover {
        stroke: #fff;
        stroke-width: 8;
    }
   }
    .shadPanelV {
        // fill: blue;
        fill: url(#vertgrad);
    }
    .shadPanelH {
        fill: url(#horizgrad);
    }
   text {
    font-weight: 100;
    font-size: 60px;
      fill: #fff;
      filter: url(#txtShad);
   }

`
const CellDefs = () => (
    <defs>
        <filter id="txtShad">
            <feDropShadow dx="-10" dy="10" stdDeviation="3" />
        </filter>
        <filter id="innerShad">
            <feOffset dy="4" dx="-6" />
            <feGaussianBlur stdDeviation="3" result="offset-blur" />
            <feComposite
                operator="out"
                in2="offset-blur"
                in="SourceGraphic"
                result="inverse"
            />
            <feFlood result="color" floodColor="#000" floodOpacity="1" />
            <feComposite operator="in" in2="inverse" in="color" result="shadow" />
            <feComposite in2="SourceGraphic" in="shadow" />
        </filter>
        <linearGradient id="horizgrad" x1="0%" x2="100%" y1="50%" y2="50%" >
            <stop offset="96%" stopOpacity="0" />
            <stop offset="1" />
        </linearGradient>
        <linearGradient id="vertgrad" x1="50%" x2="50%" y1="98%" y2="3%" >
            <stop offset="96%" stopOpacity="0" />
            <stop offset="1" />
        </linearGradient>
    </defs>
)

const DayV5 = (props) => {
    console.log("p>dV5: ", props)
    const dayGrid = [...new Array(49)]

    return (
        <StyledCell>
            <CellDefs />
            {dayGrid.map((elem, idx) => {
                let xShift = Math.floor(idx % 7);
                let yShift = Math.floor(idx / 7);
                let cellNum = Number(`${yShift + 1}${xShift + 1}`);

                let xBase = 45;
                let xInc = (xShift * 130) + xBase;

                let yBase = 25;
                let yInc = (yShift * 69) + yBase;


                return (
                    cellNum <= 17 ?
                        <SMTWTFS key={cellNum} cellNum={cellNum} xInc={xInc} yInc={yInc} />
                        :
                        <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
                            <svg width="13%" viewBox="0 951 514 272" preserveAspectRatio="xMidYMid meet">

                                    <svg y="0%" width="100%" height="20%" preserveAspectRatio="none">
                                        <rect fill="#94C1B7" />
                                    </svg>
                                    <svg y="20%" width="100%" height="20%" preserveAspectRatio="none">
                                        <rect fill="#C19494" />
                                    </svg>
                                    <svg y="40%" width="100%" height="20%" preserveAspectRatio="none">
                                        <rect fill="#9498C2" />
                                    </svg>

                                    <svg y="60%" width="100%" height="20%" preserveAspectRatio="none">
                                        <rect fill="#E3B464" />
                                    </svg>
                                    <svg y="80%" width="100%" height="20%" preserveAspectRatio="none">
                                        <rect fill="#C4B594" />
                                    </svg>

                                    <rect className="shadPanelV" />
                                    <rect className="shadPanelH" />
                                    <rect className="innerframe" />
                                    {/* <circle cx="73%" cy="50%" r="10" fill="gold" /> */}
                                    {/* <line x1="0" y1="66%" x2="100%" y2="66%" stroke="yellow" strokeWidth="300"/> */}
                                    <text x="3%" y="90%" fill="white" >{`${cellNum}`}</text>
                            </svg>
                        </g>
                )
            })}
        </StyledCell>
    )

}

export default DayV5;

/*
<rect width="513" height="99" x=".5" y=".5" fill="#f7931e"/>
  <g>
    <rect width="513" height="99" x=".5" y="108.5" fill="#ff7bac"/>
  </g>
  */