import { FastifyInstance } from 'fastify'

export default async function customerRoutes(fastify: FastifyInstance) {
  // Get my profile
  fastify.get(
    '/me',
    { onRequest: [fastify.authenticate] },
    async (request: any, reply) => {
      // TODO: Fetch from database
      return {
        id: 'customer-1',
        email: 'customer@example.com',
        fullName: 'John Doe',
        phoneNumber: '+254712345678',
        walletAddress: '0x1234567890123456789012345678901234567890',
        offChainBalance: 125450,
        mnemonicConfirmed: true,
        createdAt: new Date(),
      }
    }
  )

  // Connect bank account
  fastify.post(
    '/me/bank',
    { onRequest: [fastify.authenticate] },
    async (request: any, reply) => {
      const { bankId, accountNumber } = request.body
      // TODO: Validate input
      // TODO: Create bank connection
      return { message: 'Bank account connected', bankId, accountNumber }
    }
  )

  // Get wallet balance
  fastify.get(
    '/me/wallet/balance',
    { onRequest: [fastify.authenticate] },
    async (request: any, reply) => {
      // TODO: Query smart contract for on-chain balance
      // TODO: Get off-chain balance from database
      return {
        onChainBalance: {
          native: 0.5,
          usdc: 1234.56,
          eacToken: 500,
        },
        offChainBalance: 125450,
        lastUpdated: new Date(),
      }
    }
  )
}
