import React from 'react'
import moment from 'moment'
import yearStyles from './yeardisplay.module.scss';

const YearDisplay = ({ selectedDate }) => {
    // console.log("p> MonthDis: ", props)
    let dayNum = moment(selectedDate).format("YYYY");
    console.log("year: ", dayNum)
    const renderPath = (param) => {
        switch (param) {
            case "2020":
                return (
                    <g>
                        <path className={yearStyles.ones} d="M35 29.96c0-4.52.61-8.62 1.84-12.31 1.22-3.69 2.95-6.84 5.16-9.45 2.22-2.61 4.85-4.63 7.9-6.06C52.96.71 56.33 0 60.04 0c3.65 0 7.02.71 10.09 2.14 3.08 1.43 5.71 3.45 7.9 6.06 2.19 2.61 3.9 5.76 5.13 9.45C84.39 21.34 85 25.44 85 29.96c0 4.52-.61 8.62-1.84 12.31-1.23 3.69-2.93 6.85-5.13 9.49-2.19 2.64-4.82 4.67-7.9 6.1C67.05 59.28 63.69 60 60.04 60c-3.7 0-7.08-.72-10.13-2.15-3.05-1.43-5.69-3.46-7.9-6.1-2.22-2.64-3.94-5.8-5.16-9.49-1.24-3.68-1.85-7.78-1.85-12.3zm15.18 0c0 2.51.24 4.79.7 6.85.47 2.06 1.13 3.84 2 5.34.86 1.51 1.89 2.67 3.09 3.5 1.2.83 2.56 1.24 4.07 1.24 1.46 0 2.8-.41 4.03-1.24 1.22-.83 2.26-1.99 3.09-3.5.83-1.5 1.49-3.29 1.96-5.34.47-2.06.7-4.34.7-6.85 0-2.46-.23-4.73-.7-6.81-.47-2.08-1.12-3.86-1.96-5.34-.83-1.48-1.87-2.64-3.09-3.46-1.23-.83-2.57-1.24-4.03-1.24-1.51 0-2.87.41-4.07 1.24-1.2.83-2.23 1.98-3.09 3.46-.86 1.48-1.53 3.26-2 5.34s-.7 4.35-.7 6.81z" />
                        <path className={yearStyles.tens} d="M60 60H10l15.4-15.04c4.06-3.98 7.25-7.35 9.56-10.12 2.31-2.76 4.02-5.1 5.15-7.02 1.12-1.91 1.83-3.46 2.1-4.65.27-1.19.41-2.2.41-3.02 0-.88-.15-1.73-.45-2.56-.3-.83-.76-1.56-1.36-2.21-.6-.65-1.33-1.16-2.18-1.55-.85-.39-1.85-.58-3.01-.58-2.2 0-3.91.67-5.15 2.02-1.23 1.34-1.85 3.02-1.85 5.04 0 .57.08 1.4.25 2.48H11.23c0-3.41.59-6.51 1.77-9.3 1.18-2.79 2.84-5.19 4.98-7.21s4.68-3.57 7.62-4.65C28.55.54 31.77 0 35.29 0c3.46 0 6.66.52 9.6 1.55 2.94 1.03 5.48 2.48 7.62 4.34 2.14 1.86 3.82 4.07 5.03 6.63 1.21 2.56 1.81 5.34 1.81 8.33 0 3.21-.73 6.16-2.18 8.88-1.46 2.71-3.78 5.49-6.96 8.33l-10.3 9.07H60V60z" />
                    </g>
                )
                break;
            case "2021":
                return (
                    <g>
                        <path className={yearStyles.ones} d="M55.76 13.21H46V0h27.16v60h-17.4V13.21z"/>
                        <path className={yearStyles.tens} d="M60 60H10l15.4-15.04c4.06-3.98 7.25-7.35 9.56-10.12 2.31-2.76 4.02-5.1 5.15-7.02 1.12-1.91 1.83-3.46 2.1-4.65.27-1.19.41-2.2.41-3.02 0-.88-.15-1.73-.45-2.56-.3-.83-.76-1.56-1.36-2.21-.6-.65-1.33-1.16-2.18-1.55-.85-.39-1.85-.58-3.01-.58-2.2 0-3.91.67-5.15 2.02-1.23 1.34-1.85 3.02-1.85 5.04 0 .57.08 1.4.25 2.48H11.23c0-3.41.59-6.51 1.77-9.3 1.18-2.79 2.84-5.19 4.98-7.21s4.68-3.57 7.62-4.65C28.55.54 31.77 0 35.29 0c3.46 0 6.66.52 9.6 1.55 2.94 1.03 5.48 2.48 7.62 4.34 2.14 1.86 3.82 4.07 5.03 6.63 1.21 2.56 1.81 5.34 1.81 8.33 0 3.21-.73 6.16-2.18 8.88-1.46 2.71-3.78 5.49-6.96 8.33l-10.3 9.07H60V60z" />
                    </g>
                )
                break;
            default:
                break;
        }
    }
    return (
        <g transform="translate(802 0)" className={yearStyles.yearContainer}>
            <svg
                viewBox="0 0 85 60"
                width="15%"
                height="67.25%"
                preserveAspectRatio="xMaxYMax meet"
            >
                
                <path className={yearStyles.apostrophe} d="M-.07 23.35L15 7.26 2.86 1.5z" />
                {renderPath(dayNum)}
            </svg>
        </g>
    )
}



export default YearDisplay;