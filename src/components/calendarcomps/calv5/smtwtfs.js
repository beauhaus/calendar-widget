import React from 'react'

import monthStyles from './smtwtfs.module.scss';

const SMTWTFS = ({ dayNum }) => {
    // console.log("gridnum & content: ", gridNum, "-", content)
    const renderPath = (param) => {
        switch (param) {
            case 1:
                return <path d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />;
                break;
            case 2:
                return <path d="M60 0v60H0V0l30 30z"/>;
                break;
            case 3:
                return <path d="M60 0v30H45v30H15V30H0V0z"/>;
                break;
            case 4:
                return <path d="M15 60C6.72 60 0 53.28 0 45V0h60v45c0 8.28-6.72 15-15 15s-15-6.72-15-15c0 8.28-6.72 15-15 15z"/>;
                break;
            case 5:
                return <path d="M60 0v30H45v30H15V30H0V0z"/>;
                break;
            case 6:
                return <path d="M0 0v60h20V40h20V20h20V0z" />;
                break;
            case 7:
                return <path d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />;
                break;
            default:
                break;
        }
    }
    return (
        <svg
            // className={monthStyles.dayv5container}
            width="13%"
            viewBox="0 951 514 272"
            preserveAspectRatio="xMidYMid meet"
        >
            <svg className={monthStyles.monthContainer} height="60%" viewBox="0 0 60 60" >
                {renderPath(dayNum)}
            </svg>
        </svg>
    )
}

export default SMTWTFS;