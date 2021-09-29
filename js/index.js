<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">   
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="js/index.js"></script>
    <title>Bao Tran Portfolio</title>
</head>
<body>
    <div class="nav-bar">
        <div class="logo">
            <a style="cursor: unset;">William</a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="https://resume.io/r/uUIfViOL4">Resume</a></li>
                <li><a style="cursor: pointer;" onclick="view()">Projects</a></li>
            </ul>
        </div>
        <div class="social-media">
            <ul>
                <li><a href="https://www.facebook.com/people/Kim-B%E1%BA%A3o/100005663730934/"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://github.com/s3740819/"><i class="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/bao-tran-78161021a/"><i class="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
    <section class="header" id="header">
        <div class="hero">
            <div class="row">
                <div class="left-section">
                    <div style="margin-left: 20%; margin-bottom: 10px;"> 
                        <img src="image.jpg" width="200px" style="border-radius: 50%;">
                    </div>
                    <div class="content">
                        <h2>Tran Kim Bao</h2>
                        <p id="overview"></p>
                        <div id="temp" style="margin-bottom: 8px;"><br></div>
                        <div id="temp1" style="margin-bottom: 10px;"><br></div>

                    </div>
                </div>
                <div class="container">
                    <div class="eye">
                        <div class="wrinkle1"></div>
                        <div class="wrinkle2"></div>
                        <div class="wrinkle3"></div>
                        <div class="shut">
                            <span></span>
                        </div>
                        <div class="ball">
                            <div class="pupil"></div>
                        </div>
                    </div>
                    <div class="sub-container1">
                
                    </div>
                    <div class="sub-container2">
                        
                    </div>
                    <div class="sub-container3">
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <div class="wrapper">
        <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>


    
    <div style="font-size: 40px; text-align: center; background: linear-gradient(#5ac75a,#0091b5);"><b>Projects</b></div>
    <div class="slideshow-container" style="margin-bottom: 50px; margin-top: 50px;">
        <div class="mySlides" style="text-align: center;">
            <div id="title" style="color: crimson;"></div>
            <div id="content" style="color: whitesmoke;"></div>
        </div>
    </div>

    <div style="text-align:center; padding-bottom: 50px;">
        <div style="text-align:center;">
            <span class="dot" onclick="showSlides(1)"></span> 
            <span class="dot" onclick="showSlides(2)"></span> 
            <span class="dot" onclick="showSlides(3)"></span> 
            <span class="dot" onclick="showSlides(4)"></span> 
            <span class="dot" onclick="showSlides(5)"></span> 
            <span class="dot" onclick="showSlides(6)"></span> 
            <span class="dot" onclick="showSlides(7)"></span> 
            <span class="dot" onclick="showSlides(8)"></span> 
        </div>
    </div>
    <script>
        typing();
        showSlides(1);
    </script>

</body>
</html>
