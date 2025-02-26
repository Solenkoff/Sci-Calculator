import React, { useState } from "react";

import Buttons from "./Buttons";
import Display from "./Display";

export default function Calculator() {
    const [expression, setExpression] = useState('');
    const [showExpression, setShowExpression] = useState('');
    const [result, setResult] = useState('0');

    const calcOptions = {
        "√": "Math.sqrt",
        "^": "**",
        log: "Math.log10",
        ln: "Math.log",
        sin: "Math.sin",
        cos: "Math.cos",
        tan: "Math.tan",
        π: "Math.PI",
        e: "Math.E",
    };

    function btnHandler(actionSymbol) {
        if (calcOptions.hasOwnProperty(actionSymbol)) {
            setShowExpression(showExpression + actionSymbol);
            setExpression(expression + calcOptions[actionSymbol]);
        } else if (actionSymbol === "!") {
            const numToFactorial = getNumToFactorial(expression);
            if (numToFactorial != null) {
                const num = parseFloat(numToFactorial);
                setShowExpression(showExpression + actionSymbol);
                setExpression(expression.replace(numToFactorial, getFactorial(num)));
            }
        } else if (actionSymbol === "=") {
            evalAndSetExpression();
        } else if (actionSymbol === 'BACK') {
            setShowExpression(showExpression.slice(0, -1));
            setExpression(expression.slice(0, -1));
        } else if (actionSymbol === 'AC') {
            setExpression('');
            setShowExpression('');
            setResult('0');
        } else {
            setExpression(expression + actionSymbol);
            setShowExpression(showExpression + actionSymbol);
        }
    }


    function evalAndSetExpression() {
        if (expression.length === 0) {
            setResult('Error!');
        } else {
            try {
                let calculation = eval(expression);
                calculation = parseFloat(calculation.toFixed(7));
                setResult(calculation);
            } catch (error) {
                setResult('Error!');
            }
        }
    }

    function getNumToFactorial(exp) {
        const allNumsInExpression = exp.match(/\d+/g);
        const numToFactorial = allNumsInExpression ? allNumsInExpression[allNumsInExpression.length - 1] : null;

        return numToFactorial;
    }

    function getFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        return result;
    }


    return (
        <div className="calc-background">
            <div className="calc-wrapper">
                <Display expression={showExpression} result={result} />
                <Buttons btnHandler={btnHandler} />
            </div>
        </div>

    );
};

