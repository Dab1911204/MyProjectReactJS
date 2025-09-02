import { memo } from 'react';
function Box(props){
    const {onCounter,onReset} = props
    console.log('Render Box')
    const handleCounter = () => {
        onCounter()
    }
    const handleReset = () => {
        onReset()
    }
    return (
        <>  
            <button onClick={handleCounter}>Click</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default memo(Box);