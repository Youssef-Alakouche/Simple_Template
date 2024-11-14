import React from "react";

function FilledBtn({ children, ...props }) {
  return (
    <button  className={`${props.className} rounded-md px-2 py-1 bg-gradient-to-r from-orange-500 to-orange-800 text-white text-xs sm:text-sm`}>
      {children}
    </button>
  );
}

export default FilledBtn;
