import stateService from './api-endpoints';
import moment from "moment/moment";
import config from "./infrastructure/config";
import Swal from "sweetalert2";

export default function FormService(data:any){
    const currentDay = moment.utc().toJSON();

    const notification = {
        tenant: config.TENANT as string,
        form_ref: "notification",
        created_at: currentDay,
        comm_pref: ["email"],
        form_data: data,
        comm_options: {
            transport: {
                host: config.HOST_EMAIL as string,
                auth:{user: config.SENDER_EMAIL as string, pass: config.EMAIL_PASS as string}
            },
            mail: {
                from: "NUEVO REGISTRO - GIMDECAR.COM" + '<' + config.SENDER_EMAIL as string + '>',
                subject: "REGISTRO DE FORMULARIO",

                html: "<h1>¡Nuevo Registro - GIMDECAR.COM!</h1>"
                    + "<p><strong>Información de la cita:</strong></p>"
                    + "<li>Nombre del empresario: " + `${data.name}` + "</li>"
                    + "<li>Correo electrónico: " + `${data.email}` + "</li>"
                    + "<li>Teléfono: " + `${data.cel}` + "</li>"
                    + "<li>Producto: " + `${data.product}` + "</li>"
                    + "<li>Ciudad: " + `${data.city}` + "</li>"
                    + "<li>Dirección: " + `${data.address}` + "</li>"
            }
        }
    }

    return stateService.formService(notification).then(resp => {
        console.log(resp);
        if (resp.status === 201) {
            console.log("success! notification send");
            Swal.fire(
                {
                    title: '!Gracias por contactarnos!',
                    text: 'Muy pronto estremos comunicandonos con tigo',
                    icon: 'success'
                }
            ).then(function() {
                window.location.reload();
            })
        }
    }).catch(( e: any ) => {
        console.log(e);
    });
}
