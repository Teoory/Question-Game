var questions = [
    {
        question: "1-) Bitkilerin sap ve dallarını öğütmek veya fındığın dış kabuğunu ayırmak için kullanılan, harman işini yapan makineye ne ad verilir?",
        options: {
            a: "Patoz",
            b: "Takoz",
            c: "Tonoz",
            d: "Moloz"
        },
        answer: "d"
    },
    {
        question: "2-) Hangisi yönetmenliği Woody Allen'ın yaptığı bir film değildir?",
        options: {
            a: "Roma'ya sevgilerle",
            b: "Paris'te Gece Yarısı",
            c: "Barselona, Barselona",
            d: "Büyük Budapeşte Oteli"
        },
        answer: "d"
    },
    {
        question: "3-) Pazen nedir?",
        options: {
            a: "Bir tarım aleti",
            b: "\"Ara sıra\" anlamında bir kelime",
            c: "Bir kumaş türü",
            d: "Bir müzik aleti"
        },
        answer: "c"
    },
    {
        question: "4-) \"Roland-Garros şampiyonu\" olan biri hangi sporu yapıyordur?",
        options: {
            a: "Tenis",
            b: "Gold",
            c: "Bilardo",
            d: "Boks"
        },
        answer: "a"
    },
    {
        question: "5-) Duru sakin havada çıkan kuru soğuk anlamına gelen ayaz kelimesinin kökeni hangisidir?",
        options: {
            a: "Aydınlık",
            b: "Keskinlik",
            c: "Karanlık",
            d: "Yalnızlık"
        },
        answer: "a"
    },
    {
        question: "6-) Hangisi Fransız heykeltıraş Rodin’in eserlerinden biri değildir?",
        options: {
            a: "Düşünen adam",
            b: "Çömelen Kadın",
            c: "Yürüyen Adam",
            d: "Uyuyan Kadın"
        },
        answer: "d"
    },
    {
        question: "7-) Günümüzde özellikle Kur’an-ı Kerim okurken kullanılan küçük masaya ne ad verilir?",
        options: {
            a: "Minber",
            b: "Rahle",
            c: "Kandil",
            d: "Mihrap"
        },
        answer: "b"
    },
    {
        question: "8-) Hangisi Oğlak Dönencesi üzerinde toprağı bulunan ülkelerden biri değildir?",
        options: {
            a: "Hindistan",
            b: "Mozambik",
            c: "Brezilya",
            d: "Avustralya"
        },
        answer: "a"
    },
    {
        question: "9-) 1'den büyük bir tam sayıyı kendisiyle çarparsanız onun nesini bulursunuz?",
        options: {
            a: "Karesini",
            b: "Küpünü",
            c: "Karekökünü",
            d: "Küpkökünü"
        },
        answer: "a"
    },
    {
        question: "10-) 10.000, 1.000, 100, 10 ve 1'in çarpımı kaç eder?",
        options: {
            a: "On milyon",
            b: "On milyar",
            c: "On trilyon",
            d: "On katrilyon"
        },
        answer: "b"
    },
    // more questions
];

var currentQuestion = 0;
var score = 0;
if(score >= 100)
{score = 100;}

function displayQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("option-a").innerHTML = question.options.a;
    document.getElementById("option-b").innerHTML = question.options.b;
    document.getElementById("option-c").innerHTML = question.options.c;
    document.getElementById("option-d").innerHTML = question.options.d;
    document.querySelector("input[name='answer']").checked = false;
    document.getElementById("result").innerHTML = "";
}

function checkAnswer() {
    var answer = document.querySelector("input[name='answer']:checked").value;
    if (answer === questions[currentQuestion].answer) {
        document.getElementById("result").innerHTML = "Tebrikler!";
        score += 10;
    } else {
        if(currentQuestion === 0){
            document.getElementById("question").innerHTML = "Game Over! <br> Yanlış cevapladınız. Doğru cevap: " + "\"" + questions[currentQuestion].options[questions[currentQuestion].answer] + "\"" + " olmalıydı!";
            document.getElementById("try-again").style.display = "block";
            document.getElementById("try-again").addEventListener("click", function(){
                location.reload();
            })
            document.querySelector("form").style.display = "none";
            document.querySelector("button").style.display = "none";
        document.getElementById("score").innerHTML = "Toplam skor: " + score + " / 100";
            return;
        }else{
            document.getElementById("result").innerHTML = "Game Over! <br> Yanlış cevapladınız. Doğru cevap: " + "\"" + questions[currentQuestion].options[questions[currentQuestion].answer] + "\"" + " olmalıydı!";
            document.getElementById("try-again").style.display = "block";
            document.getElementById("try-again").addEventListener("click", function(){
                location.reload();
            })
            document.querySelector("form").style.display = "none";
            document.querySelector("button").style.display = "none";
        document.getElementById("score").innerHTML = "Toplam skor: " + score + " / 100";
            return;
        }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("question").innerHTML = "Game Over!";
        document.getElementById("score").innerHTML = "Toplam skor: " + score + " / 100";
        if (score >= 100) {
            var text = document.getElementById("congrats-text");
            text.innerHTML = "Tebrikler!";
            text.style.color = "#DA0463";
            text.style.fontSize = "50px";
            text.style.textAlign = "center";
            text.style.position = "absolute";
            text.style.top = "50%";
            text.style.left = "50%";
            text.style.transform = "translate(-50%, -50%)";
                
            var colorIndex = 0;
            var colors = ["#DA0463", "#F5A623", "#4CAF50", "#03A9F4"];
            setInterval(changeColor, 500);
                
            function changeColor() {
                text.style.color = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }

            var canvas = document.getElementById("congrats");
            var ctx = canvas.getContext("2d");
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            // draw fireworks on canvas
            // document.getElementById("question").innerHTML = "Tebrikler!";
            // document.getElementById("question").style.color = "#DA0463";
            // document.getElementById("question").style.fontWeight = "900";
            // document.getElementById("question").style.fontSize = "50px";
            // document.getElementById("question").style.display = "block";
            // document.getElementById("question").style.textAlign = "center";
            

            
            setupFireworks()

            function random(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function setupFireworks() {
              let particles = [];
              const startTime = new Date().getTime();
              const startX = random(5, canvas.width);
              const startY = random(5, canvas.height);
              const colour = '#'+Math.random().toString(16).substr(2,6);
              const time = random(500,2000);
              let alpha = 1;
              drawFireworks();
            
              function drawFireworks() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let particle = {x: startX, y: startY, xVel: random(-5,5), yVel: random(-5,5)}
                particles.push(particle);

                for(let p = 0; p < particles.length; p++){
                  particle = particles[p];
                  ctx.fillStyle = colour;
                  ctx.globalAlpha = alpha;
                  ctx.fillRect(particle.x, particle.y, 10, 10);
                  particle.x += particle.xVel;
                  particle.y += particle.yVel;
                }

                if(new Date().getTime() - startTime < time){
                  if(new Date().getTime() - startTime < time + 100){
                    alpha = 1.0;
                  }
                  window.requestAnimationFrame(drawFireworks);  
                } else{
                  setupFireworks();
                }
              }
            }

        }
        
        
        document.querySelector("form").style.display = "none";
        document.querySelector("button").style.display = "none";
    }
}



displayQuestion();
