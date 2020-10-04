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

    <div class="bannerContainer">
        <div class="waveContainer">
            <img class="wave1" src="src/img/Wave1.svg">
            <img class="wave2" src="src/img/Wave2.svg">
        </div>
        <div class="title">Boston College</div>
        <div id="subTitle"></div>
        <div class="signupContainer">
            <img class="gasson" src="src/img/Gasson.svg" />
            <input type="email" placeholder="student@bc.edu" autocapitalize="off" autocorrect="off" class="emailInput" />
            <button type="submit" name="join" class="joinBtn">Join</button>
        </div>
    </div>

    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script>
        var subTitle = document.getElementById('subTitle');

        var typewriter = new Typewriter(subTitle, {});

        typewriter.typeString('Computer Science Society')
            .pauseFor(2500)
            .start();
    </script>
</body>

</html>