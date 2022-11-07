//teachablemachine.withgoogle.com/models/Y83ocmLvB/

function StartClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier= m15.soundClassifier('//teachablemachine.withgoogle.com/models/Y83ocmLvB/', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}