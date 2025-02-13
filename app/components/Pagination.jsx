"use client";
import React from "react";

const Pagination = ({ totalPage, currentPage }) => {
  function handlePageHandler(page) {
    if (page <= totalPage && page > 1) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="flex justify-center mx-4 items-center gap-4  mb-12">
      <button
        disabled={currentPage === 1}
        className="disabled:bg-slate-700 disabled:cursor-not-allowed disabled:text-black p-4"
        onClick={() => handlePageHandler(currentPage - 1)}
      >
        Prev
      </button>
      {Array.from({ length: totalPage }).map((_, index) => {
        return (
          <div
            key={index}
            className="p-2 border-2 cursor-pointer hover:bg-gray-700 transition-all hover:text-black border-gray-600"
            onClick={() => handlePageHandler(index + 1)}
          >
            {index + 1}
          </div>
        );
      })}
      <button
        disabled={currentPage === totalPage}
        className="disabled:bg-slate-700 disabled:cursor-not-allowed disabled:text-black p-4"
        onClick={() => handlePageHandler(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
