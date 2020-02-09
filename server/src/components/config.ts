const config: any = {
  port: process.env.PORT || 7000,
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY || 'nodekit',
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    expiresIn: process.env.JWT_EXPIRES_IN || '30m'
  },
  facebook: {
    clientId: process.env.FACEBOOK_APP_ID || '470273657002952',
    clientSecret: process.env.FACEBOOK_APP_SECRET || 'a085b41f3a828c22a6ffc6782607213f'
  }
};

export default config;
