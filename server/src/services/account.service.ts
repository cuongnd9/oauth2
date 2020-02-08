import AccountEntity from "../entities/account.entity";
import { request } from "../components";
import config from "../components/config";

function getFacebookAccessToken(authorizationCode: string) {
  const facebookParams = {
    client_id: config.facebook.clientId,
    redirect_uri: config.facebook.redirectUri,
    client_secret: config.facebook.clientSecret,
    code: authorizationCode
  };
  const url = 'https://graph.facebook.com/v6.0/oauth/access_token';
  return request(url, {
    params: facebookParams
  });
}

function getFacebookUserData(accessToken: string) {
  const url = 'https://graph.facebook.com/me';
  return request(url, {
    params: {
      fields: ['id', 'email', 'first_name', 'last_name'].join(','),
      access_token: accessToken,
    }
  })
}

async function authenticateFacebook({ authorizationCode }: { authorizationCode: string }) {
  const { access_token: accessToken } = await getFacebookAccessToken(authorizationCode);
  const userData = await getFacebookUserData(accessToken);
  const existsAccount = await AccountEntity.findOne({ facebook: userData.id, email: userData.email });
  if (existsAccount) {
    existsAccount.token = {
      ...existsAccount.token,
      facebook: accessToken
    }
    await AccountEntity.save(existsAccount);
  } else {
    const newAccount = AccountEntity.create({
      email: userData.email,
      name: `${userData.first_name} ${userData.last_name}`,
      facebook: userData.id,
      token: {
        facebook: accessToken
      }
    })
    await AccountEntity.save(newAccount);
  }
  // TODO: handle JWT
  // ................
  // ................
  // ................
  return 'authenticated';
}

export default {
  authenticateFacebook
};
