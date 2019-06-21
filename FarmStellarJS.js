/*nombre de click*/
var inbwood=1;
var inbstone=1;
var inbmetal=1;
/*nombre de ressource*/
var nbwood=0; 
var nbstone=0;
var nbmetal=0;
/*prix pour achats des ressources premières*/
var pricewood=10;
var pricestone=10;
var pricemetal=10;
/*prix d'achat maison*/
var woodhome=10;
var stonehome=10;
var metalhome=10;
/*prix d'achat entreprise*/
var woodcareer=10;
/*prix d'achat mine*/
var woodmine=10;
var stonemine=10;




var modal= document.getElementById("magasin")
var magasinbtn=document.getElementById("magasinbtn")
var case3btn = document.getElementById("case3btn");
var case7btn = document.getElementById("case7btn");
var case9btn = document.getElementById("case9btn");
var case4btn = document.getElementById("case4btn");

/*affichage ressource*/
var gestionwood=document.getElementById("gestionwood"); /*affichage nb wood*/
var gestionstone=document.getElementById("gestionstone"); /*affichage nb stone*/
var gestionmetal=document.getElementById("gestionmetal") /*affichage nb metal*/

var btncareerup=document.getElementById("btncareerup"); /**/
var btnwoodup=document.getElementById("btnwoodup");
var btnmineup=document.getElementById("btnmineup");

var btnhome = document.getElementById("btnhome");/*recuperation du BT achat Home*/
var btncareer = document.getElementById("btncareer");/*recuperation du BT achat carriere*/
var btnmine = document.getElementById("btnmine");/*recuperation du BT achat mine*/

/*prices home, valeurs des ressources necessaires*/
var woodhome1 = document.getElementById("woodhome");
var stonehome1 = document.getElementById("stonehome");
var metalhome1 = document.getElementById("metalhome");

/*price carriere, valeursdes ressources necessaires*/
var woodcareer1 = document.getElementById("woodcareer");
/*price mine, valeursdes ressources necessaires*/
var woodmine1 = document.getElementById("woodmine");
var stonemine1 = document.getElementById("stonemine");

/*affichage des prix*/
woodhome1.innerHTML= woodhome;
stonehome1.innerHTML= stonehome; 
metalhome1.innerHTML= metalhome;
woodmine1.innerHTML= woodmine;
stonemine1.innerHTML= stonemine;
woodcareer1.innerHTML= woodcareer;



/*fonction du magasin , modal*/
magasinbtn.onclick=function(){
	modal.style.display="block";
}






function achathome(){/*fonction achat maison*/
	if(nbwood>=woodhome && nbstone>=stonehome && nbmetal>=metalhome /*&& case3btn.style.display=="none"*/){		

		nbwood=nbwood-woodhome;
		nbmetal=nbmetal-metalhome;
		nbstone=nbstone-stonehome;
		gestionwood.innerHTML=nbwood;
		gestionmetal.innerHTML=nbmetal;
		gestionstone.innerHTML=nbstone;

		case3btn.style.display="block"; /*affichage maison case 3*/
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
		gestionstone.innerHTML=nbstone;

		case9btn.style.display="block"; /*affichage mine*/
	}else{
		alert("vous n'avez pas les ressources nécessaires !!!");
	}
}

function ressourcewood() /*nombredewood*/
{
	nbwood=nbwood+inbwood; /*0 = 0+1  1=1+1 etc...*/
	gestionwood.innerHTML=nbwood; /*crée un texte dans affichage qui est iscore*/
	/*console.log(nbwood);*/
}

function ressourcestone() /*nombredewood*/
{
	nbstone=nbstone+inbstone; /*0 = 0+1  1=1+1 etc...*/
	gestionstone.innerHTML=nbstone; /*crée un texte dans affichage qui est iscore*/
	/*console.log(nbstone);*/
}

function ressourcemetal() /*nombredewood*/
{
	nbmetal=nbmetal+inbmetal; /*0 = 0+1  1=1+1 etc...*/
	gestionmetal.innerHTML=nbmetal; /*crée un texte dans affichage qui est iscore*/
	/*console.log(nbmetal);*/
}

function autowood() /*library de bonus (autoclick etc...)*/
{	
	if(nbwood>=pricewood)
	{
		nbwood=nbwood-pricewood;
		gestionwood.innerHTML=nbwood;
		pricewood=pricewood*2;
		setInterval("autoclickwood()",950);
	}
	else
	{
		alert("Vous n'avez pas assez d'argent , dommage")
	}
}

function autoclickwood() /*fonction autoclick ou se base le boost*/
{
	nbwood++;/*0 = 0+1  1=1+1 etc...*/
	gestionwood.innerHTML=nbwood; /*crée un texte dans affichage qui est iscore*/
	/*console.log(nbwood);*/
}

function autostone() /*library de bonus (autoclick etc...)*/
{	
	if(nbstone>=pricestone)
	{
		nbstone=nbstone-pricestone;
		gestionstone.innerHTML=nbstone;
		pricestone=pricestone*2;
		setInterval("autoclickstone()",950);
	}
	else
	{
		alert("Vous n'avez pas assez d'argent , dommage")
	}
}

function autoclickstone() /*fonction autoclick ou se base le boost*/
{
	nbstone++;/*0 = 0+1  1=1+1 etc...*/
	gestionstone.innerHTML=nbstone; /*crée un texte dans affichage qui est iscore*/
	/*console.log(nbstone);*/
}

function autometal() /*library de bonus (autoclick etc...)*/
{	
	if(nbmetal>=pricemetal)
	{
		nbmetal=nbmetal-pricemetal;
		gestionmetal.innerHTML=nbmetal;
		pricemetal=pricemetal*2;
		setInterval("autoclickmetal()",950);
	}
	else
	{
		alert("Vous n'avez pas assez d'argent , dommage")
	}
}

function autoclickmetal() /*fonction autoclick ou se base le boost*/
{
	nbmetal++;/*0 = 0+1  1=1+1 etc...*/
	gestionmetal.innerHTML=nbmetal; /*crée un texte dans affichage qui est iscore*/
	/*console.log(nbstone);*/
}
