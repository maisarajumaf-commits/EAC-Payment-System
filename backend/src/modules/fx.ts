import { FastifyInstance } from 'fastify'

export default async function fxRoutes(fastify: FastifyInstance) {
  // Get current FX rates
  fastify.get('/rates', async (request, reply) => {
    // TODO: Fetch from Redis cache or database
    return {
      rates: [
        { base: 'KES', quote: 'USD', rate: 0.00775, updatedAt: new Date() },
        { base: 'TZS', quote: 'USD', rate: 0.000387, updatedAt: new Date() },
        { base: 'UGX', quote: 'USD', rate: 0.000269, updatedAt: new Date() },
        { base: 'RWF', quote: 'USD', rate: 0.000785, updatedAt: new Date() },
      ],
    }
  })

  // Get real-time quote
  fastify.get('/quote', async (request: any, reply) => {
    const { source, destination, amount } = request.query
    // TODO: Validate input
    // TODO: Get live rate
    // TODO: Calculate fees
    const rate = 0.00775
    const feePercentage = 0.008
    const destinationAmount = amount * rate
    const fee = destinationAmount * feePercentage
    return {
      sourceAmount: amount,
      sourceCurrency: source,
      destinationAmount,
      destinationCurrency: destination,
      rate,
      fee,
      feePercentage,
      totalReceived: destinationAmount - fee,
      timestamp: new Date(),
    }
  })
}
