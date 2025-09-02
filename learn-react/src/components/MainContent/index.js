import{FaCss3Alt} from 'react-icons/fa6'
import { FaApple } from "react-icons/fa6";
function MainContent() {
    let name = 'Nguyễn Đức Anh'
    return (
        <>
            <div className="box">
                <div className="App">
                    Xin chào {name}!
                </div>
                <FaCss3Alt style={{fontSize:"50px"}}/>
                <FaApple/>
            </div>
            
        </>
    )
}

export default MainContent;