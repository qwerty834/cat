function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/01sKRcPIN/model.json', modelready); 
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        if(results[0].label == "Meowing"){
            document.getElementById("result_confidence").innerHTML="CAT";
        }
        else if(results[0].label =="Roar"){
            document.getElementById("result_confidence").innerHTML="LION";
        }
        else if(results[0].label =="Barking"){
            document.getElementById("result_confidence").innerHTML="Dog";
        }
        else{
            document.getElementById("result_confidence").innerHTML="Background Noise";
        }
}};
