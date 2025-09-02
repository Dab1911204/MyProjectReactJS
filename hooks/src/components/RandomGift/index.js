import { useState, useRef } from 'react';

function RandomGift() {
    const gifts = ["Điện thoại", "Máy tính", "Xe máy", "Ô tô", "Xe đạp"]
    const [result, setResult] = useState("")
    const countRef = useRef(0);


    const handelRandom = () => {
        if (countRef.current < 3) {
            const random = Math.floor(Math.random() * gifts.length);
            setResult(gifts[random]);
            console.log(gifts[random]);
            countRef.current++;

        }else{
            alert("Bạn đã hết lượt")
        }

    }

    return (
        <>
            <button onClick={handelRandom}>Random Gift</button>
            <div>Bạn nhận được: {result}</div>
        </>
    )
}

export default RandomGift;