var jlvr = new Principal();

function calculotamano(){
	setInterval("pruebascroll3();", 100);
}

function mostrar_menu(){
	pruebascroll();
	jlvr.mostrar({visual: "visual", novisual: "no_visual", identificador: 1, n1: "n1", n2: "n2", n3: "n3", n4: "n4", n5: "n5", menus: "menu_c_m"});
}

function ocultar_menu(){
	jlvr.mostrar({visual: "visual", novisual: "no_visual", identificador: 2, n1: "n1", n2: "n2", n3: "n3", n4: "n4", n5: "n5", menus: "menu_c_m"});
	pruebascroll2();
}

function pruebascroll(){
	x_doc("numerador").innerHTML = 0;
	x_doc("numerador").innerHTML = posicionXY().y;
}

function pruebascroll2(){
	var numero_posicion = parseInt(x_doc("numerador").innerHTML);
	if(numero_posicion >= 0 && numero_posicion <= 790){
		x_doc("n1").scrollIntoView(true);
	}if(numero_posicion >= 791 && numero_posicion <= 1540){
		x_doc("n2").scrollIntoView(true);
	}if(numero_posicion >= 1541 && numero_posicion <= 2290){
		x_doc("n3").scrollIntoView(true);
	}if(numero_posicion >= 2291 && numero_posicion <= 3040){
		x_doc("n4").scrollIntoView(true);
	}if(numero_posicion >= 3041 && numero_posicion <= 3790){
		x_doc("n5").scrollIntoView(true);
	}
}

function pruebascroll3(){
		var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
		if(x >= 1024){
			x_doc("visual").style.display = "";
			x_doc("no_visual").style.display = "none";
			x_doc("n1").style.display = "";
			x_doc("n2").style.display = "";
			x_doc("n3").style.display = "";
			x_doc("n4").style.display = "";
			x_doc("n5").style.display = "";
			x_doc("menu_c_m").style.display = "none";
		}
}

function posicionXY() {

   if ( window.pageXOffset != null ) 
       return {
        x: window.pageXOffset, 
        y: window.pageYOffset
    };

    if ( document.compatMode === "CSS1Compat" ) {
        return {
            x: x_w.documentElement.scrollLeft, 
            y: x_w.documentElement.scrollTop
        };
    }

    return { 
        x: x_w.body.scrollLeft, 
        y: x_w.body.scrollTop 
    }; 
}

window.onload = function() {
	calculotamano();
};