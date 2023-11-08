import React from 'react';

const VideoTitle = ({original_title , overview}) => {
  return (
    <div className="pt-36 px-12">
        <h1 className="text-4xl font-bold">{original_title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-gray-500 p-2 text-white px-12 text-xl opacity-50 rounded-md'>Play</button>
            <button className='mx-2 bg-gray-500 p-2 text-white px-12 text-xl opacity-50 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;