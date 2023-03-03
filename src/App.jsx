import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Tech } from './pages/Tech';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Tech />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
