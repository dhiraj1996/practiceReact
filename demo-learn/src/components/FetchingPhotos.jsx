import { useEffect, useState } from 'react'

const FetchingPhotos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setPhotos(data);
        })
        },[])

  return (
    <div className='flex flex-wrap justify-center'>
        {
            photos.map((photo) => (
                <img key={photo.id} src={photo.url} width={20} />
            ))
        }
    </div>
  )
  
}

export default FetchingPhotos