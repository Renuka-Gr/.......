import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/navbar'

function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <div className='content'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout


// import React from 'react'
// import Footer from '../footer/Footer'
// import Navbar from '../navbar/Navbar'

// function Layout({ children }) {
//   return (
//     <div>
//       <Navbar />
//       <div className="content">
//         {children}
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Layout