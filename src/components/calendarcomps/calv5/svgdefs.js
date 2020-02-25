import React from 'react'

const SVGDefs = (props) => {

    return (
        <defs>
    <filter id='roughpaper'>
            <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
            <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1.2' result='light'>
              <feDistantLight azimuth='50' elevation='70' />
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
      <filter id="txtShad">
          <feDropShadow dx="-10" dy="10" stdDeviation="3" />
      </filter>
      <filter id="innerShad">
          <feOffset dy="4" dx="-6" />
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
      <linearGradient id="horizgrad" x1="0%" x2="100%" y1="50%" y2="50%" >
          <stop offset="96%" stopOpacity="0" />
          <stop offset="1" />
      </linearGradient>
      <linearGradient id="vertgrad" x1="50%" x2="50%" y1="98%" y2="3%" >
          <stop offset="96%" stopOpacity="0" />
          <stop offset="1" />
      </linearGradient>
  </defs>
    )

}

export default SVGDefs;