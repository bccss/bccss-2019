<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Boston College Computer Science Society" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8a100b" />

    <link rel="stylesheet" href="CSS/style.css">

    <title>BCCSS</title>
</head>

<?php include 'navbar.php' ?>

<body>

    <!-- Home -->
    <div class="home-container">
        <div class="wave-container">
            <img class="wave1" src="src/img/Wave1.svg">
            <img class="wave2" src="src/img/Wave2.svg">
        </div>
        <div class="title">Boston College</div>
        <div id="sub-title"></div>
        <div class="signup-container">
            <img class="gasson" src="src/img/Gasson.svg" />
            <input type="email" placeholder="student@bc.edu" autocapitalize="off" autocorrect="off" class="email-input" />
            <button type="submit" name="join" class="join-button">Join</button>
        </div>
    </div>

    <!-- About -->
    <div class="banner">
        <h1 class="right">About BCCSS</h1>
    </div>
    <p class="mission">The Boston College Computer Science Society aims to foster an inclusive tech community for students of all majors to develop their coding skills, encourage each other to make their ideas come to life, and help students navigate through their career journey.</p>
    <div class="about-container">
        <div class="item">
            <div class="circle-icon">
                <i class="fas fa-users"></i>
            </div>
            <h1> Events </h1>
            <p className="description">The community team is here to help students connect with alumni, faculty and fellow technologists in the BC community. This semester we’re holding virtual events to help provide an environment where the CS community can comfortably network and interact with one another.</p>
        </div>

        <div class="item">
            <div class="circle-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h1> Workshops </h1>
            <p className="description">We organize informative community workshops and project nights for students of all experience levels to build and learn new skills. Join us for topics such as collaborative project management on GitHub, basic iOS development in Swift, and advanced machine learning applications.</p>
        </div>

        <div class="item">
            <div class="circle-icon">
                <img src="src/img/hth.svg"/>
            </div>
            <h1> Hackathons </h1>
            <p className="description">We are excited to introduce Boston College's fifth 24-hour hackathon! Hack the Heights is going completely virtual this year! It will feature virtual technical workshops, tech talks, and prizes for beginners and seasoned hackers alike. The event kicks off on Saturday, November 14 and concludes on Sunday, November 15.</p>
        </div>
    </div>

    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script src="https://kit.fontawesome.com/ddaf86e2a8.js"></script>
    <script>
        var subTitle = document.getElementById('subTitle');

        var typewriter = new Typewriter(subTitle, {});

        typewriter.typeString('Computer Science Society')
            .pauseFor(2500)
            .start();
    </script>
</body>

<?php include 'footer.php' ?>


</html>