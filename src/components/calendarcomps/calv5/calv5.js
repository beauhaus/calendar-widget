import React from 'react'
import styled from 'styled-components'
// import Queries from '../queries'
import DayV5 from './dayv5'

const CalendarV5 = () => {

  // let idx = 0;
  // let xShift = Math.floor(idx % 7);
  //               let yShift = Math.floor(idx / 7);
  //               let cellNum = Number(`${yShift + 1}${xShift + 1}`);

  //               let xBase = 45;
  //               let xInc = (xShift * 130) + xBase;

  //               let yBase = 25;
  //               let yInc = (yShift * 69) + yBase;

  return (
    <Test1Styled className="container">
      <div className="sub-container">
        <svg className="calendar-canvas-svg" preserveAspectRatio="none"
          viewBox="0 0 1000 550"
          width="100%">
          <filter id='roughpaper'>
            <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
            <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1.2' result='light'>
              <feDistantLight azimuth='50' elevation='70' />
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          <rect width="100%" height="100%" fill="grey" filter="url(#roughpaper)" />
          <DayV5 />
        </svg>
        {/* <Queries /> */}
      </div>
    </Test1Styled>
  )
}

const Test1Styled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-content: center;
    // flex-direction: column;

    /* dimensions defined here */
     .sub-container {
      margin: 10vh auto;
    width: 80vw;
    height: 60vh;
    max-width: 1024px;
    max-height: 550px;
    position: relative;
      overflow: hidden;
    // border: 1px solid orange;
    border-radius: 5px;
    box-shadow: 0 0 20px 2px rgba(0,0,0,0.5);

        .queries {
          position: absolute;
          top: 0;
          left: 30%;
        }
        svg {
          position: absolute;
          left: 0;
          top: 0;
          line {
           stroke-width: 1;
           stroke: #fff;
          }
         }
         
     }
     text{
      // font-size: 80px;
      // font-weight: 100;
      // fill: #fff;
      // filter: url(#shadow);
     }

/* ******** iPhone 5, 5S, 5C and 5SE ******** */

    /******TAB******/
@media screen and (min-width: 668px) {
  // .sub-container {
  //   margin: 10vh auto;
  //   width: 80vw;
  //   height: 60vh;
  //   max-width: 1024px;
  //   max-height: 550px;
  //   position: relative;
  //   border-radius: 8px;
  
  //   box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);

  //   .cal-canvas-svg {
  //     position: absolute;
  //     top: 0;
  //     left: 40%;
  //     width: 60%;
  //     height: 100%;
      
  //   }

  // }

}
/******DESK******/
@media screen and (min-width: 1025px) {
 
  
}
    
}  
`

export default CalendarV5;