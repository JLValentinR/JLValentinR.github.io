function x_doc(a){
	return document.getElementById(a);
}

function Principal(){
	this.mostrar = function (params){
	var entero = parseInt(params.identificador);
		if(entero == 1){
			x_doc(params.visual).style.display = "none";
			x_doc(params.novisual).style.display = "";
			x_doc(params.n1).style.display = "none";
			x_doc(params.n2).style.display = "none";
			x_doc(params.n3).style.display = "none";
			x_doc(params.n4).style.display = "none";
			x_doc(params.n5).style.display = "none";
			x_doc(params.menus).style.display = "";
		}if(entero == 2){
			x_doc(params.visual).style.display = "";
			x_doc(params.novisual).style.display = "none";
			x_doc(params.n1).style.display = "";
			x_doc(params.n2).style.display = "";
			x_doc(params.n3).style.display = "";
			x_doc(params.n4).style.display = "";
			x_doc(params.n5).style.display = "";
			x_doc(params.menus).style.display = "none";
		}else{

		}
	}
}