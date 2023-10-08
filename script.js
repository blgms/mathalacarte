/*CONFIGURATION MATHJAX*/
MathJax = {
  options: {
    renderActions: {
      assistiveMml: [],
    }
  },
};

var idCarte = 0;
var idPage = 0;
document.getElementById('compte').innerHTML = idCarte;

function compteur(n) {
	idCarte += n;
	//gestion compteur et boutons
	document.getElementById('compte').innerHTML = idCarte;
	//gestion des pages
	if (idPage != Math.floor(idCarte/9)) {
		idPage = Math.floor(idCarte/9);
		if (n < 0) {
			for (i=idPage+1 ; i<document.getElementById("cartes").children.length/2 ; i++) {
				document.getElementById("divPage"+i).remove();
				document.getElementById("divPageDos"+i).remove();
			}
		} else {
			document.getElementById('cartes').innerHTML += "<div id='divPage"+idPage+"'></div><div id='divPageDos"+idPage+"' class='collapse'></div>";
		}
	}
		if (idPage > 0) {
			if (document.getElementById("divPage"+idPage).children.length == 0) { document.getElementById("divPage"+idPage).classList.remove('page'); document.getElementById("divPageDos"+idPage).classList.remove('page'); }
			else { document.getElementById("divPage"+idPage).classList.add('page'); document.getElementById("divPageDos"+idPage).classList.add('page'); }
		}
	
	//
	MathJax.startup.defaultReady();
}

function creerCarte(exercice,id) {
	document.getElementById("divPage"+idPage).innerHTML += "<div id='carte"+idCarte+"' class='sm-2 carte'><div id='titre"+idCarte+"' class='titre'></div><div id='consigne"+idCarte+"' class='text-secondary consigne'></div><div id='question"+idCarte+"' class='centre question'></div></div>";
	let infos = exercice(id) ;
	document.getElementById("titre"+idCarte).innerHTML += infos[0];
	document.getElementById("consigne"+idCarte).innerHTML += infos[1];
	document.getElementById("question"+idCarte).innerHTML += infos[2];
	document.getElementById("divPageDos"+idPage).innerHTML += "<div id='dos"+idCarte+"' class='sm-2 dos'><div class='titre'>"+infos[0]+"</div><div class='consigne'>Réponse :</div><div id='reponse"+idCarte+"' class='text-success centre reponse'>"+infos[3]+"</div></div>";
	compteur(1);
}

function dupCarte() {
	let page;
	if (idPage > 0 && document.getElementById("divPage"+idPage).children.length == 0) { page = 1; } else { page = 0; }
	let str1 = document.getElementById("divPage"+(idPage-page)).lastChild.innerHTML;
	let str2 = document.getElementById("divPageDos"+(idPage-page)).lastChild.innerHTML;
	document.getElementById("divPage"+idPage).innerHTML += "<div id='carte"+idCarte+"' class='sm-2 border-dashed carte'>"+str1+"</div>"
	document.getElementById("divPageDos"+idPage).innerHTML += "<div id='dos"+idCarte+"' class='sm-2 dos'>"+str2+"</div>";
	compteur(1);
}

function supprCarte() {
	if (idCarte > 0) {
		compteur(-1);
		document.getElementById("carte"+idCarte).remove();
		document.getElementById("dos"+idCarte).remove();
	}
}

function supprTout() {
	document.getElementById('cartes').innerHTML = "<div id='divPage0'></div><div id='divPageDos0' class='page collapse'></div>";
	compteur(-idCarte);
}

function togReponses() {
	document.getElementById("btnReponses").classList.toggle('btn-warning');
	document.getElementById("btnReponses").classList.toggle('btn-warning-outline');
	for (let i=0 ; i<=idPage ; i++) {
		document.getElementById("divPage"+i).classList.toggle('collapse');
		document.getElementById("divPageDos"+i).classList.toggle('collapse');
	}
}

function imprimer() {
	if (idCarte < 1) { alert("Aucune carte créée !"); } else { print();}
}
