
let mPoints = 0;
let currentCard = {};
let isGaming = true;

// MAX y MIN INCLUSSIVE
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ClickSound;
let GoodSound;
let WrongSound;
let Deselect;

function createSounds() {

    ClickSound = document.createElement('audio');
    ClickSound.setAttribute('src', './Sounds/click.mp3');

    GoodSound = document.createElement('audio');
    GoodSound.setAttribute('src', './Sounds/Good.mp3');

    WrongSound = document.createElement('audio');
    WrongSound.setAttribute('src', './Sounds/Wrong.mp3');

    Deselect = document.createElement('audio');
    Deselect.setAttribute('src', './Sounds/deselect.mp3');

}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function revelateResponse(response) {
    $(".initialContainerAnwser").each(function () {
        let optionResponse = $(this)[0].innerText;

        if (optionResponse == currentCard.Description) {
            $(this).css("background", "green");
        }

    });
}

function checkResponse(response) {
    if (response == currentCard.Description) {
        mPoints++;
    }
    else {
        mPoints--;
    };

    $('#points').text(mPoints);

    return response == currentCard.Description;
}

function generateResponse(cardIndex) {
    let responses = [];
    responses.push(CONFIG[cardIndex].Description);

    let CardsResponse = [...CONFIG];
    CardsResponse.splice(cardIndex, 1);

    for (let index = 0; index < MAX_ANSWERS - 1; index++) {
        let randomIndex = 0;

        do {
            randomIndex = getRandomNumber(0, CardsResponse.length - 1);
        } while (randomIndex == cardIndex);

        responses.push(CardsResponse[randomIndex].Description);
        CardsResponse.splice(randomIndex, 1);
    }

    let responsesLabel = ["1", "2", "3", "4"];
    for (let index = 0; index < MAX_ANSWERS + 1; index++) {
        let randomIndex = getRandomNumber(0, responses.length - 1);
        let randomLabel = getRandomNumber(0, responsesLabel.length - 1);
        $('#initialContainerAnwser' + responsesLabel[randomLabel]).text(responses[randomIndex]);

        responsesLabel.splice(randomLabel, 1);
        responses.splice(randomIndex, 1);

    }
    $(".initialContainerAnwser").css("background", "#042d47");
    isGaming = true;

    console.log(responses);

}

function changeCard() {
    let randomValue = 0;
    do {
        randomValue = getRandomNumber(0, CONFIG.length - 1);
    } while (currentCard.Name == CONFIG[randomValue].Name);
    currentCard = CONFIG[randomValue];
    $('#initialContainerCardImage').attr('src', IMAGE_PATH + currentCard.Image);
    $('#initialContainerNameTitle').text(romanize(currentCard.Value) + ". " + currentCard.Name);
    generateResponse(randomValue);

    console.log("Random Value: " + randomValue);
    console.log("Card: " + JSON.stringify(currentCard));
}

$(document).ready(function () {

    changeCard();
    createSounds();

    $("#initialContainerNamePoints").on("click", function () {
        $('#points').text(0);
        mPoints = 0;
    });

    $("#initialContainerCardImage").on("click", function () {
        changeCard();
        oldResponse = "";
    });

    let oldResponse = "";
    $(".initialContainerAnwser").on("click", function (e) {

        if (!isGaming) {
            changeCard();
            oldResponse = "";
            return;
        }

        let newResponse = $(this)[0].innerText;
        if (newResponse == oldResponse) // Two clicks
        {
            if (checkResponse(e.target.innerText)) {
                $(this).css("background", "green");
                GoodSound.play();
            }
            else {
                $(this).css("background", "red");
                WrongSound.play();
            };

            revelateResponse(newResponse);
            isGaming = false;
            oldResponse = "";

        }
        else if (oldResponse == "") // First click
        {
            $(this).css("background", "rgb(18 91 137)");
            oldResponse = newResponse;
            ClickSound.play();

        }
        else {
            $(".initialContainerAnwser").css("background", "#042d47");
            oldResponse = "";
            Deselect.play();
        }

    });

});