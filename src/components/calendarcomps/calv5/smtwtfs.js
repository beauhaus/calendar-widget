import React from 'react'

import monthStyles from './smtwtfs.module.scss';

const SMTWTFS = ({gridNum, content}) => {
    console.log("gridnum & content: ", gridNum, "-", content)
    const renderPath = (param) => {
        switch (param) {
            case -6:
                return <path d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />;
                break;
            case -5:
                return <path d="M40.71 0L30 10.71 19.29 0H0v60h60V0z" />;
                break;
            case -4:
                return <path d="M0 0v40h20v20h20V40h20V0z" />;
                break;
            case -3:
                return <path d="M40.71 60L30 49.29 19.29 60H0V0h60v60z" />;
                break;
            case -2:
                return <path d="M0 0v40h20v20h20V40h20V0z" />;
                break;
            case -1:
                return <path d="M0 0v60h20V40h20V20h20V0z" />;
                break;
            case 0:
                return <path d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" />;
                break;
            default:
                break;
        }
    }
    return (
        <svg className={monthStyles.monthContainer} height="80%" viewBox="0 0 60 60" >
            {renderPath(gridNum)}
        </svg>
    )}

export default SMTWTFS;