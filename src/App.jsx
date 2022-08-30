import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/solid.min.css'
import './assets/fontawesome/css/brands.min.css'

import Header from './components/Header'
import Hero from './components/Hero'
import SkillsList from './components/SkillsList'
import Cta from './components/Cta'
import Footer from './components/Footer'

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Container>
        <Hero/>
        <SkillsList/>
        <Cta/>
      </Container>

      <Footer/>
    </div>
  )
}

export default App
