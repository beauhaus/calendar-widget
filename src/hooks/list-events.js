import {useStaticQuery, graphql} from 'gatsby'

const ListEvents = () => {
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
      const events = data.db.evtList;
        // console.log("statQ: ",events)
      return events.map(evtObj=>({
          title:evtObj.event.title,
          slug:evtObj.event.slug,
          datesArray:evtObj.event.dates
      }))
}

export default ListEvents;