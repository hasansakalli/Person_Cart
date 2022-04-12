var personName = document.getElementById("name");
var personJob = document.getElementById("job");
var personText = document.getElementById("text");
var personImage = document.querySelector(".personImg");

const person = [
  {
    foto: "1.jpg",
    name: "Lea More",
    job: "Deutsch Lehrerin",
    text: "Durch meine Erfahrungen, die ich durch mein Studium habe, kenne ich viele Methoden, wie man strukturiert und erfolgreich lernen kann. Für das Fach Deutsch geht es entscheidend auch um Stil und Sprache, die man pflegen muss. ",
  },
  {
    foto: "2.jpg",
    name: "Jonas Carl",
    job: "Mathe Lehrer",
    text: "Ich bin mit allen gängigen Videokonferenzsystemen ausgestattet und führe den Nachhilfeunterricht zusätzlich mit einem IPad durch, auf dem handschriftliche Notizen geteilt werden können.Auf dem handschriftliche Notizen geteilt werden können"
    ,
  },
  {
    foto: "3.jpg",
    name: "Alice Irina",
    job: "Physikunterricht",
    text: "Den Ablauf des Unterrichts werde ich ganz individuell an jede*n einzelne*n anpassen. Mir ist es besonders wichtig, dass wir Spaß an der Sache haben. Schon während meiner Schulzeit habe ich Hausaufgaben- und Nachhilfe gegeben und wurde immer für meine gute Erklärweise und Geduld gelobt.",
  },
  {
    foto: "4.jpg",
    name: "Alex Pascal",
    job: "Spanisch Teacher",
    text: "I love motivating my students to communicate and learn from mistakes. I also like to conduct my teaching as much as possible in Spanish so that the students can have more contact with the language. Students can be immersed in the language from day one. ",
  },
  {
    foto: "5.jpg",
    name: "Rebekka Oly",
    job: "Fransözich Lehrerin",
    text: "Sprachen sind meiner Meinung nach dazu da benutzt zu werden! Es liegt mir deshalb viel daran, die Sprache praxisnah und interaktiv zu vermitteln, sodass man sie auch tatsächlich im echten Leben einsetzen kann und Spaß daran hat :)  ",
  },
  {
    foto: "6.jpg",
    name: "Marvin Thomas",
    job: "Web Development",
    text: "Lies weiter, wenn du Frontend-Entwickler werden willst, Wissen in den Bereichen HTML, CSS, JavaScript, React oder TypeScript auffrischen möchtest oder Hilfe bei deinen eigenen Webdevelopment-Projekten benötigst. Wir schauen uns React im Detail an.",
  },
];


for (i = 0; i < person.length; i++) {
  person[i];
  
}
function yazdir() {
  personImage.setAttribute("src", "images/" + person[i].foto);
  personName.innerHTML = person[i].name;
  personJob.innerHTML = person[i].job;
  personText.innerHTML = person[i].text;
}
console.log(yazdir())

function right() {
  if (i >= person.length - 1)
  i = -1;
  i++;
  yazdir();
  console.log(i)
}

function left() {
  if (i <= 0)
i = person.length;
  i--;
  yazdir();
  console.log(i)
}


var uretilenNumber;
var lastNumber;
function randomNumber() {
  uretilenNumber = Math.floor(Math.random() * person.length);
  
         while(uretilenNumber == lastNumber) {
             uretilenNumber = Math.floor(Math.random()*person.length)
        } 
        
        lastNumber = uretilenNumber; 
        console.log(uretilenNumber)



  personImage.setAttribute("src", "images/" + person[uretilenNumber].foto);
  personName.innerHTML = person[uretilenNumber].name;
  personJob.innerHTML = person[uretilenNumber].job;
  personText.innerHTML = person[uretilenNumber].text;
}
