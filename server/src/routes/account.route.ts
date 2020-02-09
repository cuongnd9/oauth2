import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { checkRole, withController } from '../components';
import { roles } from '../components/constants';
import controller from '../controllers/account.controller';

const router = express.Router();

router.get(
  '/authentication/facebook',
  // checkRole(roles.admin, roles.manager, roles.staff),
  celebrate({
    query: {
      authorizationCode: Joi.string().required(),
      redirectUri: Joi.string().required()
    }
  }),
  withController(controller.authenticateFacebook),
);


export default router;
