let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramide()
{
  for(let count=1; count <= number; count++)
  {
    console.log(" ".repeat(number - count) + "#".repeat(count));
  }
}


pyramide()