import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Hero from './components/Hero'
import SkillList from './components/SkillList'
import Cta from './components/Cta'
import Footer from './components/Footer'

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Container>
        <Hero/>
        <SkillList/>
        <Cta/>
      </Container>

      <Footer/>
    </div>
  )
}

export default App
