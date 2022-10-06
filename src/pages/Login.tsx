import Wrapper from "components/Wrapper";
import GoogleLoginButton from "components/GoogleLoginButton";

function Login() {
    return (
        <Wrapper className="flex flex-row items-center justify-center bg-gray-100">
            <GoogleLoginButton />
        </Wrapper>
    );
}

export default Login;
