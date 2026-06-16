# Blockchain-Based Cross-Border Payment System for East Africa

**A production-grade DeFi payment rail combining smart contracts, on-chain wallets, and a tamper-proof ledger for seamless cross-border transactions across the East African Community.**

## 🌍 Project Overview

This system enables instant, low-cost cross-border payments across East Africa by leveraging blockchain settlement, non-custodial wallets, and FX optimization. It maintains the familiar M-Pesa-meets-Wise interface while providing true decentralization and transparency.

### Supported Countries & Currencies
- 🇰🇪 Kenya — KES
- 🇹🇿 Tanzania — TZS
- 🇺🇬 Uganda — UGX
- 🇷🇼 Rwanda — RWF
- 🇧🇮 Burundi — BIF
- 🇸🇸 South Sudan — SSP
- 🇨🇩 DR Congo — CDF
- 🇸🇴 Somalia — SOS

## 🏗️ Architecture Overview

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────���───┐
│   Frontend      │◄────────►│   Backend API    │◄────────►│  Smart Contract │
│  (React 18)     │         │  (Fastify)       │         │   (Polygon)     │
└─────────────────┘         └──────────────────┘         └─────────────────┘
        │                           │                             │
        │                    ┌──────▼────────┐                    │
        │                    │  PostgreSQL   │                    │
        │                    │   Database    │                    │
        │                    └───────────────┘                    │
        │                           │                             │
        │                    ┌──────▼────────┐                    │
        │                    │     Redis     │                    │
        └────────────────────┼─(Sessions)────┼────────────────────┘
                             └───────────────┘
```

## 📦 Monorepo Structure

```
eac-payment-system/
├── frontend/               # React 18 + TypeScript + Vite
├── backend/                # Node.js 20 + Fastify + TypeScript
├── contracts/              # Solidity smart contracts (Hardhat)
├── shared/                 # Shared types & utilities
├── docs/                   # Documentation
├── .github/                # CI/CD workflows
├── docker-compose.yml      # Local development stack
├── package.json            # Root package
├── README.md              # This file
└── LICENSE                # MIT License
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20 LTS
- PostgreSQL 16
- Redis 7
- Docker & Docker Compose
- pnpm (preferred) or npm

### One-Command Setup

```bash
# Clone repository
git clone https://github.com/maisarajumaf-commits/EAC-Payment-System.git
cd EAC-Payment-System

# Install dependencies
pnpm install

# Start services
docker-compose up -d

# Run migrations
cd backend && pnpm db:migrate dev
cd ..

# Start development (in separate terminals)
pnpm dev
```

**Access Points:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- API Docs: http://localhost:3000/docs
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## 🔐 Smart Contracts

### Contracts Included
1. **EACSettlement.sol** - Core payment settlement contract
2. **EACWalletFactory.sol** - Non-custodial wallet factory
3. **CustomerWallet.sol** - Per-customer smart wallet
4. **EACToken.sol** - Regional stablecoin (optional)

### Deploy to Testnet (Amoy)

```bash
cd contracts
pnpm hardhat run scripts/deploy.ts --network amoy
```

### Deploy to Mainnet (Polygon)

```bash
cd contracts
pnpm hardhat run scripts/deploy.ts --network polygon
```

## 📡 API Endpoints

### Authentication (`/api/v1/auth`)
- `POST /register` — Register user
- `POST /login` — Login (JWT + refresh token)
- `POST /refresh` — Rotate tokens
- `POST /logout` — Logout

### Transactions (`/api/v1/transactions`)
- `POST /` — Initiate payment
- `GET /` — List transactions
- `GET /:id` — Transaction details
- `POST /:id/confirm` — Confirm payment

### FX Rates (`/api/v1/fx`)
- `GET /rates` — Current rates
- `GET /quote` — Real-time quote

### Banks (`/api/v1/banks`)
- `GET /` — List all banks
- `POST /` — Register bank
- `GET /:id/customers` — Bank's customers

### Customers (`/api/v1/customers`)
- `GET /me` — My profile
- `POST /me/bank` — Connect bank
- `GET /me/wallet/balance` — Wallet balance

## 🗂️ Database Schema (Key Tables)

- **users** — Authentication (email, password_hash, role)
- **customers** — Customer profiles + wallet_address
- **banks** — Bank info + relayer_address
- **transactions** — Payment records + on_chain_tx_hash
- **blockchain_blocks** — Tamper-proof ledger
- **fx_rates** — EAC currency pairs
- **wallet_events** — On-chain wallet activity
- **audit_logs** — Append-only activity log

## 🔄 Background Jobs (BullMQ)

