import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { artworkSelector } from "@/app/store/services/artwork/selectors";
import { setCurrentPage } from "@/app/store/services/artwork/reducers";

function Pagination() {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector(artworkSelector);

  const goToPage = (page: number) => () => {
    if (page < 1 || page > totalPages) {
      return;
    }
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="mt-10 flex justify-center items-center">
      <button
        className={`mr-4 px-3 py-2 rounded-md text-white ${
          currentPage === 1
            ? "bg-gray-400 cursor-default"
            : "bg-gray-900 hover:bg-gray-700 cursor-pointer"
        }`}
        onClick={goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="text-lg font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`ml-4 px-3 py-2 rounded-md text-white ${
          currentPage === totalPages
            ? "bg-gray-400 cursor-default"
            : "bg-gray-900 hover:bg-gray-700 cursor-pointer"
        }`}
        onClick={goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
