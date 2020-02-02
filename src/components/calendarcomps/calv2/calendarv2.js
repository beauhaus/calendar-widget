import React from 'react'


import calStyles from './calendarv2.module.scss';

const CalendarV2 = () => {
const dayTile = {
    id: "100",
    x: "",
    y: "",
    width: "",
    height: ""
}
    return (
        <div className={calStyles.container}>

            <svg id="thisSVG" width="100%" viewBox="0 0 800 520"
            preserveAspectRatio="none"
            >

                <filter id='roughpaper'>
                        <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
                        <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1.2' result='light'>
                            <feDistantLight azimuth='50' elevation='70' />
                        </feDiffuseLighting>
                        <feBlend in="SourceGraphic" mode="multiply" />
                    </filter>
                <filter id="innerShadShort">
                    <feOffset dy="3" dx="-3" />
                    <feGaussianBlur stdDeviation="1" result="offset-blur" />
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
                <filter id="innerShad">
                    <feOffset dy="4" dx="-4" />
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

                <rect className={calStyles.bg} width="100%" stroke-width="2" stroke="#232"/>

                <g className={calStyles.smtwtf}>
                    <polygon points="199.86,36 192,43.86 184.14,36 170,36 170,80 214,80 214,36" />
                    <polygon points="273.99,35.77 273.99,65.11 288.65,65.11 288.65,79.77 303.32,79.77 303.32,65.11 317.99,65.11 317.99,35.77" />
                    <polygon points="407.86,80 400,72.14 392.14,80 378,80 378,36 422,36 422,80" />
                    <polygon points="481.99,35.77 481.99,65.11 496.65,65.11 496.65,79.77 511.32,79.77 511.32,65.11 525.99,65.11 525.99,35.77" />
                    <polygon points="585.49,35.77 585.49,79.77 600.15,79.77 600.15,65.11 614.82,65.11 614.82,50.44 629.49,50.44 629.49,35.77" />
                    <path d="M110 58H99c14.39.07 14.39 21.94 0 22H66V58h11c-14.39-.07-14.39-21.94 0-22h33v22z" />
                    <path d="M734 58h-11c14.39.07 14.39 21.94 0 22h-33V58h11c-14.39-.07-14.39-21.94 0-22h33v22z" />
                </g>


            

                {/* <rect className={calStyles.cellsBg} x="36" y="95" width="728" height="390" shapeRendering="crispEdges"/> */}

                <g className={calStyles.days} >
                    {/* ROW1  */}
                    <rect className={calStyles.cell} x="36" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="36" y="95" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cell} x="140" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="140" y="95" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cell} x="244" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="244" y="95" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cell} x="348" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="348" y="95" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cell} x="452" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="452" y="95" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cell} x="556" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="556" y="95" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cell} x="660" y="95" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="660" y="95" width="104" height="65" shapeRendering="crispEdges" />

                    {/* ROW2  */}
                    <rect className={calStyles.cell} x="36" y="160" width="104" height="65" />
                    <rect className={calStyles.cell} x="140" y="160" width="104" height="65" />
                    <rect className={calStyles.cell} x="244" y="160" width="104" height="65" />
                    <rect className={calStyles.cell} x="348" y="160" width="104" height="65" />
                    <rect className={calStyles.cell} x="452" y="160" width="104" height="65" />
                    <rect className={calStyles.cell} x="556" y="160" width="104" height="65" />
                    <rect className={calStyles.cell} x="660" y="160" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="36" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="140" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="244" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="348" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="452" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="556" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="660" y="160" width="104" height="65" shapeRendering="crispEdges" />
                    {/* ROW3  */}
                    <rect className={calStyles.cell} x="36" y="225" width="104" height="65" />
                    <rect className={calStyles.cell} x="140" y="225" width="104" height="65" />
                    <rect className={calStyles.cell} x="244" y="225" width="104" height="65" />
                    <rect className={calStyles.cell} x="348" y="225" width="104" height="65" />
                    <rect className={calStyles.cell} x="452" y="225" width="104" height="65" />
                    <rect className={calStyles.cell} x="556" y="225" width="104" height="65" />
                    <rect className={calStyles.cell} x="660" y="225" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="36" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="140" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="244" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="348" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="452" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="556" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="660" y="225" width="104" height="65" shapeRendering="crispEdges" />
                    {/* ROW4  */}
                    <rect className={calStyles.cell} x="36" y="290" width="104" height="65" />
                    <rect className={calStyles.cell} x="140" y="290" width="104" height="65" />
                    <rect className={calStyles.cell} x="244" y="290" width="104" height="65" />
                    <rect className={calStyles.cell} x="348" y="290" width="104" height="65" />
                    <rect className={calStyles.cell} x="452" y="290" width="104" height="65" />
                    <rect className={calStyles.cell} x="556" y="290" width="104" height="65" />
                    <rect className={calStyles.cell} x="660" y="290" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="36" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="140" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="244" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="348" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="452" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="556" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="660" y="290" width="104" height="65" shapeRendering="crispEdges" />
                    {/* ROW5  */}
                    <rect className={calStyles.cell} x="36" y="355" width="104" height="65" />
                    <rect className={calStyles.cell} x="140" y="355" width="104" height="65" />
                    <rect className={calStyles.cell} x="244" y="355" width="104" height="65" />
                    <rect className={calStyles.cell} x="348" y="355" width="104" height="65" />
                    <rect className={calStyles.cell} x="452" y="355" width="104" height="65" />
                    <rect className={calStyles.cell} x="556" y="355" width="104" height="65" />
                    <rect className={calStyles.cell} x="660" y="355" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="36" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="140" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="244" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="348" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="452" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="556" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="660" y="355" width="104" height="65" shapeRendering="crispEdges" />
                    {/* ROW6  */}
                    <rect className={calStyles.cell} x="36" y="420" width="104" height="65" />
                    <rect className={calStyles.cell} x="140" y="420" width="104" height="65" />
                    <rect className={calStyles.cell} x="244" y="420" width="104" height="65" />
                    <rect className={calStyles.cell} x="348" y="420" width="104" height="65" />
                    <rect className={calStyles.cell} x="452" y="420" width="104" height="65" />
                    <rect className={calStyles.cell} x="556" y="420" width="104" height="65" />
                    <rect className={calStyles.cell} x="660" y="420" width="104" height="65" />
                    <rect className={calStyles.cellFrame} x="36" y="420" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="140" y="420" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="244" y="420" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="348" y="420" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="452" y="420" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="556" y="420" width="104" height="65" shapeRendering="crispEdges" />
                    <rect className={calStyles.cellFrame} x="660" y="420" width="104" height="65" shapeRendering="crispEdges" />

                </g>
               
                <rect className={calStyles.tile} x="36" y="95" width="104" height="65" />


            </svg>
        </div>

    )
}
export default CalendarV2;

