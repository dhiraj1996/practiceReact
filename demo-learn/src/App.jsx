
import './App.css'
import FetchingMeals from './components/FetchingMeals'
import FetchingPhotos from './components/FetchingPhotos'
import ImageSlider from './components/ImageSlider'

function App() {

  return (
    <>
    <div> Hello World</div>
    <ImageSlider />

    {/* Fetching photos using fetch method */}
    {/* <FetchingPhotos /> */}
    
    {/* fetching meals using axios method */}
    <FetchingMeals />
    
    </>
  )
}

export default App
