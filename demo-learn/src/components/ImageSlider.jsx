import React, { useEffect, useState } from 'react'

const url = [
    "https://wallhalla.com/thumbs/65", 
    "https://e0.pxfuel.com/wallpapers/316/935/desktop-wallpaper-minimalist-from-firewatch-minimalist-ultrawide.jpg",
    "https://e0.pxfuel.com/wallpapers/257/923/desktop-wallpaper-forest-dark-evening-sunset-last-light-minimalistic-artist-background-and.jpg",
    "https://w0.peakpx.com/wallpaper/16/77/HD-wallpaper-beautiful-minimalist-ultra-minimalist.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSJ7zAq2br9BJ1sdlQYvDlhoetrWTAPot5TRMKJgZpt-wxIEE3TDo_XQgni5xmUy9jz0&usqp=CAU",

    ]

const ImageSlider = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handlePrev = () => {
        // if(activeImageIndex === 0) setActiveImageIndex(url.length - 1)
        // else setActiveImageIndex(activeImageIndex - 1);
        
        !activeImageIndex ? setActiveImageIndex(url.length - 1) : setActiveImageIndex(activeImageIndex - 1);
    }

    const handleNext = () => {
        setActiveImageIndex((activeImageIndex + 1) % url.length );
        // activeImageIndex === url.length -1 ? setActiveImageIndex(!activeImageIndex) : setActiveImageIndex(activeImageIndex + 1);
    }

    useEffect(()=> {
        const timer = setInterval(()=>{
            handleNext();
        }, 5000)
        return()=>{
            clearInterval(timer);
        }
    },[activeImageIndex]);
  return (
    <>
        <div className='flex justify-center'>
            <button onClick={handlePrev}>Prev</button>
            <img className='w-[600px] h-[400px] object-cover' src={url[activeImageIndex]} />
            <button onClick={handleNext}>Next</button>
        </div>
    </>

  )
}

export default ImageSlider