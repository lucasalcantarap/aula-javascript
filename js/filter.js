//Exemplo com filter

const pets = [
    {
      name:'Félix',
      type:'Cat',
      age:1
    },
  
    {
      name:'Ravena',
      type:'Cat',
      age:0.7
    },
  
    {
      name:'Mel',
      type:'Dog',
      age:2
    }
  ]
  
  const eMenorQueUm = (idade) => {
    return idade < 1
  }
  
  const newPets = pets.filter(({age}) => eMenorQueUm(age))
  
  
  //console.log(pets)// array original sem modificação
  console.log(newPets)