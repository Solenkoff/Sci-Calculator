import React from "react";

export default function Display({ expression, result }) {
    return (
        <div className="display">
            <p className="expression">{expression}</p>
            <p className="result">{result}</p>
        </div>
    );
};
