var total = 1
let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
for(let count=1; count <= number; count++)
{
  total *= count;
}

console.log(`Le résultat est ${total}`);