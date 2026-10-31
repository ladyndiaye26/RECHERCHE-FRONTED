const etudiant = {
    id: 2026,
    nom: "Ndiaye",
    prenom: "Moussa",
    filiere: "IAGE",
    niveau: "L2",
    ville: "Dakar"
};
const resultats  = [15, 11, 17,  13, 16];
const {nom, prenom, filiere} = etudiant;
console.log(nom, prenom, filiere);

const {niveau: classe } = etudiant;
console.log(classe);

const [premierenote, deuxiemenote] =resultats;
const dernierenote = resultats[resultats.length - 1];
console.log(premierenote, deuxiemenote, dernierenote);
console.log(resultats);
const [noteUn, noteTroix] = resultats;
console.log(noteUn, noteTroix);
const { email =" email non  renseigne"} = etudiant;
console.log(email);
console.log("je m'appelle " + prenom + " " + nom + " je suis en " + filiere + " (" + classe + ").");
