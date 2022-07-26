import { useState } from "react";

import '../scss/initialPart/inputEmail.scss';

export function InputEmail() {
    const [changeLabel, setChangeLabel] = useState(false);

    return(
        <div className="inputButton">
            <input 
                type="email" 
                name="input-email" 
                id="email" 
                autoComplete="email"
                onClick={() => setChangeLabel(!changeLabel)} 
            />

            <label 
                className={changeLabel ? 'clicked' : ''}  
                htmlFor="email"
            >
                Email
            </label>

            <button>Vamos lá</button>
        </div>
    );
}