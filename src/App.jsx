import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { About } from './components/about'
import { Project } from './components/projects'
import { Footer } from './components/footer'

export function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Footer />
    </>
  )
}