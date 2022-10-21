import React from 'react'
import NavigationBar from './component/header/NavigationBar'
import Carousel from './component/header/Carousel'
import {Routes, Route} from 'react-router-dom'
import Home from './component/routes/Home'
import About from './component/routes/About'
import Tejas from './component/routes/Tejas'
import Error from './component/routes/Error'
import CompanyDetail from './component/routes/CompanyDetail'
import CompanySetting from './component/routes/CompanySetting'

function App() {
  
  return (
    <div>
      <NavigationBar />
      <Carousel />   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tejas" element={<Tejas />} />
        <Route path="/company/:companyId" element={<CompanyDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </div>
  )
}

export default App


// 1. routing in html
// 2. how react routing is better then html routing 
// 3. how to react routing works
// 4. IMPORT 
//    import { BrowserRouter } from 'react-router-dom'
//    inside index.js
// 5. IMPORT
//    import {Routes, Route} from 'react-router-dom'
//    inside App.jsx
// 6. <Routes>
{/* 
  <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/tejas" element={<Tejas />} />
    <Route path="/company/:companyId" element={<CompanyDetail />} />
    <Route path="*" element={<Error />} />
  </Routes> 
*/}

// 7. IMPORT 
//    import { Link } from 'react-router-dom'
//    inside NavigationBar.jsx
// 8. <Link to="/home">Home</Link>
// 9. Accessing the parameter
//    import { useParams } from 'react-router-dom'
//    inside CompanyDetail.jsx
// 10. const {companyId} = useParams()
// 11. <div> {companyId} </div>