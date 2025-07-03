import AuthenticationForm from "./AuthenticationForm";

export default function Login(){
    return (
        <>
            <h3>Login</h3>
            <AuthenticationForm url="/users/login" />
        </>
    )
}