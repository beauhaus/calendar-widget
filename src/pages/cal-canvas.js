import React from 'react'

import canvasStyles from './cal-canvas.module.scss'
// import DayPane from './day-pane'
// import CalGrid from './cal-grid'
import DayCard from '../components/calendarcomps/cal/day-card'

// import Singleday from '../components/calendarcomps/singleday'
import BHFont from '../components/calendarcomps/cal/bh-font'

const CalCanvas = () => {
    // x spacing 108+24

    const dayData = [

        {
            id: '001',
            x: 50,
            y: 135
        },
        {
            id: '002',

            x: 182,
            y: 135
        },
        {
            id: '003',

            x: 314,
            y: 135
        },
        {
            id: '004',

            x: 446,
            y: 135
        },
        {
            id: '005',

            x: 578,
            y: 135
        },
        {
            id: '006',

            x: 710,
            y: 135
        },
        {
            id: '007',

            x: 842,
            y: 135
        },
        {
            id: '008',

            x: 50,
            y: 220
        },
        {
            id: '009',
            x: 182,
            y: 220
        },
        {
            id: '010',
            x: 314,
            y: 220
        },
        {
            id: '011',
            x: 446,
            y: 220
        },
        {
            id: '012',
            x: 578,
            y: 220
        },
        {
            id: '013',
            x: 710,
            y: 220
        },
        {
            id: '014',
            x: 842,
            y: 220
        },

        {
            id: '015',
            x: 50,
            y: 305
        },
        {
            id: '016',
            x: 182,
            y: 305
        },
        {
            id: '017',
            x: 314,
            y: 305
        },
        {
            id: '018',
            x: 446,
            y: 305
        },
        {
            id: '019',
            x: 578,
            y: 305
        },
        {
            id: '020',
            x: 710,
            y: 305
        },
        {
            id: '021',
            x: 842,
            y: 305
        },
        {
            id: '022',
            x: 50,
            y: 390
        },
        {
            id: '023',
            x: 182,
            y: 390
        },
        {
            id: '024',
            x: 314,
            y: 390
        },
        {
            id: '025',
            x: 446,
            y: 390
        },
        {
            id: '026',
            x: 578,
            y: 390
        },
        {
            id: '027',
            x: 710,
            y: 390
        },
        {
            id: '028',
            x: 842,
            y: 390
        },
        {
            id: '029',
            x: 50,
            y: 475
        },
        {
            id: '030',
            x: 182,
            y: 475
        },
        {
            id: '031',
            x: 314,
            y: 475
        },
        {
            id: '032',
            x: 446,
            y: 475
        },
        {
            id: '033',
            x: 578,
            y: 475
        },
        {
            id: '034',
            x: 710,
            y: 475
        },
        {
            id: '035',
            x: 842,
            y: 475
        },
        {
            id: '036',
            x: 50,
            y: 560
        },
        {
            id: '037',
            x: 182,
            y: 560
        },
        {
            id: '038',
            x: 314,
            y: 560
        },
        {
            id: '039',
            x: 446,
            y: 560
        },
        {
            id: '040',
            x: 578,
            y: 560
        },
        {
            id: '041',
            x: 710,
            y: 560
        },
        {
            id: '042',
            x: 842,
            y: 560
        },
    ]

    return (
        <div className={canvasStyles.container}>
            <main className={canvasStyles.canvas}>

            <svg  
            
            viewBox="0 0 1000 700"
            // width="100%"
            height="100%"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                >

                <radialGradient id="grad" cx="600" cy="326" r="511.5339" fx="546.8114" fy="626.757"
                    gradientTransform="matrix(.5788 .8155 -1.1786 .8365 636.9384 -435.9837)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f6eae0"/>
                    <stop offset="1"  stopColor="#eed3be" />
                    {/* <stop offset=".3974" stopColor="#e4bda1" /> */}
                </radialGradient>
                <defs>
                    <filter id='roughpaper'>
                        <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
                        <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='.5' result='light'>
                            <feDistantLight azimuth='50' elevation='50' />
                        </feDiffuseLighting>
                        <feBlend in="SourceGraphic" mode="multiply" />
                    </filter>
                    <filter id='scrblend'>
                        <feBlend in="SourceGraphic" mode="screen" />
                    </filter>
                    <filter id="innerShad">
                        <feOffset dy="8" dx="8" />
                        <feGaussianBlur stdDeviation="4" result="offset-blur" />
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
                    <symbol id="rect-temp">
                        <rect x="0" y="0" width="100%" height="100%" shapeRendering="crispEdges" />
                    </symbol>
                </defs>
               
                <use xlinkHref="#rect-temp" filter="url(#roughpaper)" />
                {dayData.map(day => <DayCard key={day.id} dayData={day} />)}
                <BHFont fontReq={"E"} />
                {/* <rect x="50" y="50" width="108" height="75" shapeRendering="crispEdges" /> */}
            </svg>


        
            </main>

        </div>

    )
}

