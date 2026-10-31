const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantbase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };
const touslesetudiants = [...groupeA, ...groupeB];
console.log(touslesetudiants);
const copiegroupeA = [...groupeA];
copiegroupeA.push("Cheikh");
console.log(copiegroupeA);
console.log(groupeA); 
const etudiantcomplet = { ...etudiantbase, age: 22, ville: "Dakar" };
console.log(etudiantcomplet);
const etudiantl3 = { ...etudiantbase, niveau: "L3" };
console.log(etudiantl3.niveau);   
console.log(etudiantbase.niveau); 

const coordonnee = { nom: "Sow", ville: "Dakar", telephone: "770000000" };
const contact = { email: "sow@exemple.com", ville: "Thiès" };
const profil = { ...coordonnee, ...contact };
console.log(profil);
console.log(profil.ville); 


