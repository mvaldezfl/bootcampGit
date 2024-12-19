import axios from "axios";
import GLOBAL from "../../helpers/globals";

const server = GLOBAL.server;

import {
  OBTENER_CITAS,
  OBTENER_CITAS_SUCCESS,
  OBTENER_CITAS_FAIL,
  OBTENER_ESTADO_CITAS,
  OBTENER_ESTADO_CITAS_SUCCESS,
  OBTENER_ESTADO_CITAS_FAIL,
  OBTENER_ESTADO_COBRO_CITAS,
  OBTENER_ESTADO_COBRO_CITAS_SUCCESS,
  OBTENER_ESTADO_COBRO_CITAS_FAIL,
  OBTENER_CITA_ID,
  OBTENER_CITA_ID_SUCCESS,
  OBTENER_CITA_ID_FAIL,
  CONFIMAR_DATOS,
  CONFIMAR_DATOS_SUCCESS,
  CONFIMAR_DATOS_FAIL,
  EDITAR_CITA,
  EDITAR_CITA_SUCCESS,
  EDITAR_CITA_FAIL,
  LISTAR_PACIENTES_CITAS,
  LISTAR_PACIENTES_CITAS_SUCCESS,
  LISTAR_PACIENTES_CITAS_FAIL,
  CANCELAR_CITAS,
  CANCELAR_CITAS_SUCCESS,
  CANCELAR_CITAS_FAIL,
  OBTENER_PACIENTE_CITA,
  OBTENER_PACIENTE_CITA_SUCCESS,
  OBTENER_PACIENTE_CITA_FAIL,
  AGREGAR_SIGNOS_VITALES_,
  AGREGAR_SIGNOS_VITALES_SUCCESS_,
  AGREGAR_SIGNOS_VITALES_FAIL_,
  OBTENER_SIGNOS_VITALES_PACIENTE,
  OBTENER_SIGNOS_VITALES_PACIENTE_SUCCESS,
  OBTENER_SIGNOS_VITALES_PACIENTE_FAIL,
  GUARDAR_CITA,
  GUARDAR_CITA_SUCCESS,
  GUARDAR_CITA_FAIL,
  LISTAR_PACIENTES_RECETAS,
  LISTAR_PACIENTES_RECETAS_SUCCESS,
  LISTAR_PACIENTES_RECETAS_FAIL,
  OBTENER_RECETA_PACIENTE,
  OBTENER_RECETA_PACIENTE_SUCCESS,
  OBTENER_RECETA_PACIENTE_FAIL,
  EMITIR_ORDEN_ASEGURADORA,
  EMITIR_ORDEN_ASEGURADORA_SUCCESS,
  EMITIR_ORDEN_ASEGURADORA_FAIL,
  ENVIAR_LINK_PAGO,
  ENVIAR_LINK_PAGO_SUCCESS,
  ENVIAR_LINK_PAGO_FAIL,
  OBTENER_INFO_PAGO,
  OBTENER_INFO_PAGO_SUCCESS,
  OBTENER_INFO_PAGO_FAIL,
  GENERAR_LINKPAY,
  GENERAR_LINKPAY_SUCCESS,
  GENERAR_LINKPAY_FAIL,
  OBTENER_DETALLE_PAGO_CONSULTA,
  OBTENER_DETALLE_PAGO_CONSULTA_SUCCESS,
  OBTENER_DETALLE_PAGO_CONSULTA_FAIL,
  AGREGAR_INGRESOS_CONSULTA_MEDICA,
  AGREGAR_INGRESOS_CONSULTA_MEDICA_SUCCESS,
  AGREGAR_INGRESOS_CONSULTA_MEDICA_FAIL,
  DESPACHAR_RECETA,
  DESPACHAR_RECETA_SUCCESS,
  DESPACHAR_RECETA_FAIL,
  AUTOSAVE_CITA,
  AUTOSAVE_CITA_FAIL,
  AUTOSAVE_CITA_SUCCESS,
} from "../types/citasTypes.js";

export function fecthCitas(userData, page, limit, filtros, sort) {
  return async (dispatch) => {
    try {
      dispatch({ type: OBTENER_CITAS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerCitas",
          {
            userData,
            page,
            limit,
            filtros,
            sort,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          dispatch({
            type: OBTENER_CITAS_SUCCESS,
            payload: response.data,
          });
          return response;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_CITAS_FAIL, payload: {} });
          let res_1 = {};
          if (!!e.response) {
            res_1 = e.response;
          }
          return res_1;
        });
    } catch (error) {
      dispatch({ type: OBTENER_CITAS_FAIL, payload: {} });
      return error;
    }
  };
}

