let mPoints = 0;
let currentCard = {};
let currentOrientation = "upright"; // "upright" | "reversed"
let quizOrientationMode = "all";    // "all" | "upright" | "reversed"
let isGaming = true;
let isInfoVisible = false;

// Sounds
let ClickSound;
let GoodSound;
let WrongSound;
let Deselect;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSounds() {
    try {
        ClickSound = new Audio('./Sounds/click.mp3');
        GoodSound = new Audio('./Sounds/Good.mp3');
        WrongSound = new Audio('./Sounds/Wrong.mp3');
        Deselect = new Audio('./Sounds/deselect.mp3');
    } catch (e) {
        console.warn("Sound init error", e);
    }
}

function playSound(audio) {
    if (!audio) return;
    try {
        audio.currentTime = 0;
        let p = audio.play();
        if (p && p.catch) p.catch(() => {});
    } catch (e) {}
}

function romanize(num) {
    if (isNaN(num)) return "";
    if (num === 0) return "0";
    let digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--) roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function preparePage() {
    $('#headerContainerTitle').text(CONFIG.APP_NAME || "Tarot Guessr");
    document.title = (CONFIG.APP_NAME || "Tarot Guessr") + " - Arcanos Mayores";
}

// ----------------------------------------------------
// QUIZ MODE LOGIC
// ----------------------------------------------------

function getCurrentMeaning(card, orientation) {
    if (!card) return null;
    let ori = orientation || currentOrientation;
    if (card[ori === "reversed" ? "Reversed" : "Upright"]) {
        return card[ori === "reversed" ? "Reversed" : "Upright"];
    }
    // Fallback retrocompatible
    return {
        Response: card.Response || "",
        Keywords: [],
        Description: card.Description || ""
    };
}

function getCorrectResponse() {
    let meaning = getCurrentMeaning(currentCard, currentOrientation);
    return meaning ? meaning.Response : "";
}

function updateCardVisuals() {
    let roman = romanize(currentCard.Value);
    let cardTitle = (roman ? roman + ". " : "") + currentCard.Name;
    $('#initialContainerNameTitle').text(cardTitle);

    let $wrapper = $('#cardImageWrapper');
    let $badge = $('#currentOrientationBadge');
    let $icon = $('#orientationIcon');
    let $text = $('#orientationText');

    $('#initialContainerCardImage').attr('src', IMAGE_PATH + currentCard.Image);

    if (currentOrientation === "reversed") {
        $wrapper.addClass('is-reversed');
        $badge.removeClass('upright').addClass('reversed');
        $icon.text('⬇');
        $text.text('Invertido');
        $('#initialContainerQuestionTitle').text('¿QUÉ SIGNIFICA CUANDO ESTÁ INVERTIDA?');
    } else {
        $wrapper.removeClass('is-reversed');
        $badge.removeClass('reversed').addClass('upright');
        $icon.text('⬆');
        $text.text('Normal');
        $('#initialContainerQuestionTitle').text('¿QUÉ SIGNIFICA EN POSICIÓN NORMAL?');
    }

    // Actualizar chuleta overlay
    let meaning = getCurrentMeaning(currentCard, currentOrientation);
    if (meaning) {
        $('#overlayCardDescription').text(meaning.Description);
        let $kw = $('#overlayCardKeywords').empty();
        if (meaning.Keywords && meaning.Keywords.length) {
            meaning.Keywords.forEach(k => {
                $('<span>').addClass('keywordTag').text(k).appendTo($kw);
            });
        }
    }
}

function generateResponse(cardIndex) {
    let correctMeaning = getCurrentMeaning(CONFIG[cardIndex], currentOrientation);
    let correctResponse = correctMeaning.Response;

    let pool = [];
    CONFIG.forEach((c, idx) => {
        if (idx !== cardIndex) {
            let m = getCurrentMeaning(c, currentOrientation);
            if (m && m.Response) {
                pool.push(m.Response);
            }
        }
    });

    // Barajar opciones distractores
    pool.sort(() => Math.random() - 0.5);

    let answers = [correctResponse];
    for (let i = 0; i < (MAX_ANSWERS - 1) && i < pool.length; i++) {
        answers.push(pool[i]);
    }

    // Barajar respuestas finales
    answers.sort(() => Math.random() - 0.5);

    $('.answerBtn').each(function (idx) {
        if (idx < answers.length) {
            $(this).show()
                .text(answers[idx])
                .removeClass('selected correct incorrect')
                .css('background', '')
                .prop('disabled', false);
        } else {
            $(this).hide();
        }
    });

    $('#nextCardButton').hide();
    isGaming = true;
    hideInfo();
}

