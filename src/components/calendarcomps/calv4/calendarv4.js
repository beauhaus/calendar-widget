import React from 'react'


import calv4Styles from './calendarv4.module.scss';

const CalendarV4 = () => {
    // const dayTile = {
    //     id: "100",
    //     x: "",
    //     y: "",
    //     width: "",
    //     height: ""
    // }
    return (
        <div className={calv4Styles.container}>

            <svg
                className={calv4Styles.outerSvg}
                width="100%"
                viewBox="0 0 640 520"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id='roughpaper'>
                        <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
                        <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1.2' result='light'>
                            <feDistantLight azimuth='50' elevation='70' />
                        </feDiffuseLighting>
                        <feBlend in="SourceGraphic" mode="multiply" />
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


                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="#ddd" />

                <svg className={calv4Styles.inner} viewBox="0 0 800 650">
                    <defs>
                        <linearGradient id="horizgrad" x1="0%" x2="100%" y1="50%" y2="50%" >
                            <stop offset="96%" stopOpacity="0" />
                            <stop offset="1" />
                        </linearGradient>
                        <linearGradient id="vertgrad" x1="50%" x2="50%" y1="98%" y2="3%" >
                            <stop offset="96%" stopOpacity="0" />
                            <stop offset="1" />
                        </linearGradient>
                        <symbol id="cell" className={calv4Styles.cellSymbol} >
                            <rect fill="url(#vertgrad)" />
                            <rect fill="url(#horizgrad)" />
                        </symbol>
                    </defs>
                    <rect className={calv4Styles.bg} width="100%" height="100%" filter="url(#roughpaper)" />

                    <g className={calv4Styles.rows}>

                        <g className={calv4Styles.row1}>
                            <g className={calv4Styles.a} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.b} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.c} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.d} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.e} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.f} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.g} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                        </g>
                        <g className={calv4Styles.row2}>
                        <g className={calv4Styles.a} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.b} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.c} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.d} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.e} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.f} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.g} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                        </g>
                        <g className={calv4Styles.row3}>
                        <g className={calv4Styles.a} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.b} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.c} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.d} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.e} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.f} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.g} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                        </g>
                        <g className={calv4Styles.row4}>
                        <g className={calv4Styles.a} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.b} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.c} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.d} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.e} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.f} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.g} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                        </g>
                        <g className={calv4Styles.row5}>
                        <g className={calv4Styles.a} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.b} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.c} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.d} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.e} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.f} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.g} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                        </g>
                        <g className={calv4Styles.row6}>
                        <g className={calv4Styles.a} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.b} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.c} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.d} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.e} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.f} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                            <g className={calv4Styles.g} >
                                <use xlinkHref="#cell" />
                                <rect className={calv4Styles.celltop} />
                            </g>
                        </g>
                    </g>


                </svg>
                {/* <!-- ************ smtwtfs ************** --> */}
                <svg viewBox="0 0 800 650" filter="url(#innerShad)">
                    <g className={calv4Styles.smtwtfsPhone}>
                        <polygon points="181.89,17.84 169.33,24.28 156.76,17.84 134.14,17.84 134.14,53.93 204.51,53.93 204.51,17.84" />
                        <polygon points="412.49,54 399.92,47.56 387.36,54 364.74,54 364.74,17.91 435.11,17.91 435.11,54" />
                        <polygon points="480.04,17.77 480.04,41.83 503.49,41.83 503.49,53.86 526.95,53.86 526.95,41.83 550.41,41.83 550.41,17.77" />
                        <polygon points="595.33,17.77 595.33,53.86 618.79,53.86 618.79,41.83 642.25,41.83 642.25,29.8 665.7,29.8 665.7,17.77" />
                        <path d="M781 35.95h-17.59c23.01.05 23.01 18 0 18.05h-52.78V35.95h17.59c-23.01-.05-23.01-18 0-18.05H781v18.05z" />
                        <path d="M89.22 35.88h-17.6c23.01.05 23.01 18 0 18.05H18.84V35.88h17.59c-23.01-.05-23.01-18 0-18.05h52.78v18.05z" />
                        <polygon points="249.44,17.77 249.44,41.83 272.9,41.83 272.9,53.86 296.35,53.86 296.35,41.83 319.81,41.83 319.81,17.77" />
                    </g>
                    <g className={calv4Styles.smtwtfsTablet}>
                        <path d="M214.02 24l-10.71 10.71L192.59 24h-19.28v60h60V24z" />
                        <path d="M410.64 84.11L399.92 73.4l-10.71 10.71h-19.29v-60h60v60z" />
                        <path d="M468.23 23.89v40h20v20h20v-20h20v-40z" />
                        <path d="M566.54 23.89v60h20v-20h20v-20h20v-20z" />
                        <path d="M724.85 54.11h-15c19.62.09 19.62 29.91 0 30h-45v-30h15c-19.62-.09-19.62-29.91 0-30h45v30z" />
                        <path d="M135 54h-15c19.62.09 19.62 29.91 0 30H75V54h15c-19.62-.09-19.62-29.91 0-30h45v30z" />
                        <path d="M271.62 23.89v40h20v20h20v-20h20v-40z" />
                    </g>
                    <g className={calv4Styles.smtwtfsDesk}>
                        <polygon points="192.07,35.15 183.9,43.31 175.74,35.15 161.05,35.15 161.05,80.86 206.76,80.86 206.76,35.15" />
                        <polygon points="269.08,34.91 269.08,65.39 284.32,65.39 284.32,80.62 299.56,80.62 299.56,65.39 314.79,65.39 314.79,34.91" />
                        <polygon points="408.16,80.86 400,72.7 391.84,80.86 377.14,80.86 377.14,35.15 422.86,35.15 422.86,80.86" />
                        <polygon points="485.18,34.91 485.18,65.39 500.42,65.39 500.42,80.62 515.65,80.62 515.65,65.39 530.89,65.39 530.89,34.91" />
                        <polygon points="592.71,34.91 592.71,80.62 607.94,80.62 607.94,65.39 623.18,65.39 623.18,50.15 638.42,50.15 638.42,34.91" />
                        <path d="M98.71 58H87.28c14.95.07 14.94 22.79 0 22.86H53V58h11.43c-14.95-.07-14.94-22.79 0-22.86h34.28V58z" />
                        <path d="M747 58h-11.43c14.95.07 14.94 22.79 0 22.86h-34.28V58h11.43c-14.95-.07-14.94-22.79 0-22.86H747V58z" />
                    </g>

                </svg>


                <text className={calv4Styles.desknote} x="2%" y="95%">DESK</text>
                <text className={calv4Styles.tabnote} x="2%" y="95%">Tablet</text>
                <text className={calv4Styles.phonenote} x="2%" y="95%">PHONE</text>
            </svg>



        </div>

    )
}
export default CalendarV4;

