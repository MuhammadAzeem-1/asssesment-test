import { useState } from "react";
import StarRating from "./StarRating";
import ReactPaginate from "react-paginate";

const TABLE_HEAD = ["Name", "Email", "Product Name", "Rating", "Actions"];

const PAGE_SIZE = 10; // Number of items per page

const ProductList = ({ data }) => {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PAGE_SIZE;
  const currentPageData = data?.slice(offset, offset + PAGE_SIZE);

  return (
    <div class="flex justify-center flex-col items-center overflow-x-auto drop-shadow-md w-full">
      <table class=" w-5/6 text-sm text-left rtl:text-right rounded text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-customTable">
          <tr>
            <th scope="col" class="px-5 py-3">
              Name
            </th>
            <th scope="col" class="px-5 py-3">
              Color
            </th>
            <th scope="col" class="px-3 py-3 text-gray-400">
              Product Name
            </th>
            <th scope="col" class="px-5 py-3 text-gray-400">
              Rating
            </th>
            <th scope="col" class="px-5 py-3 text-gray-400">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => (
            <tr class=" border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {item.name}
              </th>
              <td class="px-2 py-4 text-gray-900 ">{item.email}</td>
              <td class="px-3 py-4 text-gray-900 ">{item?.productName}</td>

              <td class="px-5 py-4 text-gray-900 ">
                <StarRating rating={item?.star} />
              </td>
              <td class="px-5 py-4">
                <button className=" block w-24 rounded  border  p-3 text-center text-xs font-medium transition  bg-customDark text-white">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(data.length / PAGE_SIZE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          className="flex justify-end p-5 space-x-4 items-center"
          pageClassName={"border rounded-md px-3 py-2 mx-1"}
          activeClassName={"bg-blue-500 text-white border-blue-500"} // Example active class
          previousLinkClassName={"border rounded-md px-3 py-2 mx-1"}
          nextLinkClassName={"border rounded-md px-3 py-2 mx-1"}
        />
      </div>
    </div>
  );
};

export default ProductList;
