let noCount = 0;

function showValentineQuestion() {
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
}

function chooseYes() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen5').classList.remove('hidden');
}

function chooseNo() {
    noCount++;
    if (noCount === 2) {
        document.getElementById('screen2').classList.add('hidden');
        document.getElementById('screen8').classList.remove('hidden');
    } else {
        document.getElementById('screen2').classList.add('hidden');
        document.getElementById('screen3').classList.remove('hidden');
    }
}

function tryAgain() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
}

function showDatePlan() {
    document.getElementById('screen5').classList.add('hidden');
    document.getElementById('screen6').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('screen6').classList.add('hidden');
        document.getElementById('screen7').classList.remove('hidden');
    }, 5000);
}