function changeCard(inCardIndex, inOrientation) {
    let cardIdx = 0;
    if (inCardIndex !== undefined && inCardIndex !== null) {
        cardIdx = inCardIndex;
    } else {
        do {
            cardIdx = getRandomNumber(0, CONFIG.length - 1);
        } while (CONFIG.length > 1 && currentCard && currentCard.Name === CONFIG[cardIdx].Name);
    }

    if (inOrientation) {
        currentOrientation = inOrientation;
    } else {
        if (quizOrientationMode === "upright") {
            currentOrientation = "upright";
        } else if (quizOrientationMode === "reversed") {
            currentOrientation = "reversed";
        } else {
            currentOrientation = Math.random() < 0.5 ? "upright" : "reversed";
        }
    }

    currentCard = CONFIG[cardIdx];
    updateCardVisuals();
    generateResponse(cardIdx);
}

function showInfo() {
    playSound(ClickSound);
    $('#initialContainerCardInfo').addClass('visible');
    isInfoVisible = true;
}

function hideInfo() {
    $('#initialContainerCardInfo').removeClass('visible');
    isInfoVisible = false;
}

function toggleInfo() {
    if (isInfoVisible) {
        hideInfo();
    } else {
        showInfo();
    }
}

function revealCorrectAnswer() {
    let correctText = getCorrectResponse();
    $('.answerBtn').each(function () {
        if ($(this).text() === correctText) {
            $(this).addClass('correct');
        }
    });
}

function checkAnswer(chosenText, $btn) {
    let correctText = getCorrectResponse();
    let isCorrect = (chosenText === correctText);

    if (isCorrect) {
        mPoints++;
        $btn.addClass('correct');
        playSound(GoodSound);
    } else {
        mPoints = Math.max(0, mPoints - 1);
        $btn.addClass('incorrect');
        playSound(WrongSound);
        revealCorrectAnswer();
    }

    $('#points').text(mPoints);
    isGaming = false;
    $('.answerBtn').prop('disabled', true);
    $('#nextCardButton').show();
}

// Mobile select modal
let arcanosSelect;
function createSlider() {
    let data = CONFIG.map(({ Name, Value }) => {
        let rom = romanize(Value);
        return (rom ? rom + ". " : "") + Name;
    });

    if (typeof MobileSelect !== 'undefined') {
        arcanosSelect = new MobileSelect({
            trigger: '#initialContainerNameTitle',
            title: 'ARCANOS MAYORES',
            cascade: true,
            ensureBtnText: "Elegir",
            ensureBtnColor: "#ffd700",
            cancelBtnText: "Cancelar",
            cancelBtnColor: "#999999",
            bgColor: "#00081d",
            textColor: "#ffffff",
            wheels: [{ data: data }],
            onChange: function (data, indexArr) {
                playSound(ClickSound);
                let cardIndex = indexArr[0];
                changeCard(cardIndex);
            }
        });
    }
}

// ----------------------------------------------------
// LEARNING MODE LOGIC
// ----------------------------------------------------

let learnSearchTerm = "";
let learnOrientationFilter = "all"; // "all" | "upright" | "reversed"
let cardStateMap = {}; // index -> "upright" | "reversed"

function renderLearnCards() {
    let $grid = $('#learnCardGrid').empty();
    let term = learnSearchTerm.trim().toLowerCase();

    CONFIG.forEach((card, index) => {
        let upright = card.Upright || {};
        let reversed = card.Reversed || {};

        // Filtrado por búsqueda
        let matchText = (card.Name + " " + card.Value + " " +
            (upright.Response || "") + " " + (upright.Description || "") + " " +
            (upright.Keywords ? upright.Keywords.join(" ") : "") + " " +
            (reversed.Response || "") + " " + (reversed.Description || "") + " " +
            (reversed.Keywords ? reversed.Keywords.join(" ") : "")
        ).toLowerCase();

        if (term && !matchText.includes(term)) {
            return;
        }

        let selectedOri = cardStateMap[index] || "upright";
        if (learnOrientationFilter !== "all" && learnOrientationFilter !== selectedOri) {
            selectedOri = learnOrientationFilter;
            cardStateMap[index] = selectedOri;
        }

        let activeMeaning = (selectedOri === "reversed") ? reversed : upright;
        let roman = romanize(card.Value);
        let title = (roman ? roman + ". " : "") + card.Name;

        let $card = $('<div>').addClass('learnCard').attr('data-index', index);

        // TOP SECTION
        let $top = $('<div>').addClass('learnCardTop');
        let $thumb = $('<div>')
            .addClass('learnThumbnail ' + (selectedOri === "reversed" ? 'reversed' : ''))
            .attr('title', 'Toca para voltear normal / invertida')
            .append($('<img>').attr('src', IMAGE_PATH + card.Image).attr('alt', card.Name));

        // Click en la imagen para togglear orientación individual
        $thumb.on('click', function () {
            playSound(ClickSound);
            let nextOri = (cardStateMap[index] === "reversed") ? "upright" : "reversed";
            cardStateMap[index] = nextOri;
            renderLearnCards();
        });

        let $meta = $('<div>').addClass('learnHeaderMeta');
        $meta.append($('<div>').addClass('learnCardNumber').text('Arcano ' + (card.Value !== undefined ? '#' + card.Value : '')));
        $meta.append($('<h4>').addClass('learnCardName').text(title));

        let $toggleOri = $('<div>').addClass('learnOrientationToggle');
        let $btnUpright = $('<button>')
            .addClass('learnOrientationBtn upright ' + (selectedOri === "upright" ? 'active' : ''))
            .text('⬆ Normal')
            .on('click', function () {
                playSound(ClickSound);
                cardStateMap[index] = "upright";
                renderLearnCards();
            });

        let $btnReversed = $('<button>')
            .addClass('learnOrientationBtn reversed ' + (selectedOri === "reversed" ? 'active' : ''))
            .text('⬇ Invertida')
            .on('click', function () {
                playSound(ClickSound);
                cardStateMap[index] = "reversed";
                renderLearnCards();
            });

        $toggleOri.append($btnUpright, $btnReversed);
        $meta.append($toggleOri);
        $top.append($thumb, $meta);
        $card.append($top);

        // MEANING & KEYWORDS
        let $body = $('<div>')
            .addClass('learnBody ' + (selectedOri === "reversed" ? 'reversed' : ''))
            .html('<strong>Esencia:</strong> ' + (activeMeaning.Response || '') + '<br><br>' + (activeMeaning.Description || ''));

        let $keywords = $('<div>').addClass('learnKeywords');
        if (activeMeaning.Keywords && activeMeaning.Keywords.length) {
            activeMeaning.Keywords.forEach(k => {
                $('<span>').addClass('keywordTag').text(k).appendTo($keywords);
            });
        }

        $card.append($body, $keywords);
        $grid.append($card);
    });

    if ($grid.children().length === 0) {
        $grid.append($('<div>').css({
            textAlign: 'center',
            gridColumn: '1 / -1',
            padding: '30px',
            color: '#8fa0c0'
        }).text('No se encontraron arcanos con esa búsqueda.'));
    }
}

