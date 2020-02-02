
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
  {/* <svg className={placeStyles.smtwtfscontainer}  >

  <g className={placeStyles.smtwtfs}>
    <path className={placeStyles.sun} d="M614 50h-10c13.08.06 13.08 19.94 0 20h-30V50h10c-13.08-.06-13.08-19.94 0-20h30v20z"/>
    <path className={placeStyles.sat} d="M66 51H56c13.08.06 13.08 19.94 0 20H26V51h10c-13.08-.06-13.08-19.94 0-20h30v20z"/>
    <polygon className={placeStyles.mon} points="144.14,31 137,38.14 129.86,31 117,31 117,71 157,71 157,31"/>
    <polygon className={placeStyles.tues} points="207.5,30.5 207.5,57.17 220.83,57.17 220.83,70.5 234.17,70.5 234.17,57.17 247.5,57.17 247.5,30.5"/>
    <polygon className={placeStyles.wed} points="327.14,71 320,63.86 312.86,71 300,71 300,31 340,31 340,71"/>
    <polygon className={placeStyles.thurs} points="391.07,31.93 391.07,58.6 404.4,58.6 404.4,71.93 417.74,71.93 417.74,58.6 431.07,58.6 431.07,31.93"/>
    <polygon className={placeStyles.fri} points="482.46,30.69 482.46,70.69 495.79,70.69 495.79,57.36 509.13,57.36 509.13,44.03 522.46,44.03 522.46,30.69"/>
  </g>
  </svg> */}
 
<svg className={placeStyles.smtwtfs} viewBox="0 0 60 60">
  <path className={placeStyles.sunday}fill="#0071bc" fillRule="evenodd" d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" clipRule="evenodd"/>
  <polygon className={placeStyles.monday} fill="#0071bc" fillRule="evenodd" points="40.71,0 30,10.71 19.29,0 0,0 0,60 60,60 60,0" clipRule="evenodd"/>
  <polygon className={placeStyles.tuesday} fill="#0071bc" fillRule="evenodd" points="0,0 0,40 20,40 20,60 40,60 40,40 60,40 60,0" clipRule="evenodd"/>
<polygon className={placeStyles.wednesday} fill="#0071bc" fillRule="evenodd" points="40.71,60 30,49.29 19.29,60 0,60 0,0 60,0 60,60" clipRule="evenodd"/>
<polygon className={placeStyles.thursday} fill="#0071bc" fillRule="evenodd" points="0,0 0,40 20,40 20,60 40,60 40,40 60,40 60,0" clipRule="evenodd"/>
<polygon className={placeStyles.friday} fill="#0071bc" fillRule="evenodd" points="0,0 0,60 20,60 20,40 40,40 40,20 60,20 60,0" clipRule="evenodd"/>
<path className={placeStyles.saturday} fill="#0071bc" fillRule="evenodd" d="M60 30H45c19.62.09 19.62 29.91 0 30H0V30h15C-4.62 29.91-4.62.09 15 0h45v30z" clipRule="evenodd"/>
</svg>

  <text className={placeStyles.desknote} x="20" y="330">DESK</text>
  <text className={placeStyles.tabnote} x="20" y="330">Tablet</text>
  <text className={placeStyles.phonenote} x="20" y="330">PHONE</text>
 </svg>
 
        
    </div>
)

export default PlaceHolder;


