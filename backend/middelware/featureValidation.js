const Joi = require('joi');

const featureValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.string().required(),
    tag: Joi.string().required(),
    location: Joi.string().required(),
    size: Joi.string().required(),
    bed: Joi.number().required(),
    bath: Joi.number().required(),
    list1: Joi.string().required(),
    list2: Joi.string().required(),
    list3: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = featureValidation;
