import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  // add blog to bookmark
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // time add 
  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
         <Header></Header>
         <div className='md:flex max-w-7xl mx-auto'>

           {/* function pass to Blogs component  */}
           <Blogs 
           handleAddToBookmark = {handleAddToBookmark} 
           handleMarkAsRead={handleMarkAsRead}>
           </Blogs>
           
           {/* here show bookmarks */}
           <Bookmarks bookmarks = {bookmarks}
           readingTime={readingTime}
           ></Bookmarks>
         </div>

    </>
  )
}

export default App
