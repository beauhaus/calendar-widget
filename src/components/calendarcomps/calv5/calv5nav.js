import React from 'react'

// import styled from 'styled-components'

import navStyles from './calv5nav.module.scss'

const CalV5Nav = ({ decMonth, incMonth,selectedDate }) => {
console.log("selectedDate: ", selectedDate)
            return (
        <g className={navStyles.navContainer}>
            <g className={navStyles.arrowLt} onClick={decMonth}>
                <svg width="3%" viewBox="0 0 50 100">
                <polygon fill="transparent" points="0,50 50,0 50,100"/>
  <path fill="#555" d="M50 0v100L0 50 50 0zm-6 14L8 50l36 36V14z"/>
                </svg>
            </g>
            <g className={navStyles.arrowRt} onClick={incMonth}>
                <svg width="3%" viewBox="0 0 50 100" preserveAspectRatio="xMidYMid meet">
                <polygon fill="transparent" points="50,50 0,0 0,100"/>
  <path fill="#555" d="M0 0v100l50-50L0 0zm6 14l36 36L6 86V14z"/>
                </svg>
            </g>
        </g>
    )

}

export default CalV5Nav;