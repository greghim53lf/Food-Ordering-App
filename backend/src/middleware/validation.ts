import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("addresLine1 must be a string"),
  body("city").isString().notEmpty().withMessage("city must be a string"),
  body("country").isString().notEmpty().withMessage("country must be a string"),
  handleValidationErrors,
];

export const validateStoreRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .notEmpty()
    .withMessage("Delivery Price must be a positive number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .notEmpty()
    .withMessage("Estimated Delivery Time must be a positive integer"),
  body("categories")
    .isArray()
    .withMessage("Categories must be an array")
    .not()
    .isEmpty()
    .withMessage("Categories array cannot be empty"),
  body("menuItems")
    .isArray()
    .withMessage("Menu Items must be an array")
    .not()
    .isEmpty()
    .withMessage("Menu Items cannot be empty"),
  body("menuItems.*.name")
    .isString()
    .notEmpty()
    .withMessage("Menu Item Name must be a string"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .notEmpty()
    .withMessage("Menu Item Price must be a positive number"),
  handleValidationErrors,
];
