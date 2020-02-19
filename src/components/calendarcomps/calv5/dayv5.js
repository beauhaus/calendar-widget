import React from 'react'

import SMTWTFS from './smtwtfs'


import dayv5Styles from './dayv5.module.scss';
import EvtSlots from './evtslots';
import { calendarUtils, filledArray } from '../utils/date-utils'

// filledArray("2020-08-22")
// var currentMonthArray = calendarUtils("currentMonthArray")

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
    var selectedDate = "2020-08-22";
    const gridArray = filledArray(selectedDate)

    // console.log("gArr: ", gridArray)
    return (
        <g>
            <CellDefs />

            {gridArray.map((elem, idx) => {
                let xShift = Math.floor(idx % 7);
                let yShift = Math.floor(idx / 7);


                let xBase = 45;
                let xInc = (xShift * 130) + xBase;

                let yBase = 25;
                let yInc = (yShift * 69) + yBase;

                return (
                    <g key={idx} transform={`translate(${xInc},${yInc})`} >
                        {(elem.desc === "dayIcon") &&
                            <SMTWTFS
                                content={elem.desc}
                                key={idx}
                                dayNum={idx+1}
                            />}
                            
                            {(elem.desc === "days") &&
                            <svg
                                className={dayv5Styles.dayv5container}
                                width="13%"
                                viewBox="0 951 514 272"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                {elem.content !== undefined &&
                                elem.content.events.map((elem, idx) => {
                                    let ySlotInc = 5 * idx; //this num was 4
                                    return (
                                        <EvtSlots key={idx} fill={elem} ySlotInc={ySlotInc} />
                                    )
                                })
                            }
                                <rect className={dayv5Styles.shadPanelV} />
                                <rect className={dayv5Styles.shadPanelH} />
                                <rect className={dayv5Styles.innerFrame} />
                                <text className={dayv5Styles.gridNum} x="3%" y="90%" >{`${elem.dayNum}`}</text>

                            </svg>
                            }
                    </g>
                )
            })}
        </g>
    )
}


export default DayV5;
