import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import jwt from '@fastify/jwt'
import rateLimit from '@fastify/rate-limit'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import pino from 'pino'

// Routes
import authRoutes from './modules/auth.js'
import transactionRoutes from './modules/transactions.js'
import fxRoutes from './modules/fx.js'
import customerRoutes from './modules/customers.js'
import bankRoutes from './modules/banks.js'

const logger = pino()
const fastify = Fastify({ logger })

// Register plugins
await fastify.register(cors, { origin: true })
await fastify.register(helmet)
await fastify.register(jwt, { secret: process.env.JWT_SECRET || 'dev-secret-key' })
await fastify.register(rateLimit, { max: 100, timeWindow: '15 minutes' })

// Swagger documentation
await fastify.register(swagger, {
  swagger: {
    info: {
      title: 'EAC Payment System API',
      description: 'Cross-border payment API for East Africa',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Development' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
})

await fastify.register(swaggerUi, {
  routePrefix: '/docs',
})

// Health check
fastify.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

// Register routes
await fastify.register(authRoutes, { prefix: '/api/v1/auth' })
await fastify.register(transactionRoutes, { prefix: '/api/v1/transactions' })
await fastify.register(fxRoutes, { prefix: '/api/v1/fx' })
await fastify.register(customerRoutes, { prefix: '/api/v1/customers' })
await fastify.register(bankRoutes, { prefix: '/api/v1/banks' })

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    console.log('\n🚀 Server running on http://localhost:3000')
    console.log('📚 API docs available at http://localhost:3000/docs\n')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
