function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/myYgpIQ8y', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML = 'I can hear - '+
        results[0].label
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img1 = document.getElementById("lion.gif");
        img2 = document.getElementById("bark.gif");

        if (results[0].label == "Background Noise") {
            img1.src = 'bark.gif';
        } else if (results[0].label == "Car Horn") {
            img1.src = 'lion.gif';
        } else if (results[0].label == "Clap") {
            img1.src = 'lion.gif';
}
}
}