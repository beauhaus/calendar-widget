import React from 'react'
// import styled from 'styled-components'
import SMTWTFS from './smtwtfs'

import dayv5Styles from './dayv5.module.scss';

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
    // console.log("p>dV5: ", props)
    const dayGrid = [...new Array(49)]

    return (
        <g>
            <CellDefs />

            {dayGrid.map((elem, idx) => {
                let xShift = Math.floor(idx % 7);
                let yShift = Math.floor(idx / 7);
                let cellNum = Number(`${yShift + 1}${xShift + 1}`);

                let xBase = 45;
                let xInc = (xShift * 130) + xBase;

                let yBase = 25;
                let yInc = (yShift * 69) + yBase;

                let twentyFourHours =  [...new Array(24)]

                return (
                        <g key={cellNum} transform={`translate(${xInc},${yInc})`} >
                            <svg
                            className={dayv5Styles.dayv5container}
                             xmlns="http://www.w3.org/2000/svg"
                             width="13%" 
                             viewBox="0 951 514 272" 
                             preserveAspectRatio="xMidYMid meet"
                             >
                                {cellNum< 18? 
                                <SMTWTFS 
                                key={cellNum} 
                                cellNum={cellNum} 
                                yInc={yInc} 
                                xInc={xInc}/>
                                :
                                twentyFourHours.map((elem, idx) => {
                                    let ySlotInc = 4 * idx;  // TODO: 4.16++ ?
                                    return (
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        key={idx}
                                        className={`slot-${idx}`}
                                        y={`${ySlotInc}%`} 
                                        width="100%"
                                        height="8%"
                                        viewBox="00 0 100 100" 
                                        preserveAspectRatio="none" >
                                            <rect width="100%" fill="#C4B594" />
                                        </svg>
                                    )
                                })
                            }
                            <rect className={dayv5Styles.shadPanelV}  />
                            <rect className={dayv5Styles.shadPanelH}  />
                            <rect className={dayv5Styles.innerFrame}  />
                            <text className={dayv5Styles.gridNum}  x="3%" y="90%" >{`${cellNum}`}</text>
                            </svg>
                        </g>
                )
            })}
        </g>
    )

}

export default DayV5;
