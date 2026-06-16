import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B4332] to-[#0D2818]">
      {/* Header */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1B4332]">🌍 EAC Pay</div>
          <div className="space-x-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 bg-[#1B4332] text-white rounded-lg hover:bg-[#0D2818] transition"
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/transaction')}
              className="px-6 py-2 bg-[#D4A017] text-[#1B4332] rounded-lg hover:bg-[#E76F51] transition font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-20 px-4 text-center text-white py-20">
        <h1 className="text-5xl md:text-6xl font-bold mt-12 mb-6">
          Instant Cross-Border Payments
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Fast, secure, and transparent blockchain-powered payments across Kenya, Tanzania, Uganda, Rwanda, and beyond.
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/transaction')}
            className="px-8 py-3 bg-[#D4A017] text-[#1B4332] font-bold rounded-lg hover:bg-[#E76F51] transition text-lg inline-block"
          >
            Send Money Now
          </button>
          <button 
            onClick={() => navigate('/explorer')}
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition text-lg inline-block"
          >
            View Explorer
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="⚡" 
            title="Instant Settlement" 
            description="On-chain settlement in seconds, not days"
          />
          <FeatureCard 
            icon="🔐" 
            title="Non-Custodial" 
            description="You control your private keys, not us"
          />
          <FeatureCard 
            icon="💰" 
            title="Low Fees" 
            description="0.8% spread vs 3-5% from traditional providers"
          />
        </div>
      </div>

      {/* Supported Countries */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1B4332] text-center mb-12">Supported Countries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Country flag="🇰🇪" name="Kenya" code="KES" />
            <Country flag="🇹🇿" name="Tanzania" code="TZS" />
            <Country flag="🇺🇬" name="Uganda" code="UGX" />
            <Country flag="🇷🇼" name="Rwanda" code="RWF" />
            <Country flag="🇧🇮" name="Burundi" code="BIF" />
            <Country flag="🇸🇸" name="South Sudan" code="SSP" />
            <Country flag="🇨🇩" name="DR Congo" code="CDF" />
            <Country flag="🇸🇴" name="Somalia" code="SOS" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1B4332] text-white py-8 text-center">
        <p>&copy; 2024 EAC Payment System. Built with ❤️ for East Africa.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#1B4332] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Country({ flag, name, code }: any) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#1B4332] transition">
      <div className="text-3xl mb-2">{flag}</div>
      <p className="font-semibold text-[#1B4332]">{name}</p>
      <p className="text-sm text-gray-600">{code}</p>
    </div>
  )
}
