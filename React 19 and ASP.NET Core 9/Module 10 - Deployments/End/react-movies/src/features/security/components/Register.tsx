import AuthenticationForm from "./AuthenticationForm";

export default function Register(){
    return (
        <>
            <h3>Register</h3>
            <AuthenticationForm url="/users/register" />
        </>
    )
}