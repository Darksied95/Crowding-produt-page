import React from "react";

const BookmarkSvg = ({ bookmarked }) => (
  <svg
    width="56"
    height="56"
    xmlns="http://www.w3.org/2000/svg"
    className="z-10"
  >
    <g fill="none" fillRule="evenodd">
      <circle
        fill={!bookmarked ? "#2F2F2F" : "hsl(176, 72%, 28%)"}
        cx="28"
        cy="28"
        r="28"
      />
      <path
        fill={!bookmarked ? "#B1B1B1" : "#fff"}
        d="M23 19v18l5-5.058L33 37V19z"
      />
    </g>
  </svg>
);
export default BookmarkSvg;
