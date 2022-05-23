let hero = {
    nama : "nana",
    ras : "kucing",
    warna : "pink",
    kemampuan : {
        pasif : "jadi kucing",
        skill1 : "boomerang",
    }
}
for (var x in hero){
    console.log(hero[x])
}