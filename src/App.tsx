import { Layout } from './components/layout/Layout'
import { WatercolorSpot } from './components/ui/WatercolorSpot'
import { InkTransition } from './components/ui/InkTransition'
import { InkCursor } from './components/ui/InkCursor'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { PoemDetail } from './pages/PoemDetail'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  const location = useLocation();

  return (
    <Layout>
      <InkCursor />
      <ScrollToTop />

      {/* Global Background Ambience */}
      <WatercolorSpot color="bg-rose" width="w-[500px]" height="h-[500px]" className="-top-40 -right-40 opacity-20" delay={0} />
      <WatercolorSpot color="bg-sage" width="w-[400px]" height="h-[400px]" className="top-40 -left-20 opacity-20" delay={3} />
      <WatercolorSpot color="bg-ink-light" width="w-[300px]" height="h-[300px]" className="bottom-20 right-10 opacity-10" delay={5} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<InkTransition><Home /></InkTransition>} />
          <Route path="/portfolio" element={<InkTransition><Portfolio /></InkTransition>} />
          <Route path="/portfolio/:slug" element={<InkTransition><PoemDetail /></InkTransition>} />
          <Route path="/about" element={<InkTransition><About /></InkTransition>} />
          <Route path="/contact" element={<InkTransition><Contact /></InkTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
