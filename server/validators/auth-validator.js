const z = require("zod");

// creating an object schema

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(11, { message: "Email must be at lest of 11 characters." })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be at lest of 5 characters." })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "Phone must be at lest of 10 characters." })
    .max(12, { message: "Phone must not be more than 12 characters" }),
});

module.exports = { signupSchema, loginSchema };
