/*déclaration variables*/
var case3btn = document.getElementById("case3btn");
var case7btn = document.getElementById("case7btn");
var case9btn = document.getElementById("case9btn");
var case4btn = document.getElementById("case4btn");
var btnhome = document.getElementById("btnhome");/*recuperation du BT achat Home*/
var btncareer = document.getElementById("btncareer");/*recuperation du BT achat carriere*/
var btnmine = document.getElementById("btnmine");/*recuperation du BT achat mine*/
var gestionwood = document.getElementById("gestionwood");/*affichage nb wood*/
var gestionstone = document.getElementById("gestionstone");/*affichage nb stone*/
var gestionmetal = document.getElementById("gestionmetal");/*affichage nb metal*/
/*compteurs*/
var nbwood = 0;
var nbstone = 0;
var nbmetal = 0;
/*prices home, valeurs des ressources necessaires*/
var woodhome = document.getElementById("woodhome");
var stonehome = document.getElementById("stonehome");
var metalhome = document.getElementById("metalhome");

woodhome.innerHTML= 0;
stonehome.innerHTML= 0; 
metalhome.innerHTML= 0;
/*price carriere, valeursdes ressources necessaires*/
var woodcareer = document.getElementById("woodcareer");

woodcareer.innerHTML= 0;
/*price mine, valeursdes ressources necessaires*/
var woodmine = document.getElementById("woodmine");
var stonemine = document.getElementById("stonemine");

woodmine.innerHTML= 0;
stonemine.innerHTML= 0;

function achathome(){/*fonction achat maison*/
	if(nbwood>=woodhome && nbstone>=stonehome && nbmetal>=metalhome && case3btn.style.display="none"){		

		nbwood=nbwood-woodhome;
		nbmetal=nbmetal-metalhome;
		nbstone=nbstone-stonehome;
		gestionwood.innerHTML=nbwood;
		gestionstone.innerHTML=nbmetal;
		gestionmetal.linnerHTML=nbstone;

		case3btn.style.display="block"; /*affichage maison case 3*/
	}else if(nbwood>=woodhome && nbstone>=stonehome && nbmetal>=metalhome && case3btn.style.display="block"){		

		nbwood=nbwood-woodhome;
		nbmetal=nbmetal-metalhome;
		nbstone=nbstone-stonehome;
		gestionwood.innerHTML=nbwood;
		gestionstone.innerHTML=nbmetal;
		gestionmetal.linnerHTML=nbstone;

		case4btn.style.display="block"; /*affichage maison case 4*/
	}else{
		alert("vous n'avez pas les ressources nécessaires !!!");
	}
}

function achatcareer(){/*fonction achat carriere*/
	if(nbwood>=woodcareer){		

		nbwood=nbwood-woodcareer;
		gestionwood.innerHTML=nbwood;
		
		case7btn.style.display="block"; /*affichage carriere*/
	}else{
		alert("vous n'avez pas les ressources nécessaires !!!");
	}
}

function achatmine(){/*fonction achat mine*/
	if(nbwood>=woodmine && nbstone>=stonemine){		

        nbstone=nbstone-stonemine;
		nbwood=nbwood-woodmine;
		gestionwood.innerHTML=nbwood;
		gestionmine.linnerHTML=	nbstone;

		case9btn.style.display="block"; /*affichage mine*/
	}else{
		alert("vous n'avez pas les ressources nécessaires !!!");
	}
}
