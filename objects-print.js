//CREAZIONE OGGETTO STUDENTE, CON PROPIRIETà NOME,COGNOME, ETà

function helloStudent () {
  var student1 = {
    "Nome" : "Marco",
    "Cognome" : "Bianchi",
    "Età" : 19
  };

  for (var field in student1){
    console.log(student1[field]);
  }
}

helloStudent();



// CREAZIONE ARRAY DI OGGETTI DI STUDENTI

function classe(){

  var students = [

    {"nome" : "Marco", "cognome" : "Ross" , "età" : 41},
    {"nome" : "Luca", "cognome" : "Bianchi" , "età" : 10},
    {"nome" : "Giulia", "cognome" : "Trullo" , "età" : 25},
    {"nome" : "Francesca", "cognome" : "Rossi" , "età" : 14},
    {"nome" : "Gennaro", "cognome" : "Finto" , "età" : 33},
    {"nome" : "Federica", "cognome" : "Verdi" , "età" : 21}
  ];

  students.nome = prompt("Inserisci il nome di un nuovo studente");
  students.cognome = prompt("Inserisci il cognome del nuovo studente");
  students.età = Number(prompt("Inserisci l'età del nuovo studente"));
  for (var caratteristiche in students){
    console.log(students[caratteristiche]);
  }

  for (var i = 0; i < students.length; i++) {
    console.log (students[i]["nome"]+ " " + students[i]["cognome"]);
  }
}

classe();
