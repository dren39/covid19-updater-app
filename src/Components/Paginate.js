import React from 'react'
import { Pagination } from 'semantic-ui-react'

function Paginate(props) {

    const pageNumbers = Math.ceil(props.totalPosts/props.postsPerPage);

    return (
        <Pagination
        boundaryRange={1}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={pageNumbers}
        onPageChange={(e, { activePage })=>props.paginateHandler(activePage)}
      />
    )
}

export default Paginate
