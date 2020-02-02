import React, { useState } from 'react'
import Calendar from '../components/calendar'
import Layout from '../components/layout'
// import calendarPageStyles from './calendarpage.module.scss';


const CalendarPage = () => (
    <Layout>
            <h1>Calendar Page</h1>
            <Calendar/>
    </Layout>
    )

export default CalendarPage;