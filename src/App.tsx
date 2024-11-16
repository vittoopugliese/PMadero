import FeaturedPosts from './components/FeaturedPosts'
import FeaturedProperties from './components/FeaturedProperties'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className='page-container'>
      <Header />
      <Home />
      <FeaturedProperties />
      <FeaturedPosts />
    </div>
  )
}

export default App
