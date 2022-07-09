import { useState } from "react";

import { Plus } from "./Plus";
import { Close } from "./Close";

export function Question(props) {
    const [showResponse, setShowResponse] = useState(false);

    return(
        <div className="questionAnswer">
            <div className="question" onClick={() => setShowResponse(!showResponse)}>
                <button>
                    {props.question}
                    
                    {
                        showResponse ? <Close /> : <Plus />
                    }
                   
                </button>
            </div>

            {
                showResponse ? (
                    <div className="response">
                        <p>{props.response}</p>
                    </div>
                ) :
                    ''
            }
        </div>
    );
}