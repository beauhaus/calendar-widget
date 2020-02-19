import React from 'react'

const EvtSlots = ({idx,ySlotInc, fill}) => {

    return (
        <svg
        key={idx}
        className={`slot-${idx}`}
        y={`${ySlotInc}%`} 
        width="100%"
        height="8%"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
         >
            <rect width="100%" fill={fill} />
        </svg>
    )

}
const evtsPayload = [
    {
        "fullDate": "2020-02-08",
        "events": [{ "1": "red" }, { "4": "white" }, { "7": "green" }, { "13": "purple" }, { "16": "coral" }, { "20": "brown" }, { "21": "lemonchiffon" }]
    },
    {
        "fullDate": "2020-02-12",
        "events": [{ "8": "red" },  { "10": "purple" }, { "19": "coral" }, { "22": "violet" }]
    },
    {
        "fullDate": "2020-02-20",
        "events": [{ "4": "yellow" },  { "8": "blue" }, { "11": "skyblue" }, { "16": "orangered" }]
    }
]

export default EvtSlots;