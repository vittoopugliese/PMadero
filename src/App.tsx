import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/utils/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import FeaturedPosts from './components/FeaturedPosts';
import AllPostsPage from './components/AllPostsPage';
import AllPropertiesPage from './components/AllPropertiesPage';
import OnePropertyPage from './components/OnePropertyPage';
import OnePostPage from './components/OnePostPage';
import Header from './components/utils/Header';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <>
      <Home />
      <FeaturedProperties />
      <FeaturedPosts />
      <Footer /> 
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className='page-container'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/propiedades" element={<AllPropertiesPage />} />
          <Route path="/propiedades/:id" element={<OnePropertyPage />} />
          
          <Route path="/blog" element={<AllPostsPage />} />
          <Route path="/blog/:id" element={<OnePostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;