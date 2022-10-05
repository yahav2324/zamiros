import {body} from 'express-validator';

class expenseValidator {
    checkCreateExpense(){
        return[body("name")
        .notEmpty()
        .withMessage("The name value should not be empty"),
         body("price")
        .notEmpty()
        .withMessage ("The price value should not be empty")];
    }
}

export default new expenseValidator();