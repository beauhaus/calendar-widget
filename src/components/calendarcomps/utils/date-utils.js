import moment from 'moment'

export const filledArray = (selectedMonth) => {

    const dayIconRow = new Array(7).fill({"desc": "dayIcon"}) // 7

    const prevMonthBufferLen = moment(selectedMonth).startOf("month").format('d')*1; // parsedToInt
    const prevMonthBuffArray = new Array(prevMonthBufferLen).fill({ 'desc': "prevMonthBuffer"});

    const daysInMonth = moment(selectedMonth).daysInMonth();
    const selectedMonthDaysArray = [...new Array(daysInMonth)].map((item, idx)=> ({'desc': "days","dayNum": `${idx+1}`,"content": {"events": ["#000", "#C19494", "#94C1B7"]}}));    
    
    const filledArray = [...dayIconRow, ...prevMonthBuffArray, ...selectedMonthDaysArray];
    
    return filledArray;
}
