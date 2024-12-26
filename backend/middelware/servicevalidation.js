const Joi = require('joi');

const validateService = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).required(),
    image: Joi.string().required(), // URL or base64 string
  });
  return schema.validate(data);
};

module.exports = { validateService };
