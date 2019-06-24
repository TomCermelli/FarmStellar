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
	
	var ptdevie=10;/*Ajout Catastrophe*/
	var iptdevie=1;/*Ajout Catastrophe*/

		/*Prix incrément*/ /*AJOUT DU WEEK END ----------------------------------------------------------*/
	var nb=5;
	var nb10=10;
	var nb100=100;
	var nbsell=750;

	var princrementwood=20;
	var princrementstone=20;
	var princrementmetal=20;

	var princrementwood10=princrementwood*10;
	var princrementwood100=princrementwood*100;
	var princrementstone10=princrementstone*10;
	var princrementstone100=princrementstone*100;
	var princrementmetal10=princrementmetal*10;
	var princrementmetal100=princrementmetal*100;
	/*------------------------------------------------------------------------------------------------*/
	
	
	var catastrophe = document.getElementById("catastrophe");/*Ajout Catastrophe*/
	var case5 = document.getElementById("case5");/*Ajout Catastrophe*/
	var modal= document.getElementById("magasin")
	var magasinbtn=document.getElementById("magasinbtn")
	var case3btn = document.getElementById("case3btn");
	var case7btn = document.getElementById("case7btn");
	var case9btn = document.getElementById("case9btn");
	var case4btn = document.getElementById("case4btn");
	var cata = document.getElementById("cata");
	var catastrophe = document.getElementById("catastrophe");
	
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
	var span = document.getElementById("close");
	
	var incrementationwood=document.getElementById("incrementationwood");
	var incrementationwood10=document.getElementById("incrementationwood10");
	var incrementationwood100=document.getElementById("incrementationwood100");
	var incrementationstone=document.getElementById("incrementationstone");
	var incrementationstone10=document.getElementById("incrementationstone10");
	var incrementationstone100=document.getElementById("incrementationstone100");
	var incrementationmetal=document.getElementById("incrementationmetal");
	var incrementationmetal10=document.getElementById("incrementationmetal10");
	var incrementationmetal100=document.getElementById("incrementationmetal100");
	/*affichage des prix*/
	woodhome1.innerHTML= woodhome;
	stonehome1.innerHTML= stonehome; 
	metalhome1.innerHTML= metalhome;
	woodmine1.innerHTML= woodmine;
	stonemine1.innerHTML= stonemine;
	woodcareer1.innerHTML= woodcareer;
	incrementationwood.innerHTML=princrementwood;
	incrementationwood10.innerHTML=princrementwood10;
	incrementationwood100.innerHTML=princrementwood100;
	incrementationstone.innerHTML=princrementstone;
	incrementationstone10.innerHTML=princrementstone10;
	incrementationstone100.innerHTML=princrementstone100;
	incrementationmetal.innerHTML=princrementmetal;
	incrementationmetal10.innerHTML=princrementmetal10;
	incrementationmetal100.innerHTML=princrementmetal100;
	
	
	
	/*fonction du magasin , modal*/
	magasinbtn.onclick=function(){
		modal.style.display="block";
		
	}
	
	span.onclick = function() {
  		modal.style.display = "none";
	}

	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none";
 		 }
	}



	var i=1;
	function achathome(){/*fonction achat maison*/
		if(i==1) {
					if(nbwood>=woodhome && nbstone>=stonehome && nbmetal>=metalhome ){		
				
						nbwood=nbwood-woodhome;
						nbmetal=nbmetal-metalhome;
						nbstone=nbstone-stonehome;
						gestionwood.innerHTML=nbwood;
						gestionmetal.innerHTML=nbmetal;
						gestionstone.innerHTML=nbstone;
						i++;
						console.log(i);
						case3btn.style.display="block"; /*affichage maison case 3*/
					}else{
						alert("vous n'avez pas les ressources nécessaires !!!");
					}
				}else if(i==2){
					if(nbwood>=woodhome && nbstone>=stonehome && nbmetal>=metalhome ){		
				
						nbwood=nbwood-woodhome;
						nbmetal=nbmetal-metalhome;
						nbstone=nbstone-stonehome;
						gestionwood.innerHTML=nbwood;
						gestionmetal.innerHTML=nbmetal;
						gestionstone.innerHTML=nbstone;
						i++
						case4btn.style.display="block"; /*affichage maison case 4*/
					}else{
						alert("vous n'avez pas les ressources nécessaires !!!");
					}
				}else {
						alert("vous avez atteint le nombre maxi de maison !!!");
				}
	}

	var j=1;
	function achatcareer(){/*fonction achat carriere*/
		if(j==1){
			if(nbwood>=woodcareer){		
		
				nbwood=nbwood-woodcareer;
				gestionwood.innerHTML=nbwood;
				j++;
				case7btn.style.display="block"; /*affichage carriere*/
			}else{
				alert("vous n'avez pas les ressources nécessaires !!!");
			}
		}else {
				alert("vous avez atteint le nombre maxi de carriére !!!");
				}
	}

	var l=1;
	function achatmine(){/*fonction achat mine*/
		if(l==1){
			if(nbwood>=woodmine && nbstone>=stonemine){		
		
		        nbstone=nbstone-stonemine;
				nbwood=nbwood-woodmine;
				gestionwood.innerHTML=nbwood;
				gestionstone.innerHTML=nbstone;
				l++;
				case9btn.style.display="block"; /*affichage mine*/
			}else{
				alert("vous n'avez pas les ressources nécessaires !!!");
			}
		}else {
				alert("vous avez atteint le nombre maxi de mine !!!");
				}
	}
	
	function ressourcewood() /*nombredewood*/
	{
		nbwood=nbwood+inbwood; /*0 = 0+1  1=1+1 etc...*/
		gestionwood.innerHTML=nbwood;
/*crée un texte dans affichage qui est iscore*/
		/*console.log(nbwood);*/
	}
	
	function ressourcestone() /*nombredewood*/
	{
		nbstone=nbstone+inbstone; /*0 = 0+1  1=1+1 etc...*/
		gestionstone.innerHTML=nbstone;
		/*crée un texte dans affichage qui est iscore*/
		/*console.log(nbstone);*/
	}
	
	function ressourcemetal() /*nombredewood*/
	{
		nbmetal=nbmetal+inbmetal; /*0 = 0+1  1=1+1 etc...*/
		gestionmetal.innerHTML=nbmetal;
		
		
	/*crée un texte dans affichage qui est iscore*/
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

	/*-----------------------------fonction js Catastrophe----------------------------*/

	function inversautoclickmetal() /*fonction baisse pt metal*/
	{
		if(nbmetal>-1){
		nbmetal--;
		gestionmetal.innerHTML=nbmetal; 
		}
	}


	function inversautoclickstone() /*fonction baisse pt stone*/
	{
		if(nbstone>-1){
		nbstone--;
		gestionstone.innerHTML=nbstone; 
		}
		
	}

	function inversautoclickwood() /*fonction baisse pt wood*/
	{	
		if(nbwood>-1){
		nbwood--;
		gestionwood.innerHTML=nbwood;
		}
		
	}


	catastrophe.innerHTML=ptdevie; /*renvoi du nombre de pt de vie restants*/
	

	var intermetal = null;
	var interstone = null;
	var interwood = null;

	setTimeout("baissept()", 200000);

    function baissept(){/* --------------lance la décrémentation des valeurs metal, wood et stone--------*/
			intermetal = setInterval("inversautoclickmetal()", 200);
			interstone = setInterval("inversautoclickstone()", 200);
			interwood = setInterval("inversautoclickwood()", 200);
			catastrophe.style.display="block";
			
	}

	function catastropheStop(){/*-------au click sur nuage fait baisser les pt de vie-----*/
		if(ptdevie>0){
			ptdevie=ptdevie-iptdevie;
			catastrophe.innerHTML=ptdevie;
			console.log("ptdevie: "+ptdevie);						
			} else {
			stopinterv()
			catastrophe.style.display="none";
			setTimeout("baissept()", 20000);
			ptdevie=10;
			}
	}

	function stopinterv(){/* ------------ annule la décrementation-------*/
			clearInterval(intermetal);
			clearInterval(interstone);
			clearInterval(interwood);
	}	

	function looser(){/*----------message de fin de partie----------------*/
	if (nbwood<0 && nbstone<0 && nbmetal<0){
			alert("Vous avez échoué !!!!! Essayez encore ");
			document.location.reload(false);
	}
	}
	setInterval("looser()", 200);		

	/*AJOUT DU WEEK END ----------------------------------------------------*/

function incrementwood()
{
	if(nbwood>=princrementwood)
	{
		inbwood++; /*incrément compteur*/
		nbwood=nbwood-princrementwood; /*déduit le prix*/
		princrementwood=princrementwood+(nb*2);
		princrementwood10=princrementwood*10;
		princrementwood100=princrementwood*100;
		gestionwood.innerHTML=nbwood;
		incrementationwood.innerHTML=princrementwood;
		incrementationwood10.innerHTML=princrementwood*10;
		incrementationwood100.innerHTML=princrementwood*100;
		console.log(princrementwood);
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementwood10()
{
	if(nbwood>=princrementwood10)
	{
		inbwood=inbwood+nb10;
		nbwood=nbwood-princrementwood10;
		princrementwood=princrementwood+(nb*2);
		princrementwood10=princrementwood*nb10;
		princrementwood100=princrementwood*nb10;
		gestionwood.innerHTML=nbwood;
		incrementationwood.innerHTML=princrementwood;
		incrementationwood10.innerHTML=princrementwood*10;
		incrementationwood100.innerHTML=princrementwood*100;
		/*exmple avec 200
		20=200+220->220 si j'achète incrementwood princrementwood10 et princrementwood100 changeront de 
		200=200*10->2000 princrementwood initial donc de 220 princrementwood10 sera a 2200 etc
		2000*10->20000
		*/

		/*princrementwood100=princrementwood10*10 donc on a toujours la valeur princrementwood*100 */ 
	console.log(princrementwood);
	console.log(princrementwood10);
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementwood100()
{
	console.log(princrementwood);
	console.log(princrementwood10);
	console.log(princrementwood100);
	if(nbwood>=princrementwood100)
	{
		inbwood=inbwood+nb100;
		nbwood=nbwood-princrementwood100;
		princrementwood=princrementwood100+princrementwood;
		princrementwood10=princrementwood*nb10
		princrementwood100=princrementwood100*nb100;
		gestionwood.innerHTML=nbwood;
		incrementationwood.innerHTML=princrementwood;
		incrementationwood10.innerHTML=princrementwood*10;
		incrementationwood100.innerHTML=princrementwood*100;
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementstone()
{

	if(nbstone>=princrementstone)
	{
		inbstone++;
		nbstone=nbstone-princrementstone;
		princrementstone=princrementstone+(nb*2);
		princrementstone10=princrementstone*nb10;
		princrementstone100=princrementstone*nb100;
		gestionstone.innerHTML=nbstone;

	incrementationstone.innerHTML=princrementstone;
	incrementationstone10.innerHTML=princrementstone*10;
	incrementationstone100.innerHTML=princrementstone*100;
		console.log(princrementstone);
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementstone10()
{

	if(nbstone>=princrementstone10)
	{
		inbstone=inbstone+nb10;
		nbstone=nbstone-princrementstone10;
		princrementstone=princrementstone10+princrementstone;
		princrementstone10=princrementstone10*nb10;
		princrementstone100=princrementstone10*nb10;
		gestionstone.innerHTML=nbstone;

incrementationstone.innerHTML=princrementstone;
incrementationstone10.innerHTML=princrementstone*10;
incrementationstone100.innerHTML=princrementstone*100;
	console.log(princrementstone);
	console.log(princrementstone10);
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementstone100()
{
	console.log(princrementstone);
	console.log(princrementstone10);
	console.log(princrementstone100);
	if(nbstone>=princrementstone100)
	{
		inbstone=inbstone+nb100;
		nbstone=nbstone-princrementstone100;
		princrementstone=princrementstone100+princrementstone;
		princrementstone10=princrementstone*nb10
		princrementstone100=princrementstone100*nb100;
		gestionstone.innerHTML=nbstone;

incrementationstone.innerHTML=princrementstone;
incrementationstone10.innerHTML=princrementstone*10;
incrementationstone100.innerHTML=princrementstone*100;
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}


function incrementmetal()
{

	if(nbmetal>=princrementmetal)
	{
		inbmetal++;
		nbmetal=nbmetal-princrementmetal;
		princrementmetal=princrementmetal+(nb*2);
		princrementmetal10=princrementmetal*nb10;
		princrementmetal100=princrementmetal*nb100;
		gestionmetal.innerHTML=nbmetal;

incrementationmetal.innerHTML=princrementmetal;
incrementationmetal10.innerHTML=princrementmetal*10;
incrementationmetal100.innerHTML=princrementmetal*100;
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementmetal10()
{
	console.log(princrementmetal);
	console.log(princrementmetal10);
	if(nbmetal>=princrementmetal10)
	{
		inbmetal=inbmetal+nb10;
		nbmetal=nbmetal-princrementmetal10;
		princrementmetal=princrementmetal10+princrementmetal;
		princrementmetal10=princrementmetal10*nb10;
		princrementmetal100=princrementmetal10*nb10;
		gestionmetal.innerHTML=nbmetal;

incrementationmeta.innerHTML=princrementmetal;
incrementationmetal10.innerHTML=princrementmetal*10;
incrementationmetal100.innerHTML=princrementmetal*100;
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function incrementmetal100()
{
	console.log(princrementmetal);
	console.log(princrementmetal10);
	console.log(princrementmetal100);
	if(nbmetal>=princrementmetal100)
	{
		inbmetal=inbmetal+nb100;
		nbmetal=nbmetal-princrementmetal100;
		princrementmetal=princrementmetal100+princrementmetal;
		princrementmetal10=princrementmetal*nb10
		princrementmetal100=princrementmetal100*nb100;
		gestionmetal.innerHTML=nbmetal;

incrementationmetal.innerHTML=princrementmetal;
incrementationmetal10.innerHTML=princrementmetal*10;
incrementationmetal100.innerHTML=princrementmetal*100;
	}
	else
	{
		alert("La maison fait pas crédit");
	}
}

function sellwoodstone() /*Vente de wood pour stone*/
{
	if(nbwood>=nbsell)
	{
		nbwood=nbwood-nbsell;
		nbstone=nbstone+nbsell;
		gestionwood.innerHTML=nbwood;
		gestionstone.innerHTML=nbstone;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellwoodmetal() /*Vente de wood pour metal*/
{
	if(nbwood>=nbsell)
	{
		nbwood=nbwood-nbsell;
		nbmetal=nbmetal+nbsell;
		gestionwood.innerHTML=nbwood;
		gestionmetal.innerHTML=nbmetal;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellstonewood() /*Vente de stone pour wood*/
{
	if(nbstone>=nbsell)
	{
		nbstone=nbstone-nbsell;
		nbwood=nbwood+nbsell;
		gestionstone.innerHTML=nbstone;
		gestionwood.innerHTML=nbwood;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellstonemetal() /*Vente de stone pour metal*/
{
	if(nbstone>=nbsell)
	{
		nbstone=nbstone-nbsell;
		nbmetal=nbmetal+nbsell;
		gestionstone.innerHTML=nbstone;
		gestionmetal.innerHTML=nbmetal;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellmetalwood() /*Vente de metal pour wood*/
{
	if(nbmetal>=nbsell)
	{
		nbmetal=nbmetal-nbsell;
		nbwood=nbwood+nbsell;
		gestionmetal.innerHTML=nbmetal;
		gestionwood.innerHTML=nbwood;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellmetalstone() /*Vente de metal pour stone*/
{
	if(nbmetal>=nbsell)
	{
		nbmetal=nbmetal-nbsell;
		nbstone=nbstone+nbsell;
		gestionmetal.innerHTML=nbmetal;
		gestionstone.innerHTML=nbstone;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}


var sousmenuvertical=document.getElementById(sousmenuvertical);


function apparaitre()
{
	if(sousmenuvertical=="block")
	{
		sousmenuvertical.style.display="none";
	}
}

function sellwoodstone() /*Vente de wood pour stone*/
{
	if(nbwood>=nbsell)
	{
		nbwood=nbwood-nbsell;
		nbstone=nbstone+nbsell;
		gestionwood.innerHTML=nbwood;
		gestionstone.innerHTML=nbstone;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellwoodmetal() /*Vente de wood pour metal*/
{
	if(nbwood>=nbsell)
	{
		nbwood=nbwood-nbsell;
		nbmetal=nbmetal+nbsell;
		gestionwood.innerHTML=nbwood;
		gestionmetal.innerHTML=nbmetal;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellstonewood() /*Vente de stone pour wood*/
{
	if(nbstone>=nbsell)
	{
		nbstone=nbstone-nbsell;
		nbwood=nbwood+nbsell;
		gestionstone.innerHTML=nbstone;
		gestionwood.innerHTML=nbwood;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellstonemetal() /*Vente de stone pour metal*/
{
	if(nbstone>=nbsell)
	{
		nbstone=nbstone-nbsell;
		nbmetal=nbmetal+nbsell;
		gestionstone.innerHTML=nbstone;
		gestionmetal.innerHTML=nbmetal;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellmetalwood() /*Vente de metal pour wood*/
{
	if(nbmetal>=nbsell)
	{
		nbmetal=nbmetal-nbsell;
		nbwood=nbwood+nbsell;
		gestionmetal.innerHTML=nbmetal;
		gestionwood.innerHTML=nbwood;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}

function sellmetalstone() /*Vente de metal pour stone*/
{
	if(nbmetal>=nbsell)
	{
		nbmetal=nbmetal-nbsell;
		nbstone=nbstone+nbsell;
		gestionmetal.innerHTML=nbmetal;
		gestionstone.innerHTML=nbstone;
	}
	else
	{
		alert("Ressources insuffisantes");
	}
}


var sousmenuvertical=document.getElementById(sousmenuvertical);


function apparaitre()
{
	if(sousmenuvertical=="block")
	{
		sousmenuvertical.style.display="none";
	}
}
/*--------------------------------------------------------------------------*/























