import React from 'react'
import fontStyles from './bh-font.module.scss';

const FontDB = [{
    'letter': "A",
    'data': 'M120 120H0L60 0'
},
{
    'letter': "B",
    'data': 'M120 90c0 16.57-13.43 30-30 30H0V0h90c16.57 0 30 13.43 30 30s-13.43 30-30 30c16.57 0 30 13.43 30 30z'
},
{
    'letter': "C",
    'data': 'M120 0v120H60C26.86 120 0 93.14 0 60S26.86 0 60 0h60z'
},
{
    'letter': "D",
    'data': 'M0 0v120h60c33.14 0 60-26.86 60-60S93.14 0 60 0H0z'
},
{
    'letter': "E",
    'data': 'M120 40V0H0v120h120V80H80V40z'
},
{
    'letter': "F",
    'data': 'M0 0v120h40V80h40V40h40V0z'
},
{
    'letter': "G",
    'data': 'M62.77 60.21L120 2.97V0H60C26.86 0 0 26.86 0 60s26.86 60 60 60h60V60.21H62.77z'
},
{
    'letter': "J",
    'data': 'M60 0v60H0c0 33.14 26.86 60 60 60s60-26.86 60-60V0H60z'
},
{
    'letter': "L",
    'data': 'M60 0H0v120h120V60H60z'
},
{
    'letter': "M",
    'data': 'M81.43 0L60 21.43 38.57 0H0v120h120V0z'
},
{
    'letter': "N",
    'data': 'M76 0v40L56 0H0v120h120V0z'
},
{
    'letter': "O",
    'data': 'M0 60a60 60 0 10120 0A60 60 0 100 60'
},
{
    'letter': "P",
    'data': 'M120 30c0 16.57-13.43 30-30 30H60v60H0V0h90c16.57 0 30 13.43 30 30z'
},
{
    'letter': "R",
    'data': 'M60 60l60 60H0V0h90c16.57 0 30 13.43 30 30s-13.43 30-30 30H60z'
},
{
    'letter': "S",
    'data': 'M120 60H90c39.23.18 39.23 59.83 0 60H0V60h30C-9.23 59.82-9.23.17 30 0h90v60z'
},
{
    'letter': "T",
    'data': 'M0 0v80h40v40h40V80h40V0z'
},
{
    'letter': "U",
    'data': 'M120 0H0v60c0 33.14 26.86 60 60 60s60-26.86 60-60V0z'
},
{
    'letter': "V",
    'data': 'M0 0h120L60 120'
},
{
    'letter': "W",
    'data': 'M81.43 120L60 98.57 38.57 120H0V0h120v120z'
}];

const BHFont = ({ fontReq }) => {
    const found = FontDB.filter(item => item.letter.indexOf(fontReq) !== -1)

    return (
        found.map(item => (
            <g key={item.letter}>
                {/* width="108" height="75" */}
                <symbol id={item.letter} >
                    <path d={item.data}  x="0" y="0" />
                </symbol>
                <svg width="100%"  stroke="red" strokeWidth="2" viewBox="0 0 120 120">
                    <use xlinkHref={`#${item.letter}`} filter="url(#innerShad)" fill="#888" x='50' y='50' />
                </svg>
            </g>
        )
        )
    );
}
export default BHFont;
