import React from "react";

export default function ButtonsComponent({ btnHandler }) {

    return (
        <div className="buttons_section">
            <div className="sci_section">
                <button className="btn sci" onClick={() => btnHandler('x!')} >x!</button>
                <button className="btn sci" onClick={() => btnHandler('(')} >(</button>
                <button className="btn sci" onClick={() => btnHandler(')')} >)</button>
                <button className="btn sci" onClick={() => btnHandler('sin')} >sin</button>
                <button className="btn sci" onClick={() => btnHandler('cos')} >cos</button>
                <button className="btn sci" onClick={() => btnHandler('tan')} >tan</button>
                <button className="btn sci" onClick={() => btnHandler('π')} >π</button>
                <button className="btn sci" onClick={() => btnHandler('ln')} >ln</button>
                <button className="btn sci" onClick={() => btnHandler('√')} >√</button>
                <button className="btn sci" onClick={() => btnHandler('e')} >e</button>
                <button className="btn sci" onClick={() => btnHandler('log')} >log</button>
                <button className="btn sci" onClick={() => btnHandler('x')} >x
                    <span className="sup">y</span>
                </button>
            </div>
            <div className="main_section">
                <button className="btn clear" onClick={() => btnHandler('AC')} >AC</button>
                <button className="btn other" onClick={() => btnHandler('DEL')} >DEL</button>
                <button className="btn operator" onClick={() => btnHandler('/')} >/</button>
                <button className="btn num" onClick={() => btnHandler('7')} >7</button>
                <button className="btn num" onClick={() => btnHandler('8')} >8</button>
                <button className="btn num" onClick={() => btnHandler('9')} >9</button>
                <button className="btn operator" onClick={() => btnHandler('*')} >*</button>
                <button className="btn num" onClick={() => btnHandler('4')} >4</button>
                <button className="btn num" onClick={() => btnHandler('5')} >5</button>
                <button className="btn num" onClick={() => btnHandler('6')} >6</button>
                <button className="btn operator" onClick={() => btnHandler('-')} >-</button>
                <button className="btn num" onClick={() => btnHandler('1')} >1</button>
                <button className="btn num" onClick={() => btnHandler('2')} >2</button>
                <button className="btn num" onClick={() => btnHandler('3')} >3</button>
                <button className="btn operator" onClick={() => btnHandler('+')} >+</button>
                <button className="btn other" onClick={() => btnHandler('.')} >.</button>
                <button className="btn num" onClick={() => btnHandler('0')} >0</button>
                <button className="btn equal" onClick={() => btnHandler('=')} >=</button>
            </div>
        </div>
    );
};
