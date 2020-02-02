import moment from 'moment'

export const monthArrayMaker = (selectedDate) => {
    // console.log("SD: >utls: ", selectedDate)
    // console.log("allEvtDataCall ", x) 

    const daysArr = [...new Array(moment(selectedDate).daysInMonth()).fill()]
    let m = moment(selectedDate)

    const monthDaysArray = daysArr.map((item, idx) => {
        let dayStr = m.startOf("month").add(idx, "day").format('DD');
        let monthStr = m.format("MM");
        let yearStr = m.format("YYYY");
        return (
            item =
            {
                thisDay:
                {
                    dayStr,
                    monthStr,
                    yearStr,
                    fullDateStr: `${yearStr}-${monthStr}-${dayStr}`,
                    evtArr: []
                }
            }
        )
    });
    return monthDaysArray;
}

/* EACH ITEM RETURNS AS
  {
    own: {
        month: "12",
        year: "2019",
        day: "01",
        ​​​evtArr: []
    }
​  }​​,
  {
    own: {
        month: "12",
        year: "2019",
        day: "02",
        ​​​evtArr: []
    }
​  }​​,

​​​​​*/