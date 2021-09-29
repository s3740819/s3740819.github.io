var text = "Currently a 4th-year software engineering student at RMIT University Vietnam, passionate about programming as well as bringing innovative products to life.";
var index = 0;
function showSlides(n) {
    document.getElementById("content").className = "text";

    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n-1].className += " active";
    setTimeout(()=>{
            document.getElementById("content").className = "";
    }, 300);


    if(n == 1){
        document.getElementById("title").innerHTML = "<h2><b>Parcheesi game</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/zd247/cocangua'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> Java, Javafx, CSS, game development</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Jul, 2019 - Sep, 2019";
    }
    else if (n == 2){
        document.getElementById("title").innerHTML = "<h2><b>Embedded System Applications with Nuvoton board</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/s3740819/Embedded-Design'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> Embedded C, game development</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Jul, 2019 - Aug, 2019";
    }
    else if (n == 3){
        document.getElementById("title").innerHTML = "<h2><b>QA Testing project</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/s3740819/QA-Testing'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> Java, Spring framework, QA Testing skills</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Mar, 2020 - Apr, 2020";
    }
    else if (n == 4){
        document.getElementById("title").innerHTML = "<h2><b>My RMIT application</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/hoangdesu/myRMIT'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> Android development with Java, Firebase, FireStore, Google SDKs and APIs</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Jul, 2020 - Aug, 2020";
    }
    else if (n == 5){
        document.getElementById("title").innerHTML = "<h2><b>Autonomous car with Raspberry Pi</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/hoang-10n/EEET2610_Design_3'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> IoT development, Python programming, Embedded System development, Computer Vision</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Mar, 2020 - Apr, 2020";
    }
    else if (n == 6){
        document.getElementById("title").innerHTML = "<h2><b>Drug Store Online (Web)</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/javatalent115/Enterprise-Assignment'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> HTML, CSS, JavaScript, Spring framework, PostgreSQL</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Aug, 2021 - Sep, 2021";
    }
    else if (n == 7){
        document.getElementById("title").innerHTML = "<h2><b>Covid19 Behavior Management (Web)</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/javatalent115/cloud-assigment'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> Cloud computing, AWS, nodeJS, reactJS</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Aug, 2021 - Sep, 2021";
    }
    else if (n == 8){
        document.getElementById("title").innerHTML = "<h2><b>Bare Metal OS development (Crossy Road Game) with Raspberry Pi</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/s3740819/Embedded-System-OS-and-Interfacing'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Skill Set Utilized: </b> Embedded C, Image Processing, Bare Metal OS development</br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Aug, 2021 - Sep, 2021";
    }

}

function view(){
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });    
}

function typing(){
    if(index < text.length){
        document.getElementById("overview").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 20);
    }
    if (index == 63){
        document.getElementById("temp").innerHTML = "";
    }
    else if (index == 121){
        document.getElementById("temp1").innerHTML = "";
    }
}
