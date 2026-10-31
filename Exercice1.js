function calculmoyenne(note1, note2 , note3){
    let somme = note1 + note2 +note3;
    let moyenne = somme / 3;
    return moyenne;
}
function siadmis(moyenne){
    if (moyenne >= 10){
        return true;
    }else {
        return false;
    }
}
function prixttc(prixht,tauxtva =0.18){
    let montanttva =prixht * tauxtva;
    let prixttc =prixht + montanttva;
    return prixttc;
}
const convminute  = (heure) => {
    return heures * 60;
};
console.log(calculmoyenne(12, 14, 16));
console.log(siadmis(9.5));
console.log(calculeprixttc(10000));
console.log(convminute (2));


