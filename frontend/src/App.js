import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Público
import Publico_Inicio from './componentes/Publico/Publico_Inicio'
import Publico_IniciarSesion from './componentes/Publico/Publico_IniciarSesion'
import Publico_StaffMedico from './componentes/Publico/Publico_StaffMedico'
import Publico_Ubicanos from './componentes/Publico/Publico_Ubicanos'
import Publico_Especialidades from './componentes/Publico/Publico_Especialidades'

// Usuario
import Usuario_MisCitas from './componentes/Usuario/Usuario_MisCitas'
import Usuario_ReservarCita from './componentes/Usuario/Usuario_ReservarCita'
import Usuario_CerrarSesion from './componentes/Usuario/Usuario_CerrarSesion'

// --
import Publico_Navigation from './componentes/Publico/Publico_Navigation'
import Publico_Footer from './componentes/Publico/Publico_Footer'

function App() {
  return (
    <Router>
      <Publico_Navigation />
      <main className="flex-shrink-0">
        <Route path="/" exact component={Publico_Inicio} />
        <Route path="/publico_Especialidades" exact component={Publico_Especialidades} />
        <Route path="/publico_StaffMedico" exact component={Publico_StaffMedico} />
        <Route path="/publico_Ubicanos" exact component={Publico_Ubicanos} />
        <Route path="/publico_IniciarSesion" exact component={Publico_IniciarSesion} />
        <Route path="/usuario_MisCitas/:id" exact component={Usuario_MisCitas} />
        <Route path="/usuario_ReservarCita" exact component={Usuario_ReservarCita} />
        <Route path="/usuario_ReservarCita/:id" exact component={Usuario_ReservarCita} />
        <Route path="/usuario_CerrarSesion" exact component={Usuario_CerrarSesion} />
      </main>
      <Publico_Footer />
    </Router>
  );
}

export default App;
