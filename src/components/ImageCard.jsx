import React from "react";
import { nanoid } from "nanoid";

export default function ImageCard({image, showImage}) {

    const tags = image.tags.split(',')

    return (
        <div className='image-box max-w-sm rounded overflow-hidden shadow-lg  mb-8'>
            <img onClick={showImage} src={image.webformatURL} alt="" className='w-full'/>

            <div className="px-6 py-4">
                <div className="font-bold text-purple-600 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
               {tags.map(tag => (
                 <span key={nanoid()} className='inlne-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                 #{tag}
             </span>
               ))}    
            </div>
        </div>
    )
}