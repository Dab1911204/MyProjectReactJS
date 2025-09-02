import { useState } from "react";
function Lamp(){
    const [status,setState] = useState(false);
    const handleClick = () =>{
        setState(!status)
    }
    return(
        <>
            <button onClick={handleClick}>
                {status?"Bật đèn":"Tắt đèn"}
            </button>
            <div>
                {status?"Đèn sáng":"Đèn tắt"}
            </div>
        </>
    )
}

export default Lamp;