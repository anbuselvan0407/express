import { body } from 'express-validator';

export const userValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  
  body('age')
    .notEmpty().withMessage('Age is required')
    .isInt({ min: 1 }).withMessage('Age must be a valid number'),

  body('grade')
    .trim()
    .notEmpty().withMessage('Grade is required')
    .isIn(['9th', '10th', '11th', '12th']).withMessage('Grade must be valid')
];
