
const etudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12], 
    filiere: "IAGE" 
};
function extraireidentite(etudiant) {
    const { prenom, nom, filiere } = etudiant;
    const identite = {
        prenom: prenom,
        nom: nom,
        filiere: filiere
    };
    return identite;
}
function calculemoyennenote(notes) {
    if (notes.length === 0) {
        return 0;
    } else {
        let somme = 0;
        for (let i = 0; i < notes.length; i++) {
            somme = somme + notes[i];
        }
        return somme / notes.length;
    }
}
function ajoutenote(etudiant, nouvellenote) {
    const nouvellesnote = [...etudiant.note, nouvellenote];
    const nouveletudiant = { ...etudiant, note: nouvellenote };
    return nouveletudiant;
}

function creeresume(etudiant, ...options) {
    const identite = extraitidentite(etudiant);
    const moyenne = calculemoyennenote(etudiant.note);
    const resume = {
        identite: identite,
        moyenne: moyenne,
        options: options
    };
    return resume;
}
 
console.log(extraireidentite(etudiantL2));
console.log(calculemoyennenote([13, 16, 12])); 
console.log(calculemoyennenote([]));           
console.log(calculemoyennenote([10]));         
 
const etudiantavecnote = ajouterNote(etudiantL2, 15);
console.log(etudiantavecNote.notes); 
console.log(etudiantL2.notes);                          
console.log(etudiantL2.notes.length);               
console.log(etudiantL2 === etudiantAvecNote);           
console.log(etudiantL2.notes === etudiantAvecNote.notes); 
 
console.log(creerresume(etudiantL2, "stage", "projet"));
console.log(creerresume(etudiantL2)); 
console.log(etudiantL2);

 