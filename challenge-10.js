(
    function() {
        var five = Number('5');
        console.log( five + ' é número?', typeof five === 'number' );

        var concat = String(10) + 10;
        console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

        var operation = {
            '+': function(num1, num2) {return num1 + num2},
            '-': function(num1, num2) {return num1 - num2},
            '*': function(num1, num2) {return num1 * num2},
            '/': function(num1, num2) {return num1 / num2},
            '%': function(num1, num2) {return num1 % num2},
        };

        function isOperatorValid(oper) {
            return Boolean(operation[oper]);
        }

        function calculator(oper){
            if (isOperatorValid(oper)) {
                return function(num1, num2){
                    if (typeof(num1) === 'number' && typeof(num2) === 'number'){
                        return operation[oper](num1, num2);
                    }
                    return false;
                };
            }
            return false;
        }

        function showOperationMessage(oper, num1, num2){
            return `A operação ${num1} ${oper} ${num2} =`;
        }

        function showErrorMessage(oper){
            if (!isOperatorValid(oper)) {
                return `Operação ${oper} não permitida!`;
            }
        }

        var number1 = 10;
        var number2 = 2;
        var operationSignal = '+';
        var sum = calculator(operationSignal);

        if (sum) {
            console.log(showOperationMessage(
                operationSignal, number1, number2), 
                sum(number1, number2)); 
        } else {
            console.log(showErrorMessage(operationSignal));
        }

        var number1 = 10;
        var number2 = 2;
        var operationSignal = '-';
        var subtraction = calculator(operationSignal);

        if (subtraction) {
            console.log(showOperationMessage(
                operationSignal, number1, number2), 
                subtraction(number1, number2)); 
        } else {
            console.log(showErrorMessage(operationSignal));
        }

        var number1 = 10;
        var number2 = 2;
        var operationSignal = '*';
        var division = calculator(operationSignal);

        if (division) {
            console.log(showOperationMessage(
                operationSignal, number1, number2), 
                division(number1, number2)); 
        } else {
            console.log(showErrorMessage(operationSignal));
        }

        var number1 = 10;
        var number2 = 2;
        var operationSignal = '/';
        var multiplication = calculator(operationSignal);

        if (multiplication) {
            console.log(showOperationMessage(
                operationSignal, number1, number2), 
                multiplication(number1, number2)); 
        } else {
            console.log(showErrorMessage(operationSignal));
        }
        
        var number1 = 10;
        var number2 = 2;
        var operationSignal = '%';
        var mod = calculator(operationSignal);

        if (mod) {
            console.log(showOperationMessage(
                operationSignal, number1, number2), mod(number1, number2)); 
        } else {
            console.log(showErrorMessage(operationSignal));
        }

        var number1 = 10;
        var number2 = 2;
        var operationSignal = 'q';
        var invalid = calculator(operationSignal);

        if (invalid) {
            console.log(showOperationMessage(
                operationSignal, number1, number2), 
                invalid(number1, number2)); 
        } else {
            console.log(showErrorMessage(operationSignal));
        }        

    }
)();