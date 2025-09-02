import Header from '../Header_useContext';
import { createContext } from 'react';
export const MenuContext = createContext();

function Layout() {
    
    const menus=[
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ"
    ]
  return (
    <>
        <MenuContext.Provider value={menus}>
            <Header />
        </MenuContext.Provider>
      <div>Main</div>
      <div>Footer</div>
    </>
  );
}

export default Layout;