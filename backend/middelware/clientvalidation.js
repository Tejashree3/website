const Joi = require('joi');

const validateClientReview = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    review: Joi.string().required(),
    rating: Joi.number().integer().min(1).max(5).required(),
  });

  return schema.validate(data);
};

module.exports = { validateClientReview };
