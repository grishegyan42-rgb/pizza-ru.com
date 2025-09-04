<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./scripte.js"></script>
    <link rel="stylesheet" href="./styles.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Ресторан Официальный</title>
</head>

<body>

    <header>
        <a href="#" class="logo"> <span>Р</span>есторан</a>
        <div class="menuToggle" onclick="toggleMenu();"></div>
        <ul class="navigation">
            <li><a href="#banner" onclick="toggleMenu();">Домой</a></li>
            <li><a href="#about" onclick="toggleMenu();">О нас</a></li>
            <li><a href="#menu" onclick="toggleMenu();">Меню</a></li>
            <li><a href="#expert" onclick="toggleMenu();">Эксперт</a></li>
            <li><a href="./Shop/shop.html" onclick="toggleMenu();">Магазин</a></li>
            <li><a href="./Email/Email.html" onclick="toggleMenu();">Контакт</a></li>
        </ul>
    </header>

    <section class="banner" id="banner">
        <div class="content">
            <h2> Всегда выбирайте Хорошее</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere nisi neque animi beatae
                praesentium, rem doloribus labore sapiente iusto pariatur eligendi minima quidem molestias repellendus
                qui asperiores, perferendis autem? </p>
            <a href="#banner" class="btn"> Наше меню </a>
        </div>
    </section>

    <section class="about" id="about">
        <div class="row">
            <div class="col50">
                <h2 class="titleText"><span>О</span>нас </h2><br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia harum est corporis blanditiis totam
                    rerum! Rem neque quidem, <br> similique obcaecati quibusdam excepturi ipsum, inventore sed quasi
                    eaque enim, ducimus cumque! <br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia harum est corporis blanditiis
                    totam rerum! Rem neque quidem, <br> similique obcaecati quibusdam excepturi ipsum, inventore sed
                    quasi eaque enim, ducimus cumque!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br> Officia harum est corporis blanditiis
                    totam rerum! Rem neque quidem, <br> similique obcaecati quibusdam excepturi ipsum, inventore sed
                    quasi eaque enim, ducimus cumque!</p>
            </div>
            <div class="col50">
                <div class="imgBx">
                    <img src="./assets/img-1.webp" alt="img">
                </div>
            </div>
        </div>
    </section>

    <section class="menu" id="menu">
        <div class="title">
            <h2 class="titleText">Наше <span>M</span>еню</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        <div class="content">
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/menu-1.jpg" alt="">
                </div>
                <div class="text">
                    <h3>Шашлык из свиной шейки</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/menu-2.jpg" alt="">
                </div>
                <div class="text">
                    <h3>Шашлык из свиной мякоти</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/menu-3.jpg" alt="">
                </div>
                <div class="text">
                    <h3>Шашлык из свиной корейки</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/menu-4.jpg" alt="">
                </div>
                <div class="text">
                    <h3>Люля-кебаб из баранины</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/menu-5.jpg" alt="">
                </div>
                <div class="text">
                    <h3>Шашлык из бараньей мякоти</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/menu-6.jpg" alt="">
                </div>
                <div class="text">
                    <h3>Шашлык из бараньей мякоти</h3>
                </div>
            </div>
        </div>
        <div class="title">
            <a href="./Shop/shop.html" class="btn"> Посмотреть все </a>
        </div>
    </section>

    <section class="expert" id="expert">
        <div class="title">
            <h2 class="titleText">Наш <span>Е</span>ксперт по кухне</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        <div class="content">
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/1.png" alt="">
                </div>
                <div class="text">
                    <h3>Игор</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/2.png" alt="">
                </div>
                <div class="text">
                    <h3>Игор</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/3.png" alt="">
                </div>
                <div class="text">
                    <h3>Игор</h3>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="./assets/4.png" alt="">
                </div>
                <div class="text">
                    <h3>Игор</h3>
                </div>
            </div>
        </div>
    </section>

    

    
  <footer>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href="./Email/Email.html"><i class="fa-solid fa-at"></i></a>
        </div>
        <div class="footerNav">
            <ul><li><a href="#banner">Домой</a></li>
                <li><a href="#menu">Меню</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="./Email/Email.html">Контакт</a></li>
                <li><a href="#expert">Твой команда</a></li>
            </ul>
        </div>
        
    </div>
    <div class="footerBottom">
        <p>Copyright &copy;2025 Designed by <span class="designer">Grish Egyan</span></p>
    </div>
</footer>



</body>

</html>
