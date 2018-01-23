class Person {

  constructor( name, surname, age, gender, height, weight, img, rating, like, inRelation) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.img = img;
    this.rating = rating;
    this.like = 0;
    this.inRelation = inRelation;
  }

 
  render(i) {
    let msg ='';
     msg+= `
  
      <div class="pers" class="col-lg-3 col-md-6 col-sm-12 col-xs-12" style="margin-top:30px;">
        <div class="pic">
          <img src="${this.img}">
        </div>
        <div class="text">
          <h4 style="color:white"> Name: ${this.name}</h4>
          <h4 style="color:white"> Surname: ${this.surname}</h4>
          <p style="color:white"> Gender: ${this.gender}</p>
          <p style="color:white"> Age: ${this.age}</p>
          <p style="color:white"> ${this.height}, ${this.weight}</p>
           <button onclick="like(`+ i +`)" style="background-color:#FA7676;border-radius:10px;">Like</button>
          <span id="like`+ i +`">${this.like} </span><img src="img/like.png">
        </div>
      </div>
      `;
    return msg;
  }
}

function like (index){
  persAll[index].like=persAll[index].like+1;
  document.getElementById('like' + index).innerHTML=persAll[index].like;
           }

var persAll = [
  new Person("Igor", "blabla", 18, "male", "183 cm", "75 kg", "img/boy1.jpg"),
  new Person("Bojana", "BLa", 18, "female", "175 cm", "74 kg", "img/girl1.jpg"),
  new Person("Marko", "blabla", 18,  "male", "197 cm", "55 kg", "img/boy2.jpg"),  
  new Person("Dragana", "Bla", 18,  "female", "167 cm", "55 kg", "img/girl2.jpg"), 
  new Person("Ivan", "blabla", 18,"male", "185 cm", "70 kg", "img/boy3.jpg"), 
  new Person("Natascha", "bla", 18,"female", "185 cm", "70 kg", "img/girl3.jpg"),
  new Person("Darko", "blabla", 18, "male", "183 cm", "75 kg", "img/boy5.jpg"),
  new Person("Vanja", "bla", 18, "female", "184 cm", "75 kg", "img/girl4.jpg"),  
  new Person("Sanela", "bla", 18, "female", "183 cm", "75 kg", "img/girl5.jpg"),
  new Person("Andja", "bla", 18,  "female", "167 cm", "55 kg", "img/girl6.jpg",),  
  new Person("Mihaela", "bla", 18,"female", "185 cm", "70 kg", "img/girl7.jpg"),
  new Person("Ana", "bla", 18, "female", "163 cm", "48 kg", "img/girl8.jpg"),  
  new Person("Jovana", "bla", 18, "female", "183 cm", "75 kg", "img/girl9.jpg"),
  new Person("Barbara", "bla", 18,  "female", "167 cm", "55 kg", "img/girl10.jpg"),  

  new Person("Igor", "blabla", 18, "male", "183 cm", "75 kg", "img/boy1.jpg"),
  new Person("Dragana", "Bla", 18,  "female", "167 cm", "55 kg", "img/girl2.jpg"),
  new Person("Marko", "blabla", 18,  "male", "197 cm", "55 kg", "img/boy2.jpg"),  
  new Person("Ivan", "blabla", 18,"male", "185 cm", "70 kg", "img/boy3.jpg"),
  new Person("Natascha", "bla", 18,"female", "185 cm", "70 kg", "img/girl3.jpg"),
  new Person("Jon", "blabal", 18, "male", "173 cm", "48 kg", "img/boy4.jpg"),  
  new Person("Mihaela", "bla", 18,"female", "185 cm", "70 kg", "img/girl7.jpg"),
  new Person("Darko", "blabla", 18, "male", "183 cm", "75 kg", "img/boy5.jpg"),
  new Person("Ana", "bla", 18, "female", "163 cm", "48 kg", "img/girl8.jpg"),  
  new Person("Goran", "blabla", 18,  "male", "167 cm", "55 kg", "img/boy6.jpg"),  
  new Person("Zeljko", "blabla", 18,"male", "185 cm", "70 kg", "img/boy7.jpg"),
  new Person("Todor", "blabla", 18, "male", "193 cm", "48 kg", "img/boy8.jpg"),
  new Person("Barbara", "bla", 18,  "female", "167 cm", "55 kg", "img/girl10.jpg"),  
  new Person("Daniel", "blabal", 18, "male", "183 cm", "75 kg", "img/boy9.jpg"),
  new Person("Vojin", "blabla", 18,  "male", "1857 cm", "55 kg", "img/boy10.jpg")
  ];


//Funktionen für index.html - Seite

function allList() {
  let allList = document.getElementById("allPerson");
  for (var i = 0; i < persAll.length; i++) {

    allList.innerHTML += persAll[i].render(i);
  }
}

//Funktionen für men.html - Seite

function onlyMen() {
  let allList = document.getElementById("men");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "male") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}

//Funktionen für women.html - Seite

function onlyWomen() {
  let allList = document.getElementById("women");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "female") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}