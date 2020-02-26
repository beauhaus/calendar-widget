import React from 'react'
import moment from 'moment'

import SMTWTFS from './smtwtfs'

import dayv5Styles from './dayv5.module.scss';
import EvtSlots from './evtslots';





const DayV5 = ({gridArray}) => {

    return (
        <g>

            {gridArray.map((elem, idx) => {
                let xShift = Math.floor(idx % 7);
                let yShift = Math.floor(idx / 7);

                let xBase = 45;
                let xInc = (xShift * 130) + xBase;

                let yBase = 25;
                let yInc = (yShift * 69) + yBase;
                
                let dayNum = moment(elem.thisDayDate).format("D");
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
                                <text className={dayv5Styles.gridNum} x="3%" y="90%" >{`${dayNum}`}</text>

                            </svg>
                            }
                    </g>
                )
            })}
        </g>
    )
}




export default DayV5;


/* Desktop



const DayV5 = ({gridArray}) => {

    return (
        <g>

            {gridArray.map((elem, idx) => {
                let xShift = Math.floor(idx % 7);
                let yShift = Math.floor(idx / 7);

                let xBase = 45;
                let xInc = (xShift * 130) + xBase;

                let yBase = 25;
                let yInc = (yShift * 69) + yBase;
                
                let dayNum = moment(elem.thisDayDate).format("D");
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
                                <text className={dayv5Styles.gridNum} x="3%" y="90%" >{`${dayNum}`}</text>

                            </svg>
                            }
                    </g>
                )
            })}
        </g>
    )
}




*/