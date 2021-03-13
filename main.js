Prediction1="";
Prediction2="";
 
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function (Data_URI){
        document.getElementById("result").innerHTML="<img src="+Data_URI+" id='capture_image'>"
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JyyiavLQC/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is "+Prediction1;
    speak_data_2="And the second prediction is "+Prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}