- **fx-refresh** — Every 15 min: fetch & update FX rates
- **chain-verify** — Every 5 min: re-hash blocks, detect tampering
- **relayer-broadcast** — Submit signed transactions to blockchain
- **webhook-retry** — Retry failed inbound webhooks

## 💻 Technology Stack

### Frontend
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Zustand (state management)
- TanStack Query (data fetching)
- ethers.js v6 (Web3)
- Recharts (charts)
- Socket.IO (real-time)

### Backend
- Node.js 20 LTS
- Fastify v4 (framework)
- Prisma (ORM)
- PostgreSQL 16 (database)
- Redis 7 (cache & queue)
- BullMQ (job queue)
- TypeScript (strict mode)
- JWT (authentication)

### Smart Contracts
- Solidity 0.8.20
- Hardhat (framework)
- OpenZeppelin Contracts v5
- ethers.js (deployment)
- Polygon PoS (mainnet) / Amoy (testnet)

## 🔐 Security Features

✅ **Encryption**
- AES-256-GCM for private key storage (client-side)
- PBKDF2 key derivation (310,000 iterations)
- TLS 1.3 for all API calls

✅ **Authentication**
- Argon2id password hashing
- JWT with 15-min access + 7-day refresh tokens
- httpOnly cookies for refresh tokens
- Rate limiting on auth endpoints

✅ **Authorization**
- Role-based access control (CUSTOMER, BANK)
- On-chain role enforcement via OpenZeppelin AccessControl

✅ **Data Integrity**
- Blockchain tamper detection (re-hashing every 5 min)
- Audit logging for all mutations
- ERC-712 typed data signing for transactions

✅ **Network Security**
- Helmet.js CSP, HSTS, X-Frame-Options headers
- CORS allowlisting
- Input validation with AJV schemas
- HMAC verification on webhooks

## 📊 Performance Targets

- **API P95 Latency:** < 200ms (reads), < 500ms (writes)
- **Availability:** 99.5% SLA
- **Block Time:** < 2 seconds (Polygon PoS)
- **Database Replication Lag:** < 100ms

## 🧪 Testing

```bash
# Backend unit tests
cd backend && pnpm test

# Backend integration tests
cd backend && pnpm test:integration

# Contract tests
cd contracts && pnpm test

# Contract coverage
cd contracts && pnpm test:coverage

# All tests with coverage
pnpm test:coverage
```

## 🚢 Deployment

### CI/CD Pipeline
GitHub Actions automatically:
1. Lint (ESLint, Prettier)
2. Run tests
3. Contract security analysis (Slither)
4. Build Docker images
5. Deploy to staging/production

### Environment Separation
- **Development:** Local docker-compose, Amoy testnet
- **Staging:** Cloud PaaS, Amoy testnet
- **Production:** Multi-region, Polygon mainnet

### Deploy with Docker

```bash
# Build images
docker-compose build

# Run production stack
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
# Server
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/eac_payment

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Blockchain
ACTIVE_BLOCKCHAIN_NETWORK=amoy
AMOY_RPC_URL=https://rpc-amoy.polygon.technology/
POLYGON_RPC_URL=https://polygon-rpc.com/
RELAYER_PRIVATE_KEY=0x...
RELAYER_ADDRESS=0x...

# Smart Contract Addresses
AMOY_EAC_SETTLEMENT_ADDRESS=0x...
AMOY_EAC_WALLET_FACTORY_ADDRESS=0x...

# FX Rates
FX_PROVIDER=openexchangerates
FX_API_KEY=your-api-key

# Frontend
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_WS_URL=ws://localhost:3000
```

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md) — System design & components
- [API Reference](./docs/API.md) — Complete endpoint documentation
- [Database Schema](./docs/DATABASE.md) — Data model details
- [Security Guide](./docs/SECURITY.md) — Security practices
- [Deployment Guide](./docs/DEPLOYMENT.md) — Production deployment
- [Smart Contracts](./contracts/README.md) — Contract documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- ESLint for linting
- Prettier for formatting
- TypeScript strict mode
- 100% branch coverage on critical paths

## 📄 License

MIT License — see [LICENSE](./LICENSE) file for details

## 📞 Support & Contact

- 📧 **Email:** support@eacpayment.com
- 💬 **Discord:** [Join Community](https://discord.gg/eacpayment)
- 🐦 **Twitter:** [@EACPayment](https://twitter.com/eacpayment)
- 📖 **Docs:** https://docs.eacpayment.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/maisarajumaf-commits/EAC-Payment-System/issues)

## 🙏 Acknowledgments

- Built for the East African Community
- Powered by Polygon & Ethereum
- Inspired by M-Pesa & Wise

---

**Built with ❤️ for East Africa | Powered by Blockchain**

Last updated: June 2026
