


import React from "react";


  export default function Form(prop) {

    return (

        <form onSubmit={prop.onSubmit}>
            <div className="container">
                <div className="inputlabel">
                    <label className="forlabel">Название</label>
                    <input className="forinput" type='text' name='name' value={prop.valueName} onChange={prop.onChange} />
                </div>
                <div className="inputlabel">
                    <label className="forlabel">Временная зона</label>
                    <input className="forinput" type='text' name='timezone' value={prop.valueTimezone} onChange={prop.onChange} />
                </div>
                <div className="inputlabel">
                    <button className="button" type='submit'>Добавить</button>
                </div>
            </div>
        </form >

    )
} 





