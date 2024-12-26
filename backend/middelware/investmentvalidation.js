const Joi = require('joi');

const validateInvestment = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    tag: Joi.string().required(),
    price: Joi.string().required(),
    rating: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validate: validateInvestment };
