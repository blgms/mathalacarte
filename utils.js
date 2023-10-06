//FONCTIONS ANNEXES
//GENERER UN ENTIER SUR [a;b]
function randint(a,b) {
	return Math.round(Math.random()*(b-a)+a);
}

//GENERER ALEATOIREMENT 1 ou -1
function randoppose() {
	return Math.round(Math.random())*2-1;
}

//GENERER UN ENTIER RELATIF NON NUL SUR [-b;-a]U[a;b]
function genZ(a,b) {
	return (Math.round(Math.random()*(b-a))+a)*(-1)**Math.round(Math.random());
}

//SIMPLIFIER UNE FRACTION
function simpl(a,b) {
	if (Number.isInteger(a/b)) {
		return [a/b,1,b];
	} else {
		let s = pgcd(a,b);
		return [a/s,b/s,s];
	}
}

//TRANSFORMER DEUX NOMBRES EN UNE CHAINE FRACTION
function chainefrac(array) {
	if (array.length==1 || array[1]==1) { return array[0]; }
	let fraction = "";
	array.map(function(n) {return Number(n);});
	if (array[0]*array[1]<0) {
		fraction += "-";
	}
	fraction += "\\dfrac{"+Math.abs(array[0])+"}{"+Math.abs(array[1])+"}";
	return fraction;
}

//CALCUL DE PGCD
function pgcd(a,b) {
	if (!b) {
		return a;
	}
	return pgcd(b,a%b);
}

//CALCUL DE PPCM
function ppcm(a,b) {
	let p = pgcd(a,b);
	return a*b/p;
}

//VALEUR EXACTE D'UNE RACINE CARREE (NOMBRES < 10000)
function exaSqrt(n) {
	let a=1;
	for (i=99;i>1;i--) {
		if (Number.isInteger(n/(i*i))) {
			a*=i;
			n/=i*i;
		}
	}
	return [a,n];
}

//RECHERCHE DES TRIPLETS a, b, c NON NULS TELS QUE b²-4ac SOIT UN CARRE D'ENTIER
function tripletsD(inf,sup) {
	let liste=[];
	for (let a=inf;a<=sup;a++) {
		for (let b=inf;b<=sup;b++) {
			for (let c=inf;c<=sup;c++) {
				if (Number.isInteger(Math.sqrt(b*b-4*a*c)) && a!=0 && b!=0 && c!=0) {
					liste.push([a,b,c]);
				}
			}
		}
	}
	return liste;
}

//RECHERCHE DES TRIPLETS PYTHAGORICIENS tels que k² = i² + j²
function tripletsPyth(a,b) {
	let triplets = [];
	for (i=a; i<=b; i++) {
		for (j=1; j<=b; j++) {
			let k = Math.sqrt(i**2+j**2)
			if (Number.isInteger(k)) {
				triplets.push([i,j,k]);
			}
		}
	}
	return triplets;
}

//GENERATION D'UNE SUITE ARITHMETIQUE [Sn, u1, u2, ..., un]
function genSuitAri(u1,r,n) {
	let u = [u1, u1];
	for (let i=2; i<n+1; i++) {
		u.push(u[i-1]+r);
		u[0]+=u[i];
	}
	return u;
}

//GENERATION D'UNE SUITE GEOMETRIQUE [Sn, u1, u2, ..., un]
function genSuitGeo(u1,q,n) {
	let u = [u1, u1];
	for (let i=2; i<n+1; i++) {
		let m=10**i;
		u.push(Math.round((u[i-1]*m)*(q*m))/(m**2));
		if (Number.isInteger(q)) {
			u[i]=Math.round(u[i]);
		}
		u[0]+=u[i];
	}
	for (let i=0; i<u.length; i++) {
		u[i]=pointVirg(u[i].toString());
	}
	return u;
}

//REMPLACEMENT DES POINTS PAR DES VIRGULES
function pointVirg(str) {
	str = str.replaceAll(".","{,}");
	return str;
}

function strPlus(a) {
	if (a<0) {
		return "-"+Math.abs(a);
	}
	if (a==0) {
		return "";
	}
	if (a>0) {
		return "+"+a;
	}
}

//ECRITURE D'UNE EQUATION
function equaStr(nbs) {
	let equation = "<div class='nombres'>\\(";
	if (nbs[0] != 0) {
		if (nbs[0]<0) {equation += "-";}
		if (nbs[0]!=1) { equation += Math.abs(nbs[0]); }
		equation += "x";
	}
	if (nbs[1] != 0) {
		if (nbs[1]<0) {equation += "-";} else { if (nbs[0]!=0) { equation += "+"; } }
		equation += Math.abs(nbs[1]);
	}
	equation += "=";
	if (nbs[2] != 0) {
		if (nbs[2]<0) {equation += "-";}
		if (Math.abs(nbs[2])!=1) { equation += Math.abs(nbs[2]); }
		equation += "x";
	}
	if (nbs[3] != 0) {
		if (nbs[3]<0) {equation += "-";} else { if (nbs[2]!=0) { equation += "+"; } }
		equation += Math.abs(nbs[3]);
	}
	equation += "\\)</div>";
	return equation;
}

//Trier les caractères d'une chaîne dans l'ordre alphanumérique
let sortString = (stringg) => {
    return stringg.split("").sort().join("");
};
