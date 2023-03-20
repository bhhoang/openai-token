import Authenticator from 'src/index'

async function main() {
  const auth = new Authenticator("xxx", "xxx", "127.0.0.1:7890")
  await auth.begin()
  const token = await auth.getAccessToken()
  console.log(token)
}

main()