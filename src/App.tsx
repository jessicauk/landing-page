import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import Bubbles from './components/Common/Bubbles/Bubbles'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero>
        <Navbar />
        <Content />
        <Sidebar />
        <Bubbles />
      </Hero>
    </div>
  )
}

export default App
