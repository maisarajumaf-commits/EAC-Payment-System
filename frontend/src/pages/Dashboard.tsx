import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [stats, setStats] = useState({ sent: 0, balance: 0, transactions: 0 })

  useEffect(() => {
    // TODO: Fetch from API
    setStats({
      sent: 125450,
      balance: 1234.56,
      transactions: 12,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Sent" value={`KSh ${stats.sent.toLocaleString()}`} icon="📤" />
          <StatCard title="On-Chain Balance" value={`$${stats.balance.toFixed(2)}`} icon="💰" />
          <StatCard title="Recent Transactions" value={stats.transactions} icon="📊" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#1B4332] mb-4">Quick Actions</h2>
          <div className="space-x-4">
            <a href="/transaction" className="px-6 py-2 bg-[#1B4332] text-white rounded-lg hover:bg-[#0D2818] inline-block">
              Send Money
            </a>
            <a href="/wallet" className="px-6 py-2 bg-[#D4A017] text-[#1B4332] rounded-lg hover:bg-[#E76F51] inline-block font-semibold">
              View Wallet
            </a>
            <a href="/explorer" className="px-6 py-2 border border-[#1B4332] text-[#1B4332] rounded-lg hover:bg-gray-50 inline-block">
              Chain Explorer
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold text-[#1B4332] mt-2">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  )
}
