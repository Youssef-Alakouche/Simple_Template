import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import './App.css'

function App() {


  return (
    <>
      <header className='sticky top-0 '>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
      </main>
    </>
  )
}

export default App
