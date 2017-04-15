/* 
Activité : gestion des contacts
*/

var Contact = {
    // Initialisation du contact
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    // Renvoie la description du contact
    decrire: function () {
        var description = "nom : " + this.nom + ", prénom : " + this.prenom + "<br>";
        return description;
    }
};

// Création de contactX avec Contact comme prototype
var contact1 = Object.create(Contact);
contact1.init("Albert", "CAMUS");
var contact2 = Object.create(Contact);
contact2.init("Eugène", "IONESCO");
var contacts = []; //Déclaration du tableau contacts
contacts.push(contact1); //Ajout d'un nouvel élément dans le tableau contacts
contacts.push(contact2);

console.log("Bienvenue dans le gestionnaire des contacts !");
document.write("<div>Bienvenue dans le gestionnaire des contacts !</div>");
var options;
while (options !== "0") { // La variable options sera exécuté tant que l'utilisateur n'aura pas saisi le choix "0"
    console.log("\n1 : Lister les contacts"); // ("\n1" aère le texte dans la console)
    document.write("<div>1 : Lister les contacts</div>");
    console.log("2 : Ajouter un contact");
    document.write("<div>2 : Ajouter un contact</div>");
    console.log("0 : Quitter");
    document.write("<div>0 : Quitter</div>");
    options = prompt("Choisissez une option :"); // Ouvre une boîte de dialogue permettant de saisir le choix
    if (options === "1") { // Affiche la liste des contacts à chaque fois que l'utilisateur saisit "1"
        console.log("\nVoici la liste de tous vos contacts :");
        document.write("<div>Voici la liste de tous vos contacts :</div>");
        contacts.forEach(function (contact) {
          console.log(contact.decrire());
          document.write(contact.decrire())
        });
    } else if (options === "2") { // Crée un nouveau contact à chaque fois que l'utilisateur saisit "2"
        console.log("\nEntrez le prénom du nouveau contact :");
        document.write("<div>Entrez le prénom du nouveau contact :</div>");
        var prenomNvContact = prompt("Entrez le prénom du nouveau contact :");
        console.log(prenomNvContact);
        document.write(prenomNvContact);
        console.log("Entrez le nom du nouveau contact :");
        document.write("<div>Entrez le nom du nouveau contact :</div>");
        var nomNvContact = prompt("Entrez le nom du nouveau contact :");
        console.log(nomNvContact);
        document.write(nomNvContact);
        var contactX = Object.create(Contact); // Création de contactX avec Contact comme prototype et les informations nom et prénom saisies
        contactX.init(prenomNvContact, nomNvContact);
        contacts.push(contactX); //Ajout du nouvel élément dans le tableau contacts
        console.log("Nouveau contact ajouté : " + prenomNvContact + " " + nomNvContact);
        document.write("<div>Nouveau contact ajouté : " + prenomNvContact + " " + nomNvContact + "</div>");
    } else if (options === "0") { // Arrête le programme
        console.log("\nFin du programme.");
        document.write("<div>Fin du programme.</div>");
    } else { // Au cas où l'utilisateur saisirait autre chose que 0, 1 ou 2...
        console.log("\nChoix non disponible.");
        document.write("<div>Choix non disponible.</div>");
    };
};