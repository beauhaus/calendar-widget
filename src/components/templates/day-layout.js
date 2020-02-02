import React from 'react'
import { Link, graphql } from 'gatsby'
import dayLayStyles from './day-layout.module.scss';


// export const query =graphql`

// `
const DayLayout = ({pageContext}) => {
    console.log("DayLayout ran")
    return (
        <div className={dayLayStyles.container}>
            <h1>Day layout</h1>
           {/* {children} */}
         <pre>{JSON.stringify(pageContext, null, 2)}</pre>
        </div>
    )
}
export default DayLayout;