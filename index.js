// Code your solutions in this file
function writeCards(name, event){
    const results = [];
    for (let i=0; i <name.length; i++){
       results.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        }
        return results;
    }

    function countDown(num){
    
        while (num >= 0) {
            console.log(num)
          num--
        }
}