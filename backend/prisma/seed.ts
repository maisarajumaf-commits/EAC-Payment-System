import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Seed EAC Banks
  const banks = [
    { name: 'Equity Bank', country: 'Kenya', swiftCode: 'EQBLKENA' },
    { name: 'KCB Group', country: 'Kenya', swiftCode: 'KCBLKENX' },
    { name: 'Co-operative Bank', country: 'Kenya', swiftCode: 'COOPKENA' },
    { name: 'CRDB Bank', country: 'Tanzania', swiftCode: 'CORUTZTZ' },
    { name: 'NMB Bank', country: 'Tanzania', swiftCode: 'NMIBTZTZ' },
    { name: 'Stanbic Uganda', country: 'Uganda', swiftCode: 'SBICUGKA' },
    { name: 'Centenary Bank', country: 'Uganda', swiftCode: 'CDOUUGKA' },
    { name: 'Bank of Kigali', country: 'Rwanda', swiftCode: 'BKIGRWRW' },
    { name: 'I&M Bank', country: 'Kenya', swiftCode: 'IMBLKENX' },
    { name: 'Diamond Trust Bank', country: 'Kenya', swiftCode: 'DTKEKENX' },
  ]

  // TODO: Create users and banks in database

  // Seed FX Rates
  const fxRates = [
    { baseCurrency: 'KES', quoteCurrency: 'KES', midRate: 1.0, spread: 0.008 },
    { baseCurrency: 'TZS', quoteCurrency: 'TZS', midRate: 1.0, spread: 0.008 },
    { baseCurrency: 'UGX', quoteCurrency: 'UGX', midRate: 1.0, spread: 0.008 },
    { baseCurrency: 'RWF', quoteCurrency: 'RWF', midRate: 1.0, spread: 0.008 },
    { baseCurrency: 'KES', quoteCurrency: 'USD', midRate: 0.00775, spread: 0.008 },
    { baseCurrency: 'TZS', quoteCurrency: 'USD', midRate: 0.000387, spread: 0.008 },
    { baseCurrency: 'UGX', quoteCurrency: 'USD', midRate: 0.000269, spread: 0.008 },
    { baseCurrency: 'RWF', quoteCurrency: 'USD', midRate: 0.000785, spread: 0.008 },
  ]

  // TODO: Create FX rates in database

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
