const clinicas = [ 
  {
    
    cidade: 'Diadema',
    nome: 'clined',
    endereco: 'rua das clinicas, 40',
    horario: '06:00 as 19:00'
  },

  {
    cidade: 'Diadema',
    nome: 'clined',
    endereco: 'rua das clinicas, 40',
    horario: '06:00 as 19:00'
  },

  {
    cidade: 'Diadema',
    nome: 'clined',
    endereco: 'rua das clinicas, 40',
    horario: '06:00 as 19:00'
  },

  {
    cidade: 'Diadema',
    nome: 'clined',
    endereco: 'rua das clinicas, 40',
    horario: '06:00 as 19:00'
  }
]



// console.log(document.getElementsByTagName("form"))

// document.getElementsByTagName("form").addEventListener("submit", 

//   function(){
//     alert("teste")
//   }

// );



function funcaoProcurar(event){

 event.preventDefault()

  const clinic= document.getElementById('clinic').value
  console.log(clinic)

  for (let i=0; i< clinicas.length; i++) {

    console.log (clinicas[i].cidade)
   

    if(clinicas[i].cidade==clinic) {

      document.getElementById('results').innerHTML=
       "<h2>"+ clinicas[i].nome+ "</h2>" +
      "<p>"+clinicas[i].endereco+ "</p>" +
       "<p>"+ clinicas[i].horario+"</p>"
          
     console.log("funcionou")
      
    } else {
      document.getElementById('results').innerHTML="<p>Não foi encontrado nenhuma clínica</p>"
        
     console.log("teste")
    }
  }
 
}
   