export default CalCanvas;

/*

 <svg className={canvasStyles.canvasWrap}
                viewBox="0 0 600 350"
                preserveAspectRatio="none"
            >
                <defs>
                    <radialGradient
                        id="canvas-grad"
                        cx="600"
                        cy="325"
                        r="400"
                        fx="597.1232"
                        fy="336.4344"
                        gradientTransform="matrix(.3063 .3553 -1.1728 .8941 617.4006 -442.7319)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#f3ceb4" />
                        <stop offset=".5" stopColor="#f3d1b7" />
                        <stop offset="2" stopColor="#e6c7b1" />

                    </radialGradient>
                    <filter id="grain" >
                        <feTurbulence
                            type="turbulence"
                            numOctaves="1"
                            baseFrequency="1.52"
                        />
                        </filter>
                        </defs>

                        <rect
                            className={canvasStyles.calCanvas}
                            fill="url(#canvas-grad)"
                            x="0"
                            y="0"
                            width="100%"
                        />
                    </svg>



 <rect  x="840" y="132" width="100" height="70"/>
    <rect  x="840" y="212" width="100" height="70"/>
    <rect  x="840" y="292" width="100" height="70"/>
    <rect  x="840" y="372" width="100" height="70"/>
    <rect  x="840" y="452" width="100" height="70"/>
    <rect  x="840" y="532" width="100" height="70"/>
    <rect  x="710" y="141" width="100" height="70"/>
    <rect  x="710" y="221" width="100" height="70"/>
    <rect  x="710" y="301" width="100" height="70"/>
    <rect  x="710" y="381" width="100" height="70"/>
    <rect  x="710" y="461" width="100" height="70"/>
    <rect  x="710" y="541" width="100" height="70"/>
    <rect  x="580" y="150" width="100" height="70"/>
    <rect  x="580" y="230" width="100" height="70"/>
    <rect  x="580" y="310" width="100" height="70"/>
    <rect  x="580" y="390" width="100" height="70"/>
    <rect  x="580" y="470" width="100" height="70"/>
    <rect  x="580" y="550" width="100" height="70"/>
    <rect  x="450" y="159" width="100" height="70"/>
    <rect  x="450" y="239" width="100" height="70"/>
    <rect  x="450" y="319" width="100" height="70"/>
    <rect  x="450" y="399" width="100" height="70"/>
    <rect  x="450" y="479" width="100" height="70"/>
    <rect  x="450" y="559" width="100" height="70"/>
    <rect  x="320" y="168" width="100" height="70"/>
    <rect  x="320" y="248" width="100" height="70"/>
    <rect  x="320" y="328" width="100" height="70"/>
    <rect  x="320" y="408" width="100" height="70"/>
    <rect  x="320" y="488" width="100" height="70"/>
    <rect  x="320" y="568" width="100" height="70"/>
    <rect  x="190" y="177" width="100" height="70"/>
    <rect  x="190" y="257" width="100" height="70"/>
    <rect  x="190" y="337" width="100" height="70"/>
    <rect  x="190" y="417" width="100" height="70"/>
    <rect  x="190" y="497" width="100" height="70"/>
    <rect  x="190" y="577" width="100" height="70"/>
    <rect  x="60" y="186" width="100" height="70"/>
    <rect  x="60" y="266" width="100" height="70"/>
    <rect  x="60" y="346" width="100" height="70"/>
    <rect  x="60" y="426" width="100" height="70"/>
    <rect  x="60" y="506" width="100" height="70"/>
    <rect  x="60" y="586" width="100" height="70"/>
    <line  x1="990" y1="10" x2="938" y2="62"/>
    <line  x1="938" y1="10" x2="990" y2="62"/>
                    */