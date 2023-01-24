


import React from "react";


  export default function Form(props) {
const {onSubmit, onChange, form} = props;
    return (
        <>
        <form onSubmit={onSubmit}>
            <div className="container">
                <div className="inputlabel">
                    <label className="forlabel">Название</label>
                    <input className="forinput" type='text' name='name' value={form.name} onChange={onChange} />
                </div>
                <div className="inputlabel">
                    <label className="forlabel">Временная зона</label>
                    <input className="forinput" type='text' name='timezone' value={form.timezone} onChange={onChange} />
                </div>
                <div className="inputlabel">
                    <button className="button" type='submit'>Добавить</button>
                </div>
            </div>
        </form >
</>
    )
} 





