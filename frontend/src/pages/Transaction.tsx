import { useState } from 'react'

export default function TransactionPage() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [sourceCurrency, setSourceCurrency] = useState('KES')
  const [destCurrency, setDestCurrency] = useState('USD')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit to backend
    console.log({ amount, recipient, sourceCurrency, destCurrency })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[#1B4332] mb-6">💸 Send Money</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4332] focus:border-transparent"
                placeholder="Enter amount"
                required
              />
              <select
                value={sourceCurrency}
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4332]"
              >
                <option>KES</option>
                <option>TZS</option>
                <option>UGX</option>
                <option>RWF</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4332] focus:border-transparent"
              placeholder="0x... or phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Receive In
            </label>
            <select
              value={destCurrency}
              onChange={(e) => setDestCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4332]"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Exchange Rate:</span>
              <span>1 {sourceCurrency} = 0.00775 USD</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Fee:</span>
              <span>0.8%</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#1B4332] text-white rounded-lg hover:bg-[#0D2818] font-semibold transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
