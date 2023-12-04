function randint(a,b) {
	return Math.round(Math.random()*(b-a)+a);
}
function randoppose() {
	return Math.round(Math.random())*2-1;
}

//NOMBRES
//ARRONDIS DE DECIMAUX
function arrondis() {
	let ordre = ["à l'unité","au dixième","au centième","au millième"];
	let nOrdre = Math.floor(Math.random()*ordre.length);
	let consigne = "Arrondir <b>"+ordre[nOrdre]+"</b>.";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let a = Math.floor(Math.random()*100000);
		let x = (Math.round(a/(10**(4-nOrdre))))/(10**nOrdre);
		a = (a/10000);
		question += "<div>\\("+pointVirg(a.toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg(a.toString())+"\\simeq"+pointVirg(x.toString())+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return ["Nombres",consigne,question,reponse];
}

//COMPARAISON DE NOMBRES
function compNombres() {
	let consigne = "Compléter avec les symboles \\(<\\) ou \\(>\\) :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let a = genZ(0,1000);
		let b = a + genZ(1,1)*10**randint(0,2);
		let c = 10**randint(0,3);
		let s = genZ(1,1);
		a = s*a/c; b = s*b/c;
		let r = "";
		if (a-b<0) {
			r = "<";
		} else {
			r = ">";
		}
		question += "<div>\\("+pointVirg(a.toString())+"\\,\\,\\text{...}\\,\\,"+pointVirg(b.toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg(a.toString())+"\\,\\,"+r+"\\,\\,"+pointVirg(b.toString())+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return ["Nombres",consigne,question,reponse];
}

//PASSER EN ECRITURE SCIENTIFIQUE
function scienti() {
	let consigne = "Convertir en écriture scientifique :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let nb = Math.floor(Math.random()*9000+1000)/1000;
		let npuis = Math.ceil(Math.random()*6);
		let signpuis = Math.sign(Math.random()-0.5);
		let puis = npuis*signpuis;
		let num = nb*10**(puis);
		let numch;
		if (num < 1000) {
			for (let i=7;i>=-3;i--) {
				if (num < 10**(-i)) {
					numch = num.toFixed(i+4);
					break;
				}
			}
		} else {
			numch = num.toFixed(0);
		}
		question += "<div>\\("+pointVirg(numch.toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg(nb.toString())+"\\times 10^{"+puis+"}"+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return ["Écrit. scientifique",consigne,question,reponse];
}

//PASSER EN ECRITURE DECIMALE
function scientideci() {
	let consigne = "Convertir en écriture décimale :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let nb = Math.floor(Math.random()*9000+1000)/1000;
		let npuis = Math.ceil(Math.random()*6);
		let signpuis = Math.sign(Math.random()-0.5);
		let puis = npuis*signpuis;
		let num = nb*10**(puis);
		let numch;
		if (num < 1000) {
			for (let i=7;i>=-3;i--) {
				if (num < 10**(-i)) {
					numch = num.toFixed(i+4);
					break;
				}
			}
		} else {
			numch = num.toFixed(0);
		}
		question += "<div>\\("+pointVirg(nb.toString())+"\\times 10^{"+puis+"}"+"\\)</div>";
		reponse += "<div>\\("+pointVirg(numch.toString())+"\\)</div>";
	}
	question += "</div>";
	return ["Écrit. scientifique",consigne,question,reponse];
}

//CALCUL MENTAL
//TABLES DE MULTIPLICATION
function tablesmulti() {
	let consigne = "Calculer <b>de tête :</b>"
	let question = "<div class='nombres'>";
	let reponse = "<div class='nombres reponse'>";
	for (let j=0;j<3;j++) {
		let n1 = Math.ceil(Math.random()*10);
		let n2 = Math.ceil(Math.random()*10);
		let quest = n1+"\\times"+n2;
		let rep = n1*n2;
		question += "<div>\\("+quest+"\\)</div>";
		reponse += "<div>\\("+quest+"="+rep+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return ["Calcul",consigne,question,reponse];
}

//PUISSANCES DE 10
function puiss10() {
	let consigne = "Calculer <b>de tête</b> :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=00;j<3;j++) {
		let num = Math.floor(Math.random()*1000);
		let coeff = 10**Math.ceil(Math.random()*3);
		let op = Math.round(Math.random());
		let quest,rep;
		if (op==0) {
			quest = chainefrac([num,coeff]);
			rep = num/coeff;
		} else {
			quest = num+"\\times"+coeff;
			rep = num*coeff;
		}
		question += "<div>\\("+quest+"\\)</div>";
		reponse += "<div>\\("+quest+"="+pointVirg(rep.toString())+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return ["Calcul",consigne,question,reponse];
}

//UNITES
//CONVERSION UNITES
function unites(exo) {
	let unites = [];
	let base;
	if (exo==1) {
		base = 10;
		unites = [
			{ "grandeur":"m", "div":["k","h","da","","d","c","m"], "facteur":1 },
			{ "grandeur":"g", "div":["k","h","da","","d","c","m"], "facteur":1 },
			{ "grandeur":"L", "div":["h","da","","d","c","m"], "facteur":1 },
			{ "grandeur":"V", "div":["k","","m"], "facteur":3 },
			{ "grandeur":"s", "div":["","m"], "facteur":3 }
		];
	}
	if (exo==2) {
		base = 10;
		unites = [
			{ "grandeur":"m$^2$", "div":["","d","c","m"], "facteur":2 },
			{ "grandeur":"m$^3$", "div":["","d","c","m"], "facteur":3 }
		];
	}
	/*choix de l'unité de départ et de l'unité d'arrivée*/
	let grand = unites[randint(0,unites.length-1)];
	let a = grand.div.length-1;
	let nudep = randint(0,a);
	let nuarr = randint(0,a);
	while (nuarr==nudep) {
		nuarr = randint(0,a);
	}
	let udep = grand.div[nudep]+grand.grandeur;
	let uarr = grand.div[nuarr]+grand.grandeur;
	let nbm = randint(1,999)*100;
	let nbdep = nbm/(10**((a-nudep)*grand.facteur));
	let rep = nbm/(10**((a-nuarr)*grand.facteur));
	let consigne = "<div>Convertir...</div>";
	let question = "<div class='nombres'>\\("+pointVirg(nbdep.toString())+"\\,\\text{"+udep+"}\\) en \\(\\text{"+uarr+"}\\).</div>";
	let reponse = "<div class='nombres reponse'>\\("+pointVirg(rep.toString())+"\\,\\text{"+uarr+"}\\)</div>";
	return ["Unités",consigne,question,reponse];
}

//CONVERSION UNITES DE DUREE
function durees(exo) {
	let consigne = "<div>Convertir au format jours, heures, minutes, secondes :</div>";
	let question = "", reponse = "";
	let grand;
	if (exo==1) {
		grand = { "unites":["s","min"], "lim":[3600, 60]};
	}
	if (exo==2) {
		grand = { "unites":["s","min","h"], "lim":[86400, 1440, 24]};
	}
	if (exo==3) {
		grand = { "unites":["s","min","h","j"], "lim":[432000, 7200, 120, 5]};
	}												
	let nudep = Math.floor(Math.random()*(grand.unites.length));
	let temps = Math.ceil(Math.random()*grand.lim[nudep]*(10**nudep))/(10**nudep);
	let t;
	if (nudep <= 2) {
		t = Math.round(temps*60**nudep);
	}
	if (nudep == 3) {
		t = Math.round(temps*60*60*24);
	}
	let ttemp, tempsrep = [];
	for (let i=0; i<4; i++) {
		let div;
		if (i>=2) {
			div = 24**(i-1);
		} else {
			div = 60;
		}
		ttemp = t%div;
		t = Math.floor(t/div);
		if (ttemp != 0) {
			tempsrep.unshift(grand.unites[i]);
			tempsrep.unshift(ttemp);
		}
	}
	question += "<div class='nombres'>\\("+pointVirg(temps.toString())+"\\,\\text{"+grand.unites[nudep]+"}\\)</div>";
	reponse += "<div class='nombres reponse'>\\(\\text{"+tempsrep.toString().replace(/,/g, " ")+"}\\)</div>";
	return ["Unités",consigne,question,reponse];
}


//PROPORTIONNALITE
//TABLEAUX DE PROPORTIONNALITE
function tabprop() {
	let consigne = "<div>Indiquer si les grandeurs ci-dessous sont proportionnelles.</div>";
	let question = "", reponse = "";
	let prop = ["C'est","Ce n'est <b>pas</b>"];
	let on = randint(0,1);
	let nbs = [];
	let coeff = randint(1,10);
	for (let i=0;i<3;i++) {
		nbs[i] = randint(1,100);
		if (on == 1 && i > 0) {
			coeff = coeff+(i-1)+randint(0,1);
		}
		nbs[3+i] = nbs[i]*coeff;
	}
	for (let i=0;i<6;i++) {
		nbs[i] = "\\("+nbs[i]+"\\)";
	}
	let tabl = "<table class='proportion'><tr><th>A</th><td>"+nbs[0]+"</td><td>"+nbs[1]+"</td><td>"+nbs[2]+"</td></tr><tr><th>B</th><td>"+nbs[3]+"</td><td>"+nbs[4]+"</td><td>"+nbs[5]+"</td></tr></table>";
	question += tabl;
	reponse += tabl+"<div class='reponse'>"+prop[on]+" un tableau de proportionnalité.</div>";
	return ["Proportionnalité",consigne,question,reponse];
}

//QUATRIEME PROPORTIONNELLE
function quatprop() {
	let consigne = "<div>Retrouver la valeur manquante en utilisant la proportionnalité.</div>";
	let question="", reponse="";
	let quellevaleur = randint(0,3);
	let nba = randint(1,90);
	let nbb = randint(1,100);
	let coeff = randint(2,10);
	let nbc = nba*coeff;
	let nbd = nbb*coeff;
	let nbs = [nba, nbb, nbc, nbd];
	let rep = nbs[quellevaleur];
	nbs[quellevaleur] = "x";
	let tabl = "<table class='proportion'><tr><th>A</th><td>\\("+nbs[0]+"\\)</td><td>\\("+nbs[1]+"\\)</td></tr><tr><th>B</th><td>\\("+nbs[2]+"\\)</td><td>\\("+nbs[3]+"\\)</td></tr></table>";
	question += tabl;
	reponse += tabl+"<div class='reponse nombres'>\\(x="+rep+"\\)</div>";
	return ["Proportionnalité",consigne,question,reponse];
}

//POURCENTAGES
//Taux d'augmentation
function tauxPourcent() {
	let consigne = "<div>Retrouver le coefficient multiplicateur associé à une</div>";
	let a = randoppose();
	let p = randint(0,90);
	let question = (a===1) ? "<div class='nombres'>augmentation de \\("+p+" \\%\\).</div>" : "<div class='nombres'>diminution de \\("+p+" \\%\\).</div>"
	let reponse = "<div class='reponse nombres'>\\("+pointVirg(((100+a*p)/100).toString())+"\\)</div>";
	return ["Pourcentages",consigne,question,reponse];
}

/*
 * //ECHELLES
function echelles() {
	let consigne = "";
	let question="", reponse="";
	let echList = [2, 3, 10, 20, 25, 50, 100];
	let ech = echList[randint(0,echList.length-1)];
	if (ech > 10) { var unit = "", fact = 1000; } else { var unit = "c", fact = 10; }
	question += "<div>Sur un plan à l'échelle <b>1:"+ech+"</b>, on relève les cotes suivantes :</div><div class='grid nombres'>";
	reponse += "<div>Sur un plan à l'échelle <b>1:"+ech+"</b> :</div><div class='grid nombres'>";
	let mesures = "", reelles="";
	for (let j=0;j<3;j++) {
		let quest = randint(40,250);
		let rep = quest*ech/fact;
		mesures += "<div>\\("+quest+"\\,\\text{mm}\\)</div>";
		reelles += "<div>\\("+pointVirg(rep.toString())+"\\,\\text{"+unit+"m}\\)</div>";
	}
	reponse += mesures+"</div><div class='grid nombres reponse'>"+reelles+"</div>";
	question += mesures+"</div><div>Déterminer les cotes réelles en \\(\\text{"+unit+"m}\\).</div>";	
	document.getElementById("titre"+idCarte).innerHTML = "Proportionnalité";
	document.getElementById("consigne"+idCarte).innerHTML = consigne;
	document.getElementById("question"+idCarte).innerHTML = question;
}
*/

//FRACTIONS
//COMPARAISON DE FRACTIONS

//SIMPLIFICATION FRACTIONS
function fracsimp() {
	let consigne = "<div>Si c'est possible, simplifier :</div>";
	let nbs = [];
	let a = randint(1,5);
	for (let i=0;i<2;i++) {
		nbs[i]=randint(1,20)*a;
	}
	let fracres = simpl(nbs[0],nbs[1]);
	/*création des chaînes*/
	let frac = chainefrac(nbs);
	let resultat = chainefrac(fracres);
	let question = "<div class='grid nombres'>\\("+frac+"\\)</div>";
	let reponse = "<div class='grid nombres reponse'>\\("+frac+"="+resultat+"\\)</div>";
	return ["Fractions",consigne,question,reponse];
}

//CALCULS FRACTIONS
function fraccalc() {
	let consigne = "<div>Calculer :</div>"
	let nbs = [];
	for (let i=0;i<4;i++) {
		nbs[i]=randint(1,10);
	}
	/*choix aléatoire de l'opération*/
	let ops = ["+","-","\\times","\\div"];
	let nbop = randint(0,3);
	let op = ops[nbop];
	/*calcul du dénominateur du résultat*/
	let den = [ppcm(nbs[1],nbs[3]) , ppcm(nbs[1],nbs[3]) , nbs[1]*nbs[3], nbs[1]*nbs[2]];
	/*calcul du numérateur du résultat*/
	let num = [nbs[0]*den[nbop]/nbs[1]+nbs[2]*den[nbop]/nbs[3] , nbs[0]*den[nbop]/nbs[1]-nbs[2]*den[nbop]/nbs[3] , nbs[0]*nbs[2] , nbs[0]*nbs[3]];
	/*simplification de la fraction résultat*/
	let fracres = simpl(num[nbop],den[nbop]);
	/*création des chaînes*/
	let calcul = chainefrac([nbs[0],nbs[1]])+op+chainefrac([nbs[2],nbs[3]]);
	let resultat = chainefrac(fracres);
	let question = "<div class='grid nombres'>\\("+calcul+"\\)</div>";
	let reponse = "<div class='grid nombres'>\\("+calcul+"="+resultat+"\\)</div>";
	return ["Fractions",consigne,question,reponse];
}


//STATISTIQUES
//Diagramme circulaire
function statsCirc() {
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = JXG.JSXGraph.initBoard("box"+idCarte, {boundingbox: [-5, 5, 5, -5], keepaspectratio:true, showCopyright:false, shownavigation:false});
	let dataArr = [4, 1.2, 3, 7, 5, 4, 1.54, function () { return 2; }];
	let a = board.create('chart', dataArr, {
			chartStyle:'pie', colors:['#B02B2C','#3F4C6B','#C79810','#D15600'],
			fillOpacity:0.9,
			center:[0,0],
			strokeColor:'#ffffff',
			strokeWidth:3,
			highlightBySize:true,
			highlightOnSector:true
		});
	return ["Stats","pouet","","lol"];
}


//EQUATIONS
//EQUATIONS DU 1ER DEGRE
function equa1d(type) {
	let nbs = [0,0,0,0];
	while (nbs[0]==nbs[2] || nbs[1]==nbs[3]) {
		nbs[0] = genZ(1,10);
		if (type>1) {
			nbs[1] = genZ(1,10);
		}
		if (type>2) {
			nbs[2] = genZ(1,10);
		}
		nbs[3] = genZ(1,10);
	}
	let equation = equaStr(nbs);
	let x = (nbs[3]-nbs[1])/(nbs[0]-nbs[2]);
	if (!Number.isInteger(x)) {x=chainefrac(simpl(nbs[3]-nbs[1],nbs[0]-nbs[2]));}
	let consigne = "<div>Résoudre l'équation.</div>";
	let question = "<div class='nombres'>"+equation+"</div>";	
	let reponse = "<div class='nombres reponse'>\\(x="+x+"\\)</div>";
	return ["Équations",consigne,question,reponse];
}

//EQUATIONS DU 2ND DEGRE
function equa2d() {
	let n=tripletsD(-5,5)[randint(0,151)];
	let a=n[0],b=n[1],c=n[2];
	let na="",nb="",nc="";
	if (a==-1) { na +="-"; } else if (a!=1) { na += a; }
	if (b>0) { nb += "+"; }
	if (b==-1) { nb +="-"; } else if (b!=1) { nb += b; }
	if (c>0) { nc += "+"; }
	nc += c;
	let d=b*b-4*a*c;
	let sol;
	if (d<0) { sol = "Pas de solution."; }
	if (d==0) { sol = "\\(x="+chainefrac(simpl(-b,2*a))+"\\)"; }
	if (d>0) { 
		let rd,x1,x2;
		rd = Math.sqrt(d);
		x1 = chainefrac(simpl(-b-rd,2*a));
		x2 = chainefrac(simpl(-b+rd,2*a));
		sol = "<div>\\(x_{1}="+x1+"\\)</div><div>\\(x_{2}="+x2+"\\)</div>"; 
	}
	let consigne = "<div>Indiquer les solutions de l'équation.</div>";
	let question = "<div class='nombres'>\\("+na+"x^2"+nb+"x"+nc+"=0\\)</div>";	
	let reponse = "<div class='nombres reponse grid'>"+sol+"</div>";
	return ["Équations",consigne,question,reponse];
}

//PYTHAGORE
function pythagore(exo) {
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let taille = randint(5,20);
	let board = JXG.JSXGraph.initBoard("box"+idCarte, {boundingbox: [-taille, taille, taille, -taille], keepaspectratio:true, showCopyright:false, shownavigation:false});
	let alpha = randint(0,360)*Math.PI/180,
		beta = alpha+randint(40,140)*Math.PI/180,
		r = 4*taille/5,
		coord = [
			[r*Math.cos(alpha),r*Math.sin(alpha),"p0"],
			[r*Math.cos(Math.PI+alpha),r*Math.sin(Math.PI+alpha),"p1"],
			[r*Math.cos(beta),r*Math.sin(beta),"p2"]
		].sort(() => Math.random() - 0.5);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [coord[0][0],coord[0][1]], cerise),
		B = board.create('point', [coord[1][0],coord[1][1]], cerise),
		C = board.create('point', [coord[2][0],coord[2][1]], cerise),
		pol = board.create('polygon',[A,B,C], {
			fillColor: '#FFFF00',
			lines: {
				strokeWidth: 2,
				strokeColor: '#009256'
			}
		});
	// pts : [lettre, pX, x, y]
	let pts = [
		["A","B","C"],
		[coord[0][2],coord[1][2],coord[2][2]],
		[coord[0][0],coord[1][0],coord[2][0]],
		[coord[0][1],coord[1][1],coord[2][1]]
		];
	//[lettre, x, y]
	let M = [pts[0][pts[1].indexOf("p0")], pts[2][pts[1].indexOf("p0")], pts[3][pts[1].indexOf("p0")]],
		N = [pts[0][pts[1].indexOf("p1")], pts[2][pts[1].indexOf("p1")], pts[3][pts[1].indexOf("p1")]],
		P = [pts[0][pts[1].indexOf("p2")], pts[2][pts[1].indexOf("p2")], pts[3][pts[1].indexOf("p2")]];
	let m = sortString(N[0]+P[0]), n = sortString(M[0]+P[0]), p = sortString(M[0]+N[0]);
	//calcul des longueurs des côtés
	let cotes = [
		[m, p+"²&nbsp;-&nbsp;"+n+"²", Math.round(10*Math.sqrt((P[1]-N[1])**2+(P[2]-N[2])**2))/10 ],
		[n, p+"²&nbsp;-&nbsp;"+m+"²", Math.round(10*Math.sqrt((P[1]-M[1])**2+(P[2]-M[2])**2))/10 ],
		[p, m+"²&nbsp;+&nbsp;"+n+"²", Math.round(20*r)/10 ]
	];
	//calcul des réponses arrondies au dixième
	cotes[0].push(Math.round(10*Math.sqrt(cotes[2][2]**2-cotes[1][2]**2))/10);
	cotes[1].push(Math.round(10*Math.sqrt(cotes[2][2]**2-cotes[0][2]**2))/10);
	cotes[2].push(Math.round(10*Math.sqrt(cotes[0][2]**2+cotes[1][2]**2))/10);
	let consigne,reponse;
	if (exo == 1) {
		consigne = "Écrire la relation permettant de calculer la longueur \\("+cotes[2][0]+"\\) dans ce triangle rectangle.";
		reponse = "<div class='nombres reponse'>\\("+cotes[2][0]+"²&nbsp;=&nbsp;"+cotes[2][1]+"\\)</div>";
	} else if (exo == 2) {
		let n = randint(0,1);
		consigne = "Écrire la relation permettant de calculer la longueur \\("+cotes[n][0]+"\\) dans ce triangle rectangle.";
		reponse = "<div class='nombres reponse'>\\("+cotes[n][0]+"²&nbsp;=&nbsp;"+cotes[n][1]+"\\)</div>";
	} else if (exo == 3) {
		cotes.sort(() => Math.random() - 0.5);
		consigne = "\\("+cotes[1][0]+"="+pointVirg(cotes[1][3].toString())+"\\) et \\("+cotes[2][0]+"="+pointVirg(cotes[2][3].toString())+"\\). Calculer la longueur \\("+cotes[0][0]+"\\) arrondie au dixième.";
		reponse = "<div class='nombres reponse'>\\("+cotes[0][0]+"&nbsp;=&nbsp;"+pointVirg(cotes[0][3].toString())+"\\)</div>";
	}
	return ["Pythagore",consigne,"",reponse];
}


//REPERAGE
function lectPts() {
	let pts = [
		[randint(-6,6)/2, randint(-6,6)/2],
		[randint(-6,6)/2, randint(-6,6)/2]
	];
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-3.5, 3.5, 3.5, -3.5]);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [pts[0][0],pts[0][1]], cerise),
		B = board.create('point', [pts[1][0],pts[1][1]], cerise);
	let consigne = "Donner les coordonnées des points \\(A\\) et \\(B\\)."
	let reponse = "<div class='grid nombres reponse'>\\(A("+pointVirg(pts[0][0].toString())+";"+pointVirg(pts[0][1].toString())+")\\)<br>\\(B("+pointVirg(pts[1][0].toString())+";"+pointVirg(pts[1][1].toString())+")\\)";
	return ["Repérage",consigne,"",reponse];
}

