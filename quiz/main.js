
document.addEventListener('alpine:init', () => {
    Alpine.store('aStep', {
        value: 5,
        score: 0,
        response: null,
        verbiageArray: [
            'NONE',
            'Are you comfortable using Excel\'s SUM function and use it regularly? If you aren\'t certain what SUM is and does, click No.',
            'Can you use Excel\'s SUMIF (or SUMIFS) function and use it regularly? If you aren\'t certain what SUMIF (or SUMIFS) is and does, click No.',
            'OK. So are you comfortable using Excel\'s IF function and use it regularly? If you aren\'t certain what IF is and does, click No.',
            'What about XLOOKUP? Are you comfortable using Excel\'s XLOOKUP function and use it regularly? If you aren\'t certain what XLOOKUP is and does, click No.',
            'Are you comfortable using Excel\'s VLOOKUP function and use it regularly? If you aren\'t certain what VLOOKUP is and does, click No.',
            'With VLOOKUP, do you know what the fourth parameter does? You know ... the one you normally set to "0" or "FALSE"',
            'OK. So are you comfortable using Excel\'s INDEX function and use it regularly? If you aren\'t certain what INDEX is and does, click No.',
            'Do you know the context in which Excel uses "UBound"? If you aren\'t certain click No.',
            'test09',
        ],
        /*
        scoreHeaderArray: [
            'NONE',
            'Beginner',
            'Basic',
            'Developing',
            'OK',
            'Good',
            'Above Average',
            'Expert',
            'Expert, with VBA',
            'test09',
        ],
        */
        scoreVerbiageArray: [
            ['NONE', 'NONE'],
            ['Beginner', 'There is much for you to learn, Padawan.'],
            ['Basic', 'You can do some simple things, but there is so much more.'],
            ['Developing', 'You\'re only scratching the surface. You can do more.'],
            ['OK', 'Not knowing VLOOKUP is notable, but you know IF so you can pick things up quickly.'],
            ['Good', 'You’re good, but you need to know many other useful techniques.'],
            ['Adept', 'You have skills, but your missing out on some important knowledge.'],
            ['Expert', 'Your a star. There is nothing else for you to learn. Just kidding.'],
            ['Ace', 'The force is strong in this one. But you can still improve.'],
            ['test09', 'test09']
        ],
        yes() {
            this.response = true;
            this.path();
        },
        no() {
            this.response = false;
            this.path();
        },
        reset() {
            this.score = 0;
            this.value = 5;
        },
        verbiage() {
            return this.verbiageArray[this.value];
        },
        scoreHeader() {
            return this.scoreVerbiageArray[this.score][0];
        },
        scoreVerbiage() {
            return this.scoreVerbiageArray[this.score][1];
        },
        outcome() {

        },
        path() {
            switch (this.value) {
                case 1: // SUM
                    if (this.response === true) {
                        this.score = 2;
                        this.value = 99;
                    } else if (this.response === false) {
                        this.score = 1;
                        this.value = 99;
                    } else {

                    }

                    this.response = null;

                case 2: // SUMIF
                    if (this.response === true) {
                        this.score = 3;
                        this.value = 99;
                    } else if (this.response === false) {
                        this.value--;
                    } else {

                    }

                    this.response = null;

                case 3: // IF
                    if (this.response === true) {
                        this.score = 4;
                        this.value = 99;
                    } else if (this.response === false) {
                        this.value--;
                    } else {

                    }

                    this.response = null;

                case 4: // XLOOKUP
                    if (this.response === true) {
                        this.score = 5;
                        this.value = 99;
                    } else if (this.response === false) {
                        this.value--;
                    } else {

                    }

                    this.response = null;

                case 5: // VLOOKUP()
                    if (this.response === true) {
                        this.value++;
                    } else if (this.response === false) {
                        this.value--;
                    } else {

                    }

                    this.response = null;

                case 6: // 4th argument
                    if (this.response === true) {
                        this.value++;
                    } else if (this.response === false) {
                        this.score = 5;
                        this.value = 99;
                    } else {

                    }

                    this.response = null;

                case 7: // INDEX
                    if (this.response === true) {
                        this.value++;
                    } else if (this.response === false) {
                        this.score = 6;
                        this.value = 99;
                    } else {

                    }

                    this.response = null;

                case 8: // UBound
                    if (this.response === true) {
                        this.score = 8;
                        this.value = 99;
                    } else if (this.response === false) {
                        this.score = 7;
                        this.value = 99;
                    } else {

                    }

                    this.response = null;

                case 9:
                default:
            }
        },
        headerVisability() {
            if (this.value == 99) {
                return true;
            } else {
                return false;
            }
        },
        inverseHeaderVisability() {
            return !this.headerVisability();
        },
        startOverButtonVisability() {
            if (this.value != 99 && this.value != 5) {
                return true;
            } else {
                return false;
            }
        },

    })

    Alpine.store('aStepVerbiage', {
        value: 55,
        inc() {
            this.value++;
        },
        dec() {
            this.value--;
        },
    })
})


function outcome(input, y_outcome, n_outcome) {
    if (input = 'y') {
        currentStep++;
        return y_outcome;
    } else if (input = 'n') {
        currentStep--
        return n_outcome;
    } else {
        throw new Error("Invalid")
    }
}

function path(input) {
    switch (currentStep) {
        case 1:
            outcome(input, y_outcome, n_outcome);
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        default:
    }
}
