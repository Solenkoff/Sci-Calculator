import React from "react";

export default function Buttons({ btnHandler }) {

    return (
        <div className="buttons-wrapper">
            <div className="sci_section">
                <button className="btn sci" onClick={() => btnHandler('!')} ><span class="text">x!</span></button>
                <button className="btn sci" onClick={() => btnHandler('(')} ><span class="text">(</span></button>
                <button className="btn sci" onClick={() => btnHandler(')')} ><span class="text">)</span></button>
                <button className="btn sci" onClick={() => btnHandler('sin')} ><span class="text">sin</span></button>
                <button className="btn sci" onClick={() => btnHandler('cos')} ><span class="text">cos</span></button>
                <button className="btn sci" onClick={() => btnHandler('tan')} ><span class="text">tan</span></button>
                <button className="btn sci" onClick={() => btnHandler('π')} ><span class="text">π</span></button>
                <button className="btn sci" onClick={() => btnHandler('ln')} ><span class="text">ln</span></button>
                <button className="btn sci" onClick={() => btnHandler('√')} ><span class="text">√</span></button>
                <button className="btn sci" onClick={() => btnHandler('e')} ><span class="text">e</span></button>
                <button className="btn sci" onClick={() => btnHandler('log')} ><span class="text">log</span></button>
                <button className="btn sci" onClick={() => btnHandler('^')} >
                    <span class="text">x</span>
                    <span className="sup">y</span>
                </button>
            </div>
            <div className="main-section">
                <button className="btn clear" onClick={() => btnHandler('AC')} ><span class="text">AC</span></button>
                <button className="btn other" onClick={() => btnHandler('BACK')} ><span class="text">⇐</span></button>
                <button className="btn operator" onClick={() => btnHandler('/')} ><span class="text">/</span></button>
                <button className="btn num" onClick={() => btnHandler('7')} ><span class="text">7</span></button>
                <button className="btn num" onClick={() => btnHandler('8')} ><span class="text">8</span></button>
                <button className="btn num" onClick={() => btnHandler('9')} ><span class="text">9</span></button>
                <button className="btn operator" onClick={() => btnHandler('*')} ><span class="text">*</span></button>
                <button className="btn num" onClick={() => btnHandler('4')} ><span class="text">4</span></button>
                <button className="btn num" onClick={() => btnHandler('5')} ><span class="text">5</span></button>
                <button className="btn num" onClick={() => btnHandler('6')} ><span class="text">6</span></button>
                <button className="btn operator" onClick={() => btnHandler('-')} ><span class="text">-</span></button>
                <button className="btn num" onClick={() => btnHandler('1')} ><span class="text">1</span></button>
                <button className="btn num" onClick={() => btnHandler('2')} ><span class="text">2</span></button>
                <button className="btn num" onClick={() => btnHandler('3')} ><span class="text">3</span></button>
                <button className="btn operator" onClick={() => btnHandler('+')} ><span class="text">+</span></button>
                <button className="btn other" onClick={() => btnHandler('.')} ><span class="text">.</span></button>
                <button className="btn num" onClick={() => btnHandler('0')} ><span class="text">0</span></button>
                <button className="btn equal" onClick={() => btnHandler('=')} ><span class="text">=</span></button>
            </div>
        </div>
    );
};
