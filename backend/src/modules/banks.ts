import { FastifyInstance } from 'fastify'

export default async function bankRoutes(fastify: FastifyInstance) {
  // List all banks
  fastify.get('/', async (request, reply) => {
    // TODO: Fetch from database
    return {
      banks: [
        {
          id: 'bank-1',
          name: 'Equity Bank',
          country: 'Kenya',
          swiftCode: 'EQBLKENA',
          logo: 'https://example.com/equity-bank-logo.png',
        },
        {
          id: 'bank-2',
          name: 'KCB Group',
          country: 'Kenya',
          swiftCode: 'KCBLKENX',
          logo: 'https://example.com/kcb-logo.png',
        },
      ],
      total: 2,
    }
  })

  // Register new bank
  fastify.post(
    '/',
    { onRequest: [fastify.authenticate] },
    async (request: any, reply) => {
      const { name, country, swiftCode } = request.body
      // TODO: Validate input
      // TODO: Create bank in database
      return { id: 'bank-new', name, country, swiftCode, message: 'Bank registered' }
    }
  )

  // Get bank's customers
  fastify.get(
    '/:id/customers',
    { onRequest: [fastify.authenticate] },
    async (request: any, reply) => {
      const { id } = request.params
      // TODO: Fetch customers linked to this bank
      return {
        bankId: id,
        customers: [
          { id: 'cust-1', name: 'John Doe', email: 'john@example.com', accountNumber: '1234567890' },
          { id: 'cust-2', name: 'Jane Smith', email: 'jane@example.com', accountNumber: '0987654321' },
        ],
        total: 2,
      }
    }
  )

  // Link correspondent bank
  fastify.post(
    '/:id/intermediary',
    { onRequest: [fastify.authenticate] },
    async (request: any, reply) => {
      const { id } = request.params
      const { correspondentBankId } = request.body
      // TODO: Create link in database
      return { bankId: id, correspondentBankId, message: 'Correspondent bank linked' }
    }
  )
}
