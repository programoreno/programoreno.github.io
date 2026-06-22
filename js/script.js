if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio(){
    let tema = document.getElementById("tema");

    // Verificar si hay un tema guardado en localStorage
    let temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
        aplicarTema(temaGuardado);
    }

    if (document.addEventListener) {
        tema.addEventListener("click", cambio_tema);
    } else if (document.attachEvent) {
        tema.attachEvent("onclick", cambio_tema);
    }
}

function cambio_tema(){
    let tema = document.getElementById("tema");
    let tex = tema.getAttribute("color");
    
    if (tex === "oscuro") {
        tema.setAttribute("color", "claro");
        aplicarTema("claro");
    } else if (tex === "claro") {
        tema.setAttribute("color", "oscuro");
        aplicarTema("oscuro");
    }
}

function aplicarTema(tema) {
    let cuerpo = document.body;
    let titulos = document.getElementById("titulos");
    let ima = document.getElementById("imagenBtn");
    let foot = document.getElementById("footer");
    let link = document.getElementById("link");

    if (tema === "oscuro") {
        ima.src = "img/moon.png";
        cuerpo.style.backgroundColor = "#003092";
        titulos.style.color = "#fff";
        link.style.color = "#fff";
        foot.style.backgroundColor = "#00879E";
    } else if (tema === "claro") {
        ima.src = "img/sun.png";
        cuerpo.style.backgroundColor = "#E2DAD6";
        titulos.style.color = "#202020";
        link.style.color = "#202020";
        foot.style.backgroundColor = "#6482AD";
        // #f4d03f 
    }

    // Guardar la preferencia del tema en localStorage
    localStorage.setItem("tema", tema);
}
