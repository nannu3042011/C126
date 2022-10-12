function setup(){
    canvas = creatCanvas(300, 300,);
    canvas.center();
    video = creatCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_43s3KjrL/',modelLoaded())
}

function modelLoaded() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].lael;
        document.getElementById("results_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}