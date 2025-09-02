function Menu() {
    const arrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ"
    ]
    return (
        <>
            {arrayMenu.map((item,index) => {
                return (<li key={index}>{item}</li>) //Luôn cân thuộc tính key trong vòng lặp
            })}
        </>
    )
}

export default Menu;