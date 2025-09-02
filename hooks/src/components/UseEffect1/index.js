import { useEffect } from "react";
function UseEffect1() {
    useEffect(() => {
        let listItem = document.querySelector("ul li")
        console.log(listItem)
    })
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )

}

export default UseEffect1;