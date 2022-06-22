import { useAuth0 } from '@auth0/auth0-react'

export const Usuario_Login =()=> {
    const { loginWithRedirect } = useAuth0()
    return (
        <div>
            {loginWithRedirect()}
        </div>
    )
}
export default Usuario_Login