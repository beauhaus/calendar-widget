
import React from 'react'
import placeStyles from './place-holder.module.scss';


const PlaceHolder = () => (
    <div   className={placeStyles.container}>
        
 <svg
  className={placeStyles.containerSvg}
  width="100%"
  viewBox="0 0 640 520"
  preserveAspectRatio="none"
 >
  <rect x="0" y="0" width="100%" height="100%" fill="#ddd" />

  <svg className={placeStyles.inner} viewBox="0 0 800 650">
   <rect className={placeStyles.bg} width="100%" height="100%" />
   
   <g className={placeStyles.row1}>
    <rect className={placeStyles.a} />
    <rect className={placeStyles.b} />
    <rect className={placeStyles.c} />
    <rect className={placeStyles.d} />
    <rect className={placeStyles.e} />
    <rect className={placeStyles.f} />
    <rect className={placeStyles.g} />
   </g>
   <g className={placeStyles.row2}>
    <rect className={placeStyles.a} />
    <rect className={placeStyles.b} />
    <rect className={placeStyles.c} />
    <rect className={placeStyles.d} />
    <rect className={placeStyles.e} />
    <rect className={placeStyles.f} />
    <rect className={placeStyles.g} />
   </g>
   <g className={placeStyles.row3}>
    <rect className={placeStyles.a} />
    <rect className={placeStyles.b} />
    <rect className={placeStyles.c} />
    <rect className={placeStyles.d} />
    <rect className={placeStyles.e} />
    <rect className={placeStyles.f} />
    <rect className={placeStyles.g} />
   </g>
   <g className={placeStyles.row4}>
    <rect className={placeStyles.a} />
    <rect className={placeStyles.b} />
    <rect className={placeStyles.c} />
    <rect className={placeStyles.d} />
    <rect className={placeStyles.e} />
    <rect className={placeStyles.f} />
    <rect className={placeStyles.g} />
   </g>
   <g className={placeStyles.row5}>
    <rect className={placeStyles.a} />
    <rect className={placeStyles.b} />
    <rect className={placeStyles.c} />
    <rect className={placeStyles.d} />
    <rect className={placeStyles.e} />
    <rect className={placeStyles.f} />
    <rect className={placeStyles.g} />
   </g>
   <g className={placeStyles.row6}>
    <rect className={placeStyles.a} />
    <rect className={placeStyles.b} />
    <rect className={placeStyles.c} />
    <rect className={placeStyles.d} />
    <rect className={placeStyles.e} />
    <rect className={placeStyles.f} />
    <rect className={placeStyles.g} />
   </g>
  </svg>

  <text className={placeStyles.desknote} x="20" y="330">DESK</text>
  <text className={placeStyles.tabnote} x="20" y="330">Tablet</text>
  <text className={placeStyles.phonenote} x="20" y="330">PHONE</text>
 </svg>
 
        
    </div>
)

export default PlaceHolder;
