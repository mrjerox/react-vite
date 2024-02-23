import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/aos/aos.css'
import './assets/css/variables.css'
import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
