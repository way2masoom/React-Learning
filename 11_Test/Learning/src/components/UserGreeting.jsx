function UserGreeting(props) {

    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.userName}</h2>
    // }
    // return <h2>Please Login to Continue</h2>
    return (
        props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.userName}</h2> :
            <h2 className="login-msg">Please continue to Login</h2>
    )
}

export default UserGreeting;