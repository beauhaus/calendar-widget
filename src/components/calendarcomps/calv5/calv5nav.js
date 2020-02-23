import React from 'react'

import navStyles from './calv5nav.module.scss'

const CalV5Nav = ({ decMonth, incMonth }) => {
    return (
        <g className={navStyles.navContainer}>
            <g className={navStyles.arrowLt} onClick={decMonth}>
                <svg width="3%" viewBox="0 0 100 75">
                    <polygon points="10,50 70,100 70,0" />
                    <polygon fill="#af3708" points="20,50 80,100 80,0" />
                </svg>
            </g>
            <g className={navStyles.arrowRt} onClick={incMonth}>
                <svg width="3%" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet">
                    <polygon points="70,50 10,100 10,0" />
                    <polygon fill="#af3708" points="60,50 0,100 0,0" />
                </svg>
            </g>
        </g>
    )
}

export default CalV5Nav;