import {useStaticQuery, graphql} from 'gatsby'

// searchParam is a fulldate through which all events are filtered
const DayHook = (searchParam) => {
    const data = useStaticQuery(graphql`
    {
      db: allMdx {
        evtList: nodes {
          event: frontmatter {
            title
            slug
            dates
          }
        }
      }
    }`
    )
    var evtsArr = data.db.evtList;

    var filteredArray = evtsArr.filter(evtItem => {
      let hasEvt = evtItem.event.dates.indexOf(searchParam)
      return hasEvt !== -1;
    })
    return filteredArray;
}

export default DayHook;