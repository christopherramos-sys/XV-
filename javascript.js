/*
====================================================
DATOS DE LA INVITACIÓN
====================================================

AQUÍ VAMOS A CAMBIAR TODOS LOS DATOS CUANDO ME LOS DES.
*/


const CONFIG = {

    // FECHA DEL EVENTO
    // Año, mes - 1, día, hora, minutos

    fechaEvento:
        new Date(2026, 10, 14, 18, 0, 0),


    // NÚMERO DE WHATSAPP
    // México = 52 + número

    whatsapp:
        "521XXXXXXXXXX",


    // IGLESIA

    iglesia: {

        nombre:
            "Nombre de la iglesia",

        direccion:
            "Dirección de la iglesia",

        mapa:
            "https://maps.google.com/"

    },


    // RECEPCIÓN

    salon: {

        nombre:
            "Nombre del salón",

        direccion:
            "Dirección del salón",

        mapa:
            
           "https://maps.google.com/"
    },


    // MESA DE REGALOS

    regalos:
        "https://www.amazon.com.mx/"

};



/*
====================================================
MÚSICA
====================================================


const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const playBig =
    document.getElementById("playBig");

const musicText =
    document.getElementById("musicText");


function reproducirMusica() {

    if (music.paused) {

        music.play()

            .then(() => {

                musicBtn.textContent = "❚❚";

                playBig.textContent = "❚❚";

                musicText.textContent =
                    "Reproduciendo...";

            })

            .catch(() => {

                alert(
                    "Coloca tu canción como 'cancion.mp3' dentro de la carpeta del proyecto."
                );

            });

    }

    else {

        music.pause();

        musicBtn.textContent = "▶";

        playBig.textContent = "▶";

        musicText.textContent =
            "Escuchar música";

    }

}


musicBtn.addEventListener(
    "click",
    reproducirMusica
);


playBig.addEventListener(
    "click",
    reproducirMusica
);



/*
====================================================
CUENTA REGRESIVA
====================================================
*/

function contador() {

    const ahora =
        new Date();

    const diferencia =
        CONFIG.fechaEvento - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias")
            .textContent = "00";

        document.getElementById("horas")
            .textContent = "00";

        document.getElementById("minutos")
            .textContent = "00";

        document.getElementById("segundos")
            .textContent = "00";

        return;

    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia /
                (1000 * 60 * 60))
            % 24
        );


    const minutos =
        Math.floor(
            (diferencia /
                (1000 * 60))
            % 60
        );


    const segundos =
        Math.floor(
            (diferencia /
                1000)
            % 60
        );


    document.getElementById("dias")
        .textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas")
        .textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos")
        .textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos")
        .textContent =
        String(segundos).padStart(2, "0");

}


contador();

setInterval(
    contador,
    1000
);



/*
====================================================
UBICACIONES
====================================================
*/


document.getElementById(
    "iglesiaNombre"
).textContent =
    CONFIG.iglesia.nombre;


document.getElementById(
    "https://maps.app.goo.gl/Zp7CCgeQHkreDLZDA"
).textContent =
    CONFIG.iglesia.direccion;


document.getElementById(
    "iglesiaMapa"
).href =
    CONFIG.iglesia.mapa;



document.getElementById(
    "salonNombre"
).textContent =
    CONFIG.salon.nombre;


document.getElementById(
    "https://maps.app.goo.gl/xB1DefR95qXZNcsT7"
).textContent =
    CONFIG.salon.direccion;


document.getElementById(
    "salonMapa"
).href =
    CONFIG.salon.mapa;







/*
====================================================
CONFIRMACIÓN POR WHATSAPP
====================================================



document
    .getElementById("formulario")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nombre =
                document
                    .getElementById(
                        "nombreInvitado"
                    )
                    .value
                    .trim();


            const personas =
                document
                    .getElementById(
                        "personasInvitado"
                    )
                    .value;


            if (
                nombre === "" ||
                personas === ""
            ) {

                return;

            }


            const mensaje =

                `Hola, soy ${nombre}. 💗

Quiero confirmar mi asistencia
a tus XV Años.

Asistiremos:
${personas} persona(s).`;


            const url =

                `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;


            window.open(
                url,
                "_blank"
            );

        }
    );



/*
====================================================
BOTÓN PARA VOLVER ARRIBA
====================================================
*/


const arriba =
    document.getElementById(
        "arriba"
    );


window.addEventListener(
    "scroll",
    function() {

        if (
            window.scrollY > 500
        ) {

            arriba.classList.add(
                "visible"
            );

        }

        else {

            arriba.classList.remove(
                "visible"
            );

        }

    }
);


arriba.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);