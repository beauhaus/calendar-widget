import moment from 'moment'

export const calendarUtils = (param) => {


    // const currentYMD = m.format('YYYY-MM-DD')
    // const daysInThisMonth = m.daysInMonth(currentYMD); //29

    // const firstDay = moment(currentYMD).startOf("month").format('dd'); // 6
    // console.log("frst day: ", firstDay)



    // const daysArr = [...new Array(moment(selectedDate).daysInMonth()).fill()]
    // let m = moment(selectedDate)

    // const monthDaysArray = daysArr.map((item, idx) => {
    //     let dayStr = m.startOf("month").add(idx, "day").format('DD');
    //     let monthStr = m.format("MM");
    //     let yearStr = m.format("YYYY");
    //     return (
    //         item =
    //         {
    //             thisDay:
    //             {
    //                 dayStr,
    //                 monthStr,
    //                 yearStr,
    //                 fullDateStr: `${yearStr}-${monthStr}-${dayStr}`,
    //                 evtArr: []
    //             }
    //         }
    //     )
    // });
    // return monthDaysArray;
}


export const filledArray = (selectedMonth) => {
    // console.log("selMon: ", moment(selectedMonth).startOf("month").format('d')*1+7) // 13\
    const dayIconRow = new Array(7).fill({"desc": "dayIcon"}) // 7

    const prevMonthBufferLen = moment(selectedMonth).startOf("month").format('d')*1; // parsedToInt
    const prevMonthBuffArray = new Array(prevMonthBufferLen).fill({ 'desc': "prevMonthBuffer"});

    const daysInMonth = moment(selectedMonth).daysInMonth();
    const selectedMonthDaysArray = new Array(daysInMonth).fill({"content": {"events": ["red", "yellow", "green"]}})

    const endBuffer = 49 - (daysInMonth + prevMonthBufferLen);
    
    const nxtMonthBuffArray = new Array(endBuffer).fill({ 'desc': "nxtMonthBuffer" }); // [{content: null}, {content: null}]
    
    const filledArray = [...dayIconRow, ...prevMonthBuffArray, ...selectedMonthDaysArray, ...nxtMonthBuffArray];
    console.log("fAlen: ", filledArray.length);

    console.log(filledArray)
    return filledArray;
}

// let filledArray = new Array(10).fill({'hello':'goodbye'});

// let filledArray = [...new Array(10)].map(()=> {'hello':'goodbye'});