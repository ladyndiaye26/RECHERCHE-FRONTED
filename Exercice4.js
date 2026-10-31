function  additionner(...nombre){
    let somme = 0;
    for (let i = 0; i < nombre.length; i++){
        somme = somme  + nombre[i];
    }
    return somme;
}
function afficherpremieretautre(premier, ...autres)
{
    console.log("premier :" ,premier);
    console.log("les autres :" ,autres);


}
function creefiche(nom, filiere, ...competence){
    const fiche = {
        nom: nom,
        filiere: filiere,
        competence: competence
    };
    return fiche;
}
console.log(additionner(2, 3));
console.log(additionner(2, 3, 4, 5));
console.log(additionner(2, 3));
console.log(additionner());

afficherpremieretautres("a", "b", "c", "d");
afficherpremieretautres("seul");
console.log(creerfiche("Awa", "IAGE", "Javascript","SQL"));
console.log(creerfiche("Ibra", "IAGE"));
