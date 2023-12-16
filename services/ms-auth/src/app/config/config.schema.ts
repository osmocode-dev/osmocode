import * as Joi from 'joi';

export const configSchema = Joi.object({
  PG_HOST: Joi.string().required(),
  PG_PORT: Joi.number().required(),
  PG_DATABASE: Joi.string().required(),
  PG_USERNAME: Joi.string().required(),
  PG_PASSWORD: Joi.string().required(),
  PG_AUTOLOAD: Joi.boolean().required(),
  PG_SYNCHRONIZE: Joi.boolean().required(),
  JWT_ACCESS_PUBLIC: Joi.string().required(),
  JWT_ACCESS_PRIVATE: Joi.string().required(),
  JWT_ACCESS_TIME: Joi.number().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_REFRESH_TIME: Joi.number().required(),
  // JWT_CONFIRMATION_SECRET: Joi.string().required(),
  // JWT_CONFIRMATION_TIME: Joi.number().required(),
  // JWT_RECOVERY_SECRET: Joi.string().required(),
  // JWT_RECOVERY_TIME: Joi.number().required(),
  // GOOGLE_CLIENT_ID: Joi.string().required(),
  // GOOGLE_CLIENT_SECRET: Joi.string().required(),
  // GOOGLE_CALL_BACK: Joi.string().required(),
  // GITHUB_CLIENT_ID: Joi.string().required(),
  // GITHUB_CLIENT_SECRET: Joi.string().required(),
  // GITHUB_CALL_BACK: Joi.string().required()
});

