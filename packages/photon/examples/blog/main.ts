import { Photon } from './@generated/photon'

async function main() {
  const photon = new Photon()

  const bars = await photon.users.findMany({
    where: {
      posts: {
        some: {
          author: {
            AND: {
              id: '5',
              posts: {
                some: {
                  author: {
                    posts: {
                      some: {
                        title: '5',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })
  console.log(bars)
  photon.disconnect()
}

main().catch(e => {
  console.error(e)
})
