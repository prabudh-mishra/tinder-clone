import './App.css'
import Header from './components/header/Header'
import SwipeButtons from './components/swipeButtons/SwipeButtons'
import TinderCards from './components/tinderCards/TinderCards'

function App() {
  return (
    <div className='app'>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  )
}

export default App
