import React from 'react'

function ApnaButton({text,onClick}) {
  return (
    <div className='bg-blue-400 px-4 py-2 text-lg font-semibold rounded-xl m-5 active:bg-blue-500 ' onClick={onClick} >
        {text}
    </div>
  )
}

export default ApnaButton