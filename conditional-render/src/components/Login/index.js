function Login() {
    const isLogin = true
    return (
        <>
            {isLogin? (
                <>
                    <div>
                        Thông tin người dùng,nút login
                    </div>
                </>
            ) : (
                <>
                    <div>
                        Nút đăng nhập,Nút đăng ký
                    </div>
                </>
            )}
            {isLogin && <div>Avata</div>}
        </>
    )
}

export default Login;