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
        } else {
            setExpression(expression + actionSymbol);
            setShowExpression(showExpression + actionSymbol);
        }
    }

   
    return (
        <>
            <Display expression={showExpression} result={result} />
            <Buttons btnHandler={btnHandler} />
        </>
    );
};

