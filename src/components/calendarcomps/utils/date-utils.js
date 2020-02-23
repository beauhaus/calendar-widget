import moment from 'moment'

export const monthArrayMaker = (selectedMonth) => {

    const dayIconRow = new Array(7).fill({"desc": "dayIcon"}) // 7

    const prevMonthBufferLen = moment(selectedMonth).startOf("month").format('d')*1; // parsedToInt
    const prevMonthBuffArray = new Array(prevMonthBufferLen).fill({ 'desc': "prevMonthBuffer"});

    const selectedMonthDaysArray = dayEventsMaker(selectedMonth);
    
    const filledArray = [...dayIconRow, ...prevMonthBuffArray, ...selectedMonthDaysArray];
    
    return filledArray;
}


const dayEventsMaker = (selectedDate) => {
    /* each "leaf" component uses .format("MM") or .format("DD") for month&day info 
     * as in let dayNum = moment(elem.thisDayDate).format("D");
    */

    const momentDate = moment(selectedDate);
    const daysInMonth = momentDate.daysInMonth();

    const selectedMonthDaysArray = [...new Array(daysInMonth)].map((item, idx) => {
      let thisDayDate = momentDate
        .startOf("month")
        .add(idx, "day")
        .format("YYYY-MM-DD");
      return { desc: "days", thisDayDate };
    });

    return selectedMonthDaysArray;
}