// ----------------------------------------------------
// EVENT HANDLERS & INIT
// ----------------------------------------------------

$(document).ready(function () {
    preparePage();
    createSounds();
    createSlider();
    changeCard();

    // Mode Switcher Tabs
    $('.modeTabBtn').on('click', function () {
        playSound(ClickSound);
        let mode = $(this).data('mode');
        $('.modeTabBtn').removeClass('active');
        $(this).addClass('active');

        if (mode === 'learn') {
            $('#quizView').hide();
            $('#learnView').fadeIn(200);
            renderLearnCards();
        } else {
            $('#learnView').hide();
            $('#quizView').fadeIn(200);
        }
    });

    // Orientation selector for Quiz
    $('#quizOrientationFilter .filterBtn').on('click', function () {
        playSound(ClickSound);
        $('#quizOrientationFilter .filterBtn').removeClass('active');
        $(this).addClass('active');
        quizOrientationMode = $(this).data('orientation');
        changeCard();
    });

    // Orientation selector for Learn mode
    $('#learnOrientationFilter .filterBtn').on('click', function () {
        playSound(ClickSound);
        $('#learnOrientationFilter .filterBtn').removeClass('active');
        $(this).addClass('active');
        learnOrientationFilter = $(this).data('learn-filter');
        renderLearnCards();
    });

    // Learn search input
    $('#learnSearchInput').on('input', function () {
        learnSearchTerm = $(this).val();
        renderLearnCards();
    });

    // Toggle overlay cheat-sheet in Quiz mode
    $('#cardInteractiveFrame').on('click', function () {
        toggleInfo();
    });

    // Reset Score
    $('#resetScoreBtn').on('click', function () {
        playSound(Deselect);
        mPoints = 0;
        $('#points').text(0);
    });

    // Next Card Button
    $('#nextCardButton').on('click', function () {
        playSound(ClickSound);
        changeCard();
    });

    // Answers selection logic: 1st click selects / previews, 2nd click confirms (or directly confirms if clicked again)
    let pendingAnswer = "";
    $('.answerBtn').on('click', function (e) {
        if (!isGaming) {
            changeCard();
            return;
        }

        let clickedText = $(this).text().trim();

        if (pendingAnswer === clickedText) {
            // Confirm answer
            checkAnswer(clickedText, $(this));
            pendingAnswer = "";
        } else if (pendingAnswer === "") {
            // Primer click: selecciona y pide confirmar con otro click
            pendingAnswer = clickedText;
            $('.answerBtn').removeClass('selected');
            $(this).addClass('selected');
            playSound(ClickSound);
        } else {
            // Cambia de opinión a otra opción
            pendingAnswer = clickedText;
            $('.answerBtn').removeClass('selected');
            $(this).addClass('selected');
            playSound(ClickSound);
        }
    });

    // Click on footer loads random card (Easter egg)
    $('#footerContainerTitle').on('click', function () {
        if ($('#quizView').is(':visible')) {
            changeCard();
        }
    });
});
