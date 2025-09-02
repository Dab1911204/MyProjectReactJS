import { useContext } from 'react';
import { MenuContext } from '../Layout_useContext';
function Menu() {
    const menus = useContext(MenuContext);
    return (
        <>
            {menus.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </>
    )
    
}

export default Menu;