function coeffDir() {
	let pts = [
		[randint(0,2), randint(-3,3)],
		[randint(3,5), randint(-3,3)]
	];
	while (pts[1][0] == pts[0][0]) { pts[1][0] = randint(-4,4); }
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-1, 3.5, 6, -3.5]);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [pts[0][0],pts[0][1]], cerise),
		B = board.create('point', [pts[1][0],pts[1][1]], cerise);
	let consigne = "Calculer la pente de la droite \\((AB)\\)."
	let reponse = "<div class='grid nombres reponse'>\\( a="+ pointVirg( (Math.round(((pts[1][1]-pts[0][1])/(pts[1][0]-pts[0][0])*100))/100).toString() ) +" \\)"
	return ["Repérage",consigne,"",reponse];
}


//VECTEURS
function lectVec() {
	let pts = [
		[randint(-4,4), randint(-4,4)],
		[randint(-4,4), randint(-4,4)]
	];
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-5, 5, 5, -5]);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [pts[0][0],pts[0][1]], cerise),
		B = board.create('point', [pts[1][0],pts[1][1]], cerise);
	var vAB = board.create('line',[[pts[0][0],pts[0][1]], [pts[1][0],pts[1][1]] ],{straightFirst:false, straightLast:false, lastArrow:true});
	let consigne = "Donner les coordonnées du vecteur \\( \\vec{AB} \\).";
	let reponse = "<div class='grid nombres reponse'>\\( \\vec{AB} = \\binom{"+pointVirg((pts[1][0]-pts[0][0]).toString())+"}{"+pointVirg((pts[1][1]-pts[0][1]).toString())+"} \\)";
	return ["Vecteurs",consigne,"",reponse];
}


