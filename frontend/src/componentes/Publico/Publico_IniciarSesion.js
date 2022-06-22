import React from 'react';
import Usuario_Login from '../Usuario/Usuario_Login'
import Usuario_VerificarCorreo from '../Usuario/Usuario_VerificarCorreo'
import Publico_Inicio from '../Publico/Publico_Inicio'

import { useAuth0 } from '@auth0/auth0-react'

function Publico_IniciarSesion() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    if (isLoading)
        return  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading ...</span>
                    </div>
                </div>
                
    return (
        <div>
            {
                isAuthenticated ?
                    user.email_verified ?
                        <Publico_Inicio />
                        : <Usuario_VerificarCorreo />
                    : <Usuario_Login />
            }
        </div>
    );
}

export default Publico_IniciarSesion;
