import { memo } from 'react';
function Box(){
    console.log('Render Box')
    return (
        <>  
            Box
        </>
    )
}

export default memo(Box);