//FONCTIONS
function lectCarre() {
	let ptsx = [randint(-6,6)/2, randint(-6,6)/2, randint(-6,6)/2];
	while (ptsx[1] == ptsx[0]) { ptsx[1] = randint(-6,6)/2; }
	while (ptsx[2] == ptsx[0] || ptsx[2] == ptsx[1]) { ptsx[2] = randint(-5,5)/2; }
	let ptsy = ptsx.map((x) => x**2);
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-4, 7, 4, -1]);
	let graph = board.create('functiongraph',[function(x){ return x*x; },-5,5]);
	let consigne = "Donner l'image par la fonction \\(f\\) représentée ci-dessous des nombres \\("+pointVirg(ptsx[0].toString())+"\\), \\("+pointVirg(ptsx[1].toString())+"\\) et \\("+pointVirg(ptsx[2].toString())+"\\).";
	let reponse = "<div class='grid nombres reponse'>\\(f("+pointVirg(ptsx[0].toString())+")="+pointVirg(ptsy[0].toString())+"\\)<br>\\(f("+pointVirg(ptsx[1].toString())+")="+pointVirg(ptsy[1].toString())+"\\)<br>\\(f("+pointVirg(ptsx[2].toString())+")="+pointVirg(ptsy[2].toString())+"\\)</div>"
	return ["Fonctions",consigne,"",reponse];
}


