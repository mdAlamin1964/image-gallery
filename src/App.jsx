import React, { useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

// test
import VideoData from './VideoData'




export default function App() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] =  useState(true)
    const [term, setTerm] = useState('')
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=34315960-f42d8865bdc228586110445c5&q=${term}&image_type=photo`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits)
            setIsLoading(false)
            })
        .catch(err => console.log(err))
    },[term])

    console.log(images)

    function showImage(url) {
       // window.location.href = url
        window.open(url, "_blank")
    }

    return (
        <div className="container mx-auto "> 
        <ImageSearch  searchText={(text) => setTerm(text)}/>

            {!isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto'>No Images found</h1>}

            { isLoading? 
            <h1 className='text-6xl text-center mx-auto'>Loading...</h1>
            : 
            <div className="md:grid grid-cols-3 gap-4">
                {images.map(image=> ( 
                    <ImageCard 
                        key={image.id}
                        image={image}
                        showImage={()=>showImage(image.largeImageURL)}
                    />
                ))}
            </div>}
        </div>
    )
}