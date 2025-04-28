const parseEnv = () => {
  const env = []
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) {
      env.push(`${key}=${value}`)
    }
  }
  console.log(env.join("; "))
}

parseEnv()
