import { useEffect, useState } from 'react'

export default function WalletPage() {
  const [wallet, setWallet] = useState({ address: '', balance: 0 })
  const [showSeed, setShowSeed] = useState(false)

  useEffect(() => {
    // TODO: Fetch wallet from API
    setWallet({
      address: '0x1234567890123456789012345678901234567890',
      balance: 1234.56,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-8">🪙 My Wallet</h1>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#1B4332] to-[#0D2818] rounded-lg shadow-lg p-8 text-white">
          <p className="text-gray-300 text-sm">On-Chain Balance</p>
          <p className="text-4xl font-bold mt-2">${wallet.balance.toFixed(2)}</p>
          <p className="text-gray-300 text-sm mt-2">USDC on Polygon</p>
        </div>

        {/* Wallet Address */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Wallet Address</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={wallet.address}
              readOnly
              className="flex-1 bg-gray-50 p-4 rounded-lg font-mono text-sm border border-gray-200"
            />
            <button
              onClick={() => navigator.clipboard.writeText(wallet.address)}
              className="px-4 py-2 bg-[#1B4332] text-white rounded-lg hover:bg-[#0D2818]"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Actions</h2>
          <button className="w-full px-4 py-3 bg-[#D4A017] text-[#1B4332] rounded-lg hover:bg-[#E76F51] font-semibold transition">
            💸 Withdraw
          </button>
          <button className="w-full px-4 py-3 border border-[#1B4332] text-[#1B4332] rounded-lg hover:bg-gray-50 font-semibold transition">
            🔄 Refresh Balance
          </button>
          <button
            onClick={() => setShowSeed(!showSeed)}
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition"
          >
            {showSeed ? '🔒 Hide' : '🔓 Show'} Seed Phrase
          </button>
        </div>

        {showSeed && (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <p className="text-sm text-yellow-800 mb-4">⚠️ Never share your seed phrase with anyone!</p>
            <div className="grid grid-cols-3 gap-2">
              {['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12'].map((word, i) => (
                <div key={i} className="bg-white p-2 rounded border border-yellow-300 text-center text-sm font-mono">
                  {i + 1}. {word}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
