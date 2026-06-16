import { FastifyInstance } from 'fastify'

export default async function authRoutes(fastify: FastifyInstance) {
  // Register endpoint
  fastify.post('/register', async (request, reply) => {
    // TODO: Validate input
    // TODO: Hash password with argon2id
    // TODO: Create user in database
    return { message: 'User registered successfully', token: 'jwt-token-here' }
  })

  // Login endpoint
  fastify.post('/login', async (request, reply) => {
    // TODO: Verify credentials
    // TODO: Generate JWT token
    return {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      refreshToken: 'refresh-token-here',
      expiresIn: 900,
    }
  })

  // Refresh token endpoint
  fastify.post('/refresh', async (request, reply) => {
    // TODO: Validate refresh token
    // TODO: Generate new access token
    return { accessToken: 'new-jwt-token' }
  })

  // Logout endpoint
  fastify.post('/logout', { onRequest: [fastify.authenticate] }, async (request, reply) => {
    // TODO: Revoke refresh token in Redis
    return { message: 'Logged out successfully' }
  })
}
