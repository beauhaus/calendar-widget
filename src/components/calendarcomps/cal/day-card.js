import React, {  useEffect, useRef } from 'react'
// import moment from 'moment'
import { gsap ,Power4} from "gsap";

import daycardStyles from './day-card.module.scss';

// let eyeLidRef = useRef(null)
//     let pupilRef = useRef(null)

//     const clickHandler = () => {
//         gsap.set(eyeLidRef, { opacity: 1, y: 0, x: 0 })
//         const tl = gsap.timeline({ defaults: { opacity: 1 } })
//         tl.to(eyeLidRef, { duration: .5, y: -80, x: -80, ease: "power4.inOut" })
//             .to(pupilRef, { duration: 2, r: 30, ease: 'elastic(1,0.3)' }, '-=0.2')
//     }

// import calNavStyles from './calnav.module.scss';

const DayCard = ({dayData: {x,y,id}}) => {
    // console.log(">dC: ",width)
    let cardRef = useRef(null)

    useEffect(() => {
        gsap.set(cardRef, { opacity: 0, y: 0,scaleY:0.5 })
        // gsap.set(listRef, { opacity: 0, y: 60 })

        const tl = gsap.timeline({ defaults: { opacity: 0,scaleY:0.5 } })
        tl.to(cardRef, { duration: 2, y: 0, opacity:1, ease: Power4.easeInOut , delay: 0.2 })
          .to(cardRef, { duration: 4,  scaleY:1,opacity:1, ease: Power4.easeInOut})
    }, [])

    const dayClickHandler = () => {
        console.log("hi")
     }
     const dayMouseInHandler = () => {
        console.log("Welcome!")
     }
    
     const dayMouseOutHandler = () => {
      
        console.log("bye!")
     }
    
    return (
        <g className={daycardStyles.container}>
        <use
        className={daycardStyles.useSquare}
        onClick={dayClickHandler}
        onMouseLeave={dayMouseOutHandler}
        onMouseEnter={dayMouseInHandler}
        className="card"
        ref={elem => cardRef = elem}
        xlinkHref="#rect-temp"
        x={x}
        y={y}
        width='108'
        height='75'
        filter="url(#scrblend)"
        />       
        <text x={x+10} y={y+20}>{id}</text>
        </g>
    );
}
export default DayCard;