//LOGARITHME
function calcLog() {
	let k = randint(1,4)*randoppose();
	let n = randint(2,15);
	let n2 = n*10**k;
	let logn = Math.round(Math.log10(n)*10)/10;
	let logn2 = Math.round(Math.log10(n2)*10)/10;
	let consigne = "Sachant que \\(log({"+n+"}) \\simeq"+pointVirg(logn.toString())+"\\) donner sans calculatrice la valeur de";
	let question = "<div class='grid nombres'>\\(log("+pointVirg(n2.toString())+")\\)</div>";
	let reponse = "<div class='grid nombres reponse'>\\(log("+pointVirg(n2.toString())+") \\simeq"+pointVirg(logn2.toString())+"\\)</div>";
	return ["Logarithme",consigne,question,reponse];
}


//SUITES
function verifSuiteA() {
	let consigne = "Indiquer si ces termes font partie d'une suite arithmétique, et si oui, indiquer sa raison.";
	let n = randint(1,5);
	let u1 = randint(-20,20);
	let r = randint(2,20)*randoppose();
	let a = randint(0,1);
	let question = "<div class='grid nombres'>\\(u_"+n+"="+u1+"\\)<br>\\(u_"+(n+1)+"="+(u1+r+a*randint(-5,5))+"\\)<br>\\(u_"+(n+2)+"="+(u1+2*r+a*randint(-5,5))+"\\)</div>";
	let reponse = (a === 1) ? "<div class='reponse'>La suite n'est pas arithmétique.</div>":"<div class='reponse'>La suite est arithmétique de raison "+r+".</div>";
	return ["Suites arithm.",consigne,question,reponse];
}

function calcTermeSuiteA() {
	let n = randint(10,20);
	let u1 = randint(-20,20);
	let r = randint(2,20)*randoppose();
	let consigne = "Calculer le terme de rang \\(n="+n+"\\) de la suite arithmétique définie par :";
	let question = "<div class='grid nombres'>\\(u_1="+u1+"\\)<br>\\(r="+r+"\\)</div>";
	let reponse = "<div class='grid nombres reponse'>\\(u_{"+n+"}="+(u1+(n-1)*r)+"\\)</div>";
	return ["Suites arithm.",consigne,question,reponse];
}

//PYTHON
function pythCalc() {
	let a = randint(0,10), b = randint(0,10), calc = randint(0,2);
	let calcs = ["+","-","*"];
	let consigne = "Voici une fonction Python. <pre><code>def calcul(x,y): <br>&emsp;&emsp;return x"+calcs[calc]+"y	</code></pre> Quel sera le retour de la commande <code>calcul("+a+","+b+")</code> ?";
	let reponse = eval(a+calcs[calc]+b);
	return ["Python",consigne,"",reponse];
}
