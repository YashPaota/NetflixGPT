import React from 'react';

const VideoTitle = ({original_title , overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-4xl font-bold">{original_title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white p-2 text-black px-12 text-xl rounded-md font-bold hover:bg-opacity-80'>Play</button>
            <button className='mx-2  bg-gray-500 p-2 text-white px-12 text-xl opacity-75 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;