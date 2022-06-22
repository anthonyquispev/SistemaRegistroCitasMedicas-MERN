import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import axios from 'axios'
const Usuario_ReservarCita_Contenido = (props) => {
    const defaultValue = {
        year: 2021,
        month: 9,
        day: 9,
    };
    const [selectedDay, setSelectedDay] = useState(defaultValue);
    const [diasDisponibles, setDiasDisponibles] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [medicoSeleccionado, setMedicoSeleccionado] = useState('')
    const [medicoSeleccionadoCompleto, setMedicoSeleccionadoCompleto] = useState([])
    const [especialidades, setEspecialidades] = useState([]);
    const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState('')
    const [medicoSeleccionadoHorarios, setMedicoSeleccionadoHorarios] = useState([])

    useEffect(() => {
        async function data() {
            const res = await axios.get('http://localhost:4000/api/medicos');
            setMedicos(res.data.map(m => m.nombres));
            setMedicoSeleccionado(res.data[0].nombres);

            setMedicoSeleccionadoCompleto(res.data[0]);

            const res2 = await axios.get('http://localhost:4000/api/especialidades');

            setDiasDisponibles(res.data[0].diasDisponibles);

            // Verificar si el día seleccionado corresponde a un día disponible por el médico
            const tempMedicoSeleccionadoHorarios = [];
            let indice2 = 0;
            for (let i = 0; i < res.data[0].diasDisponibles.length; i++) {
                if ((selectedDay.year === res.data[0].diasDisponibles[i].year) &&
                    (selectedDay.month === res.data[0].diasDisponibles[i].month) &&
                    (selectedDay.day === res.data[0].diasDisponibles[i].day)) {
                    for (let j = 0; j < res.data[0].diasDisponibles[i].horarios.length; j++) {
                        if (res.data[0].diasDisponibles[i].horarios[j].disponible === true) {
                            tempMedicoSeleccionadoHorarios[indice2] = res.data[0].diasDisponibles[i].horarios[j];
                            indice2++;
                        }
                    }
                    break;
                }
            }
            setMedicoSeleccionadoHorarios(tempMedicoSeleccionadoHorarios);

            setEspecialidades(res2.data.map(r => r.especialidad));
            setEspecialidadSeleccionada(res2.data[0].especialidad);

        }
        data();

    }, []);

    async function handleChange(e) {
        setMedicoSeleccionado(e.target.value);
        const res = await axios.get('http://localhost:4000/api/medicos/' + e.target.value);
        setMedicoSeleccionadoCompleto(res.data[0]);

        setDiasDisponibles(res.data[0].diasDisponibles);

        const tempMedicoSeleccionadoHorarios = [];
        let indice2 = 0;
        for (let i = 0; i < res.data[0].diasDisponibles.length; i++) {
            if ((selectedDay.year === res.data[0].diasDisponibles[i].year) &&
                (selectedDay.month === res.data[0].diasDisponibles[i].month) &&
                (selectedDay.day === res.data[0].diasDisponibles[i].day)) {
                for (let j = 0; j < res.data[0].diasDisponibles[i].horarios.length; j++) {
                    if (res.data[0].diasDisponibles[i].horarios[j].disponible === true) {
                        tempMedicoSeleccionadoHorarios[indice2] = res.data[0].diasDisponibles[i].horarios[j];
                        indice2++;
                    }
                }
                break;
            }
        }
        setMedicoSeleccionadoHorarios(tempMedicoSeleccionadoHorarios);

    };

    async function horarioBoton(e) {
        // Crear cita
        const nuevaCita = {
            correo: props.correo,
            medico: medicoSeleccionado,
            especialidad: medicoSeleccionadoCompleto.especialidad,
            fecha: selectedDay,
            hora: e.target.value,
            atendido: false
        }
        await axios.post('http://localhost:4000/api/citas', nuevaCita);

        // Modificación de la hora
        const medicoActual = medicoSeleccionadoCompleto;
        for (let i = 0; i < medicoActual.diasDisponibles.length; i++) {
            if ((selectedDay.year === medicoActual.diasDisponibles[i].year) &&
                (selectedDay.month === medicoActual.diasDisponibles[i].month) &&
                (selectedDay.day === medicoActual.diasDisponibles[i].day)) {
                for (let j = 0; j < medicoActual.diasDisponibles[i].horarios.length; j++) {
                    if (medicoActual.diasDisponibles[i].horarios[j].hora === e.target.value) {
                        medicoActual.diasDisponibles[i].horarios[j].disponible = false;
                        await axios.put('http://localhost:4000/api/medicos/' + medicoActual._id, medicoActual);
                        window.location.href = '/';
                        // break;
                    }
                }
            }
        }
    }

    function cambio(e) {
        setSelectedDay(e);

        const tempMedicoSeleccionadoHorarios = [];
        let indice2 = 0;
        for (let i = 0; i < diasDisponibles.length; i++) {
            if ((e.year === diasDisponibles[i].year) &&
                (e.month === diasDisponibles[i].month) &&
                (e.day === diasDisponibles[i].day)) {
                for (let j = 0; j < diasDisponibles[i].horarios.length; j++) {
                    if (diasDisponibles[i].horarios[j].disponible === true) {
                        tempMedicoSeleccionadoHorarios[indice2] = diasDisponibles[i].horarios[j];
                        indice2++;
                    }
                }
                break;
            }
        }
        setMedicoSeleccionadoHorarios(tempMedicoSeleccionadoHorarios);
    }

    return (
        <div className="container-fluid row px-5 py-4">

            <div className="col-md-6 p-3">
                <div>
                    <h5 className="ps-2"><b>Médico: </b> </h5>
                </div>
                <select
                    className="form-select"
                    name="medicoSeleccionado"
                    onChange={handleChange}
                    value={medicoSeleccionado}
                >
                    {
                        medicos.map(med =>
                            <option key={med} value={med}>
                                {med}
                            </option>
                        )
                    }
                </select>
            </div>

            <div className="col-md-6 p-3">
                <div>
                    <h5 className="ps-2"><b>Especialidad: </b> </h5>
                </div>
                <div className="ps-3 pt-1">
                    {medicoSeleccionadoCompleto.especialidad}
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-6">
                    <Calendar
                        className="m-auto"
                        value={selectedDay}
                        onChange={cambio}
                        shouldHighlightWeekends
                        customDaysClassName={
                            diasDisponibles
                        }
                    />
                </div>
                <div className="col-md-6">
                    <div className="row pt-5 m-auto">
                        {
                            medicoSeleccionadoHorarios.map(m =>
                                <div className="col-md-3 p-2">
                                    <div className="card">
                                        <button className="btn btn-success" value={m.hora} onClick={horarioBoton}>
                                            {m.hora}
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};
export default Usuario_ReservarCita_Contenido;