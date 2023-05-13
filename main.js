var dog = 0;
var cat = 0;
images = document.getElementById("img");

function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
        } else {
          console.log(results);  
    
          random_number_r = Math.floor(Math.random()*255) + 1;
          random_number_g = Math.floor(Math.random()*255) + 1;
          random_number_b = Math.floor(Math.random()*255) + 1;

          document.getElementById("result_lable").innerHTML = "I can hear :-" + results[0].label;
          document.getElementById("result_count").innerHTML = "Accuracy :-" + (results[0].confidence*100).toFixed(2) + "%";;

          img1 = document.getElementById("Dog");
          img2 = document.getElementById("Cat");
          img3 = document.getElementById("ear");

          if (results[0].label == "Meowing") {
            img2.src = "Cat.png" ;
        }
        else if(results[0].label == "Barking"){
            img1.src = "" ;
            img1.src = "Dog.png" ;
        }
        else{
            img1.src = "" ;
            img3.src = "ear.png" ;
        }
}
}
