import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import DashboardPage from './pages/Dashboard'
import TransactionPage from './pages/Transaction'
import WalletPage from './pages/Wallet'
import ChainExplorerPage from './pages/ChainExplorer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/explorer" element={<ChainExplorerPage />} />
      </Routes>
    </Router>
  )
}

export default App