export function obtenerEstadoCitas() {
  return async (dispatch) => {
    try {
      dispatch({ type: OBTENER_ESTADO_CITAS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerEstadoCitas",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          dispatch({
            type: OBTENER_ESTADO_CITAS_SUCCESS,
            payload: response.data,
          });
          return response;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_ESTADO_CITAS_FAIL, payload: {} });
          let res_1 = {};
          if (!!e.response) {
            res_1 = e.response;
          }
          return res_1;
        });
    } catch (error) {
      dispatch({ type: OBTENER_CITAS_FAIL, payload: {} });
      return error;
    }
  };
}

export function obtenerEstadoCobroCitas() {
  return async (dispatch) => {
    try {
      dispatch({ type: OBTENER_ESTADO_COBRO_CITAS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerEstadoCobroCitas",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          dispatch({
            type: OBTENER_ESTADO_COBRO_CITAS_SUCCESS,
            payload: response.data,
          });
          return response;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_ESTADO_COBRO_CITAS_FAIL, payload: {} });
          let res_1 = {};
          if (!!e.response) {
            res_1 = e.response;
          }
          return res_1;
        });
    } catch (error) {
      dispatch({ type: OBTENER_CITAS_FAIL, payload: {} });
      return error;
    }
  };
}

export function obtenerCita(id) {
  try {
    return async function (dispatch) {
      dispatch({ type: OBTENER_CITA_ID });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerCita",
          {
            id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: OBTENER_CITA_ID_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_CITA_ID_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function enviarLinkDatos(id) {
  try {
    return async function (dispatch) {
      dispatch({ type: CONFIMAR_DATOS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/enviarLinkDatos",
          {
            id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: CONFIMAR_DATOS_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: CONFIMAR_DATOS_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function editarCita(values, id) {
  try {
    return async function (dispatch) {
      dispatch({ type: EDITAR_CITA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/agendarCitas/editarCita",
          {
            values,
            id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: EDITAR_CITA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: EDITAR_CITA_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function checkIn(id, username) {
  try {
    return function (dispatch) {
      dispatch({ type: EDITAR_CITA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/agendarCitas/checkIn",
          {
            id,
            username,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: EDITAR_CITA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: EDITAR_CITA_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function fetchPacientesReceta(data = {}, page, limit, filtros, sort) {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTAR_PACIENTES_RECETAS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/listarPacientesRecetas",
          {
            data: data,
            page,
            limit,
            filtros,
            sort,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: LISTAR_PACIENTES_RECETAS_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: LISTAR_PACIENTES_RECETAS_FAIL, payload: {} });
          let res_1 = {};
          if (!!e.response) {
            res_1 = e.response;
          }
          return res_1;
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchPacientesCitas(data = {}, page, limit, filtros, sort) {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTAR_PACIENTES_CITAS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/listarPacientesCitas",
          {
            data: data,
            page,
            limit,
            filtros,
            sort,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({ type: LISTAR_PACIENTES_CITAS_SUCCESS, payload: res.data });
          return res;
        })
        .catch((e) => {
          dispatch({ type: LISTAR_PACIENTES_CITAS_FAIL, payload: {} });
          let res_1 = {};
          if (!!e.response) {
            res_1 = e.response;
          }
          return res_1;
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function obtenerInfoPaciente(idRegistro, username) {
  try {
    return async function (dispatch) {
      dispatch({ type: OBTENER_PACIENTE_CITA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerInfoPaciente",
          {
            idCita: idRegistro,
            username,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: OBTENER_PACIENTE_CITA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_PACIENTE_CITA_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function agregarSignosVitales(username, id, values) {
  try {
    return async function (dispatch) {
      dispatch({ type: AGREGAR_SIGNOS_VITALES_ });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/agregarSignosVitales",
          {
            username: username,
            dataSignosVitales: values,
            idRegistro: id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: AGREGAR_SIGNOS_VITALES_SUCCESS_,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: AGREGAR_SIGNOS_VITALES_FAIL_, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function obtenerSignosVitalesPaciente(id) {
  try {
    return async function (dispatch) {
      dispatch({ type: OBTENER_SIGNOS_VITALES_PACIENTE });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerSignosVitalesPaciente",
          {
            idCita: id,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: OBTENER_SIGNOS_VITALES_PACIENTE_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_SIGNOS_VITALES_PACIENTE_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function guardarInfoCita(idCita, data, username) {
  try {
    return async function (dispatch) {
      dispatch({ type: GUARDAR_CITA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/guardarInfoCita",
          {
            idCita: idCita,
            dataCita: data,
            username: username,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: GUARDAR_CITA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: GUARDAR_CITA_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function cancelarCita(id, username) {
  try {
    return function (dispatch) {
      dispatch({ type: CANCELAR_CITAS });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/agendarCitas/cancelarCita",
          {
            id,
            username,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: CANCELAR_CITAS_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: CANCELAR_CITAS_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function obtenerReceta(idRegistro) {
  return async (dispatch) => {
    dispatch({ type: OBTENER_RECETA_PACIENTE });
    try {
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerReceta",
          {
            citaId: idRegistro,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: OBTENER_RECETA_PACIENTE_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_RECETA_PACIENTE_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function emisionOrdenesAseguradora(aseguradora, idRegistro, username) {
  try {
    return async function (dispatch) {
      dispatch({ type: EMITIR_ORDEN_ASEGURADORA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/emitirOrdenAseguradora",
          {
            aseguradora: aseguradora,
            idCita: idRegistro,
            username,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: EMITIR_ORDEN_ASEGURADORA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: EMITIR_ORDEN_ASEGURADORA_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function enviarLinkPago(username, id, idCita, data) {
  try {
    return async function (dispatch) {
      dispatch({ type: ENVIAR_LINK_PAGO });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/enviarLinkPago",
          {
            username,
            id,
            idCita,
            dataPay: data,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: ENVIAR_LINK_PAGO_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: ENVIAR_LINK_PAGO_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function obtenerInfoPagoCita(id, idCita, pay) {
  try {
    return async function (dispatch) {
      dispatch({ type: OBTENER_INFO_PAGO });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerInfoPago",
          {
            id,
            idCita,
            pay,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: OBTENER_INFO_PAGO_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_INFO_PAGO_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function generateToPay(data) {
  try {
    return async function (dispatch) {
      dispatch({ type: GENERAR_LINKPAY });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/generateLinkToPay",
          {
            data,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: GENERAR_LINKPAY_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: GENERAR_LINKPAY_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function obtenerDetallePagoConsulta(idRegistro) {
  try {
    return async function (dispatch) {
      dispatch({ type: OBTENER_DETALLE_PAGO_CONSULTA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/obtenerDetallePagoConsulta",
          {
            idRegistro,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: OBTENER_DETALLE_PAGO_CONSULTA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({ type: OBTENER_DETALLE_PAGO_CONSULTA_FAIL, payload: {} });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function agregarDocumentoElectronicoCM(
  documentoElectronico,
  idRegistro,
  username
) {
  try {
    return async function (dispatch) {
      dispatch({ type: AGREGAR_INGRESOS_CONSULTA_MEDICA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/agregarDocumentoElectronicoCM",
          {
            documentoElectronico,
            idCita: idRegistro,
            userData: username,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: AGREGAR_INGRESOS_CONSULTA_MEDICA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({
            type: AGREGAR_INGRESOS_CONSULTA_MEDICA_FAIL,
            payload: {},
          });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function despacharReceta(idRegistro, username, sucursal) {
  try {
    return async function (dispatch) {
      dispatch({ type: DESPACHAR_RECETA });
      let token = localStorage.getItem("token");
      return axios
        .post(
          server + "/citas/despacharReceta/nuevaReceta",
          {
            idCita: idRegistro,
            username,
            sucursal
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          dispatch({
            type: DESPACHAR_RECETA_SUCCESS,
            payload: res.data,
          });
          return res;
        })
        .catch((e) => {
          dispatch({
            type: DESPACHAR_RECETA_FAIL,
            payload: {},
          });
          let res = {};
          if (!!e.response) {
            res = e.response;
          }
          return res;
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function autoSaveInfoCita(values, idRegistro) {
  try {
    return async function (dispatch) {
      dispatch({
        type: AUTOSAVE_CITA,
      });
      dispatch({
        type: AUTOSAVE_CITA_SUCCESS,
        payload: { id: idRegistro, values: values },
      });
    };
  } catch (e) {
    return async function (dispatch) {
      dispatch({
        type: AUTOSAVE_CITA_FAIL,
      });
      console.log(e);
    };
  }
}

export function autoSaveInfoCit2a(values, idRegistro) {
    try {
      return async function (dispatch) {
        dispatch({
          type: AUTOSAVE_CITA,
        });
        dispatch({
          type: AUTOSAVE_CITA_SUCCESS,
          payload: { id: idRegistro, values: values },
        });
      };
    } catch (e) {
      return async function (dispatch) {
        dispatch({
          type: AUTOSAVE_CITA_FAIL,
        });
        console.log(e);
      };
    }
  }