import { Request } from 'express';
import service from '../services/account.service';

function authenticateFacebook(req: Request) {
  return service.authenticateFacebook(req.query);
}

export default {
  authenticateFacebook
}
