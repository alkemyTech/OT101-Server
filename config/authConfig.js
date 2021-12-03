module.exports = {
  'secret': process.env.JWT_SECRET ||  "ThisShouldBeASecretAndShouldntBeInTheRepo",
  'expirationTime': 1000 * 60 * 60 * 24 // 24 hours
}