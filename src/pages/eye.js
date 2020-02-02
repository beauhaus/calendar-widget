import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
// import CustomEase from '../../gsap/src/CustomEase'

import eyeStyles from './eye.module.scss'
import BHFont from '../components/calendarcomps/cal/bh-font';

const Eye = () => {

    // let flutter = CustomEase.create("custom", "M0,0 C0,0 0.02205,0.0141 0.02811,0.02522 0.04016,0.04728 0.04887,0.06848 0.05248,0.09614 0.08929,0.37807 0.10052,0.56339 0.13658,0.85601 0.14104,0.89219 0.14709,0.9146 0.15748,0.9482 0.16311,0.96637 0.17018,0.98184 0.17939,0.99441 0.18265,0.99887 0.19167,1.00156 0.19623,1.00114 0.1995,1.00083 0.20385,0.99609 0.20548,0.99198 0.21578,0.96607 0.22635,0.94443 0.23092,0.9139 0.26521,0.68493 0.27545,0.54379 0.30865,0.3031 0.3196,0.22373 0.32502,0.17806 0.34278,0.10296 0.35494,0.05158 0.36715,0.01169 0.38714,-0.02866 0.39319,-0.04089 0.40949,-0.05221 0.42061,-0.05416 0.43028,-0.05585 0.44433,-0.04792 0.45453,-0.04047 0.46832,-0.0304 0.48056,-0.02027 0.48853,-0.00459 0.52715,0.07139 0.55401,0.12899 0.58437,0.21491 0.61128,0.29109 0.62438,0.34046 0.63861,0.42023 0.65699,0.52319 0.65377,0.59027 0.66963,0.69258 0.6744,0.72336 0.68035,0.74483 0.69308,0.77162 0.70533,0.79742 0.71924,0.8141 0.73818,0.83695 0.75229,0.85398 0.76253,0.86626 0.78101,0.87776 0.85933,0.92654 1,1 1,1 ")
    let eyeLidRef = useRef(null)
    let pupilRef = useRef(null)

    const clickHandler = () => {
        gsap.set(eyeLidRef, { opacity: 1, y: 0, x: 0 })
        const tl = gsap.timeline({ defaults: { opacity: 1 } })
        tl.to(eyeLidRef, { duration: .5, y: -80, x: -80, ease: "power4.inOut" })
          .to(pupilRef, { duration: 2, r: 30, ease: 'elastic(1,0.3)' }, '-=0.2')
    }

    
    return (
        <div className={eyeStyles.container}>
            <svg className={eyeStyles.eye} viewBox="0 0 230 200" onClick={clickHandler}>
                <clipPath id="clip" className={eyeStyles.clipped}>
                    <path ref={elem => eyeLidRef = elem} d="M19.92 179.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" />
                </clipPath>
                <clipPath id="clip2" className={eyeStyles.clipped2}>
                    <path d="M19.92 179.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" />
                </clipPath>

                <g className={eyeStyles.botLash}>
                    <polygon points="169.33 147.29 152.45 146.96 169 130.04" />
                    <polygon points="185.82 128.45 169.01 130.04 183.6 111.35" />
                    <polygon points="200.01 107.02 183.65 111.28 195.22 90.49" />
                    <polygon points="211.08 83.77 195.51 90.27 204.21 67.94" />
                    <polygon points="219 59.69 204.22 67.94 210.46 44.76" />
                    <polygon points="223.83 34.14 210.47 44.67 213.15 20.77" />
                </g>
                <g className={eyeStyles.topLash}>
                    <polygon points="4.71 166.71 15.38 179.79 18.8 156.16" />
                    <polygon points="9.7 141.92 18.79 156.16 24.84 132.95" />
                    <polygon points="18.19 117.32 24.87 132.87 34.46 110.73" />
                    <polygon points="30.08 94.03 34.47 110.36 47.07 89.51" />
                    <polygon points="44.59 72.7 47.07 89.51 61.89 70.06" />
                    <polygon points="62.18 52.87 61.95 69.99 79.54 52.9" />
                </g>

                <path id="eyewhite" d="M19.92 179.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" fill="#fff" />
                <path className={eyeStyles.eye} id="eye" d="M19.92 179.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" fill="#75a4c0" />

                <use
                    className={eyeStyles.eyewhite}
                    xlinkHref="#eyewhite"
                    fill="white"
                />
                
                <circle className={eyeStyles.iris} cx="115.76" cy="99.29" r="51"/>
                <circle ref={elem => pupilRef = elem} className={eyeStyles.pupil} cx="115.76" cy="99.29" r="42"/>
                <use
                    className={eyeStyles.use1}
                    xlinkHref="#eye"
                    fill="green"
                />
            </svg>

            
            <h1>HI</h1>
            <br/><br/><br/><br/><br/><br/>
            <hr/>
            <div className={eyeStyles.font}>

            <BHFont fontReq={"L"}/>
            <BHFont fontReq={"O"}/>
            <BHFont fontReq={"V"}/>
            <BHFont fontReq={"E"}/>
            </div>
        </div>
    )
}


export default Eye;

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.19 200.58">
  <polygon points="169.33 147.29 152.45 146.96 169 130.04"/>
  <polygon points="185.82 128.45 169.01 130.04 183.6 111.35"/>
  <polygon points="200.01 107.02 183.65 111.28 195.22 90.49"/>
  <polygon points="211.08 83.77 195.51 90.27 204.21 67.94"/>
  <polygon points="219 59.69 204.22 67.94 210.46 44.76"/>
  <polygon points="223.83 34.14 210.47 44.67 213.15 20.77"/>
  <g>
    <polygon class="st0" points="4.71 166.71 15.38 179.79 18.8 156.16"/>
    <polygon class="st0" points="9.7 141.92 18.79 156.16 24.84 132.95"/>
    <polygon class="st0" points="18.19 117.32 24.87 132.87 34.46 110.73"/>
    <polygon class="st0" points="30.08 94.03 34.47 110.36 47.07 89.51"/>
    <polygon class="st0" points="44.59 72.7 47.07 89.51 61.89 70.06"/>
    <polygon class="st0" points="62.18 52.87 61.95 69.99 79.54 52.9"/>
  </g>
  <path d="M-58.48 102.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" fill="#0071bc"/>
  <path d="M19.92 179.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" fill="#0ff"/>
  <path d="M19.92 179.15c7.63 1.07 15.42 1.64 23.34 1.64 89.56 0 162.6-70.72 166.34-159.36-7.63-1.07-15.42-1.64-23.34-1.64-89.56 0-162.6 70.72-166.34 159.36z" fill="#ccc"/>
</svg>

*/