/**
 * Created by session2 on 9/28/15.
 */
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
while(slaying) {
    alert("You are called to slay a dragon");
    if (youHit) {
        console.log("You Hit!");
        totalDamage += damageThisRound;
        if(totalDamage >= 1) {
            console.log("You win!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You lose!");
        slaying = false;
    }

    console.log("You missed!");
    slaying = false;
}
if (youHit == 1) {
    console.log("You won!");
} else {
    console.log("You died!");
}