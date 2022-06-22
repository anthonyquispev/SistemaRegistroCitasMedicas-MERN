import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Usuario_CerrarSesion = () => {
    const { logout } = useAuth0()
    return (
        <div>
            {logout()}
        </div>
    )
}

export default Usuario_CerrarSesion
