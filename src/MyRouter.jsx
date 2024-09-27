import {Routes, Route} from 'react-router-dom'
import App from './App'
import NavBar from './components/Navbar'



const MyRouter = () => {
    return(
        <>
            <NavBar />
            <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        
        </>
    )
}

export default MyRouter