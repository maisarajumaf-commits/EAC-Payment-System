import { useEffect, useState } from 'react'

export default function ChainExplorerPage() {
  const [blocks, setBlocks] = useState<any[]>([])

  useEffect(() => {
    // TODO: Fetch blocks from API
    setBlocks([
      { index: 5, hash: '0xabc123...', timestamp: new Date().toISOString(), transactions: 3 },
      { index: 4, hash: '0xdef456...', timestamp: new Date().toISOString(), transactions: 2 },
      { index: 3, hash: '0xghi789...', timestamp: new Date().toISOString(), transactions: 5 },
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-8">⛓️ Chain Explorer</h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Blocks</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Block #</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hash</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Timestamp</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Txs</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {blocks.map((block) => (
                  <tr key={block.index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm font-mono text-[#1B4332]">#{block.index}</td>
                    <td className="px-6 py-3 text-sm font-mono text-gray-600">{block.hash}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{new Date(block.timestamp).toLocaleString()}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{block.transactions}</td>
                    <td className="px-6 py-3">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">✓ Verified</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            💡 Tip: Click on a block to see more details including all transactions and state changes.
          </p>
        </div>
      </div>
    </div>
  )
}
