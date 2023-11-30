function ConditionalRendering({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <p>歡迎，已登入使用者！</p>
            ) : (
                <p>請登入以繼續操作。</p>
            )}
        </div>
    );
}
