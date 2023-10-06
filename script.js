/*CONFIGURATION MATHJAX*/
MathJax = {
  options: {
    renderActions: {
      assistiveMml: [],
    }
  },
};

var idCarte = 0;
document.getElementById('compte').innerHTML = idCarte;

function compteur(n) {
	idCarte += n;
	document.getElementById('compte').innerHTML = idCarte;
	if (idCarte > 4) {
		document.getElementById("btnDupTout").disabled = true;
	} else {
		document.getElementById("btnDupTout").disabled = false;
	}
	if (idCarte > 8) {
		let a = document.getElementsByClassName("btnExo");
		for (i in a) {
			a[i].disabled = true;
		}
		document.getElementById("btnDup").disabled = true;
	} else if ((idCarte > 7 && n < 0) || (n < -1)) {
		let a = document.getElementsByClassName("btnExo");
		for (i in a) {
			a[i].disabled = false;
		}
		document.getElementById("btnDup").disabled = false;
	}
	MathJax.startup.defaultReady();
}

function creerCarte(exercice,id) {
	document.getElementById('cartes').innerHTML += "<div id='carte"+idCarte+"' class='sm-2 carte'><div id='titre"+idCarte+"' class='titre'></div><div id='consigne"+idCarte+"' class='text-secondary consigne'></div><div id='question"+idCarte+"' class='centre question'></div></div>";
	let infos = exercice(id) ;
	document.getElementById("titre"+idCarte).innerHTML += infos[0];
	document.getElementById("consigne"+idCarte).innerHTML += infos[1];
	document.getElementById("question"+idCarte).innerHTML += infos[2];
	document.getElementById('dos').innerHTML += "<div id='dos"+idCarte+"' class='sm-2 dos'><div class='titre'>"+infos[0]+"</div><div class='consigne'>Réponse :</div><div id='reponse"+idCarte+"' class='text-success centre reponse'>"+infos[3]+"</div></div>";
	compteur(1);
}

function dupCarte() {
	let str1 = document.getElementById('cartes').lastChild.innerHTML;
	let str2 = document.getElementById("dos").lastChild.innerHTML;
	document.getElementById('cartes').innerHTML += "<div id='carte"+idCarte+"' class='sm-2 border-dashed carte'>"+str1+"</div>"
	document.getElementById('dos').innerHTML += "<div id='dos"+idCarte+"' class='sm-2 border-dashed dos'>"+str2+"</div>";
	compteur(1);
}

function dupTout() {
	for (i=0; i<idCarte; i++) {
		let j=i+idCarte
		let str1 = document.getElementById("carte"+i).innerHTML;
		let str2 = document.getElementById("dos"+i).innerHTML;
		document.getElementById('cartes').innerHTML += "<div id='carte"+j+"' class='sm-2 border-dashed carte'>"+str1+"</div>";
		document.getElementById('dos').innerHTML += "<div id='dos"+j+"' class='sm-2 border-dashed dos'>"+str2+"</div>";
		
	}
	compteur(idCarte);
}

function supprCarte() {
	if (idCarte > 0) {
		compteur(-1);
		document.getElementById("carte"+idCarte).remove();
		document.getElementById("dos"+idCarte).remove();
	}
}

function supprTout() {
	document.getElementById('cartes').innerHTML = "";
	document.getElementById('dos').innerHTML = "";
	compteur(-idCarte);
}

function togReponses() {
	document.getElementById("btnReponses").classList.toggle('btn-warning');
	document.getElementById("btnReponses").classList.toggle('btn-warning-outline');
	document.getElementById("cartes").classList.toggle('collapse');
	document.getElementById("dos").classList.toggle('collapse');
	}

function imprimer() {
	if (idCarte < 1) { alert("Aucune carte créée !"); } else { print();}
}
