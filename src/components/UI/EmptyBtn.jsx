import React from 'react'

function EmptyBtn({children, ...props}) {
  return (
    <button className={`${props.className} border rounded-md text-white text-xs p-2 p-1 sm:text-sm`}>{children}</button>
)
}

export default EmptyBtn