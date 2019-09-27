const { prisma } = require('./generated/prisma-client')

async function main() {
    // Read all users
    const allUsers = await prisma.users()
    console.log(allUsers)

  // Create a new user
  // const newUser = await prisma.createUser({ name: 'Medusa', email: 'gg@stonegaze.com' })
  // console.log(`Created new user: ${newUser.name}`)

  // Update a user
//   const updatedUser = await prisma.updateUser({
//     where: { id: '5d87099724aa9a0008a2108f' },
//     data: { name: 'Riki' },
//   })
//   console.log(`Updated user: ${updatedUser.name}`)

}
main().catch(e => console.error(e))

/*
docker-compose up -d
prisma deploy
prisma generate
node index.js
playground - http://localhost:4466/
*/
