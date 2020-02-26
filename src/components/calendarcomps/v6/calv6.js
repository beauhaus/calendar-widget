import React from 'react'
import { Link } from 'gatsby'
import Queries from '../utils/queries'

import v6Styles from './calv6.module.scss';

const CalV6 = () => (
    <div className={v6Styles.v6Container}>
        <h2>hello</h2>
        <Link to="/"><button>Home</button></Link>
        <div className={v6Styles.msgContainer}>
            <h1 className={v6Styles.msg}></h1>
        </div>
        {/* <Queries /> */}
    </div>
)

export default CalV6;