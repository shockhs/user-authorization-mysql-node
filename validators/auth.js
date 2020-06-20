const Joi = require('@hapi/joi')

// Register Validation
const registerValidation = (body) => {
    const schema = Joi.object({
        name: Joi.string().required().min(6).max(100),
        password: Joi.string().required().min(6).max(255),
        email: Joi.string().required().email().min(6).max(100)
    })
    return schema.validate(body);
}

// Register Validation
const loginValidation = (body) => {
    const schema = Joi.object({
        password: Joi.string().min(6).max(255).required(),
        email: Joi.string().email().min(6).max(100).required()
    })
    return schema.validate(body);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;