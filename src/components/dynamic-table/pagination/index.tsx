import React from "react";
import ReactPaginate from "react-paginate";
import { IPagination } from "../../../interfaces";

export const PaginationUI = (props: IPagination) => {
  const {currentPageIndex, pageCount, onChangePage} = props;
  // const [currentPageIndex, setCurrentPageIndex] = useState(0);
  // const [pageCount, setPageCount] = useState(20);


  const handlePageChange = (event: any) => {
    // TODO Only change displayed selected page
    // when its content is loaded in useEffect.
    onChangePage(event.selected);
  };

  return (
    <ReactPaginate
      previousLabel="«"
      nextLabel="»"
      pageClassName=""
      pageLinkClassName="btn btn-sm"
      previousClassName=""
      previousLinkClassName="btn btn-sm"
      nextClassName=""
      nextLinkClassName="btn btn-sm"
      breakLabel="..."
      breakClassName=""
      breakLinkClassName="btn btn-sm btn-disabled"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      containerClassName="btn-group justify-center pt-8"
      activeClassName=""
      activeLinkClassName="btn btn-sm btn-active"
      forcePage={currentPageIndex}
    />
  );
};
