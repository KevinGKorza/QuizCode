const Questions = [{
    id: 0,
    question: "What is Homer Simpsons favorite food?",
    answer: [{ text: "Donuts", isCorrect: true },
        { text: "Pizza", isCorrect: false },
        { text: "Hamburgers", isCorrect: false },
        { text: "Beer", isCorrect: false }
    ]

},
{
    id: 1,
    question: "How many colors are in a Rainbow?",
    answer: [{ text: "Zero", isCorrect: false },
        { text: "Twenty", isCorrect: false },
        { text: "Ten", isCorrect: false },
        { text: "Seven", isCorrect: true }
    ]

},
{
    id: 2,
    question: "Who is the Disney mascot?",
    answer: [{ text: "Pluto", isCorrect: false },
        { text: "Mickey Mouse", isCorrect: true },
        { text: "Donald Duck", isCorrect: false },
        { text: "Buzz Lightyear", isCorrect: false }
    ]

},
{
    id: 3,
    question: "How many lickes does it take to get to the center of a tootsie pop?",
    answer: [{ text: "One", isCorrect: false },
        { text: "Two", isCorrect: false },
        { text: "Three", isCorrect: false },
        { text: "The World May NEVER Know", isCorrect: true}
]
}

]

var start = true;
function iterare(id) {
var result = document.getElementsByClassName("Answer");
result[0].innerText ="";
const question = document.getElementById("Question");
question.innerText = Questions[id].question;


const Opt1 = document.getElementById('Opt1');
const Opt2 = document.getElementById('Opt2');
const Opt3 = document.getElementById('Opt3');
const Opt4 = document.getElementById('Opt4');

Opt1.innerText = Questions[id].a[0].text;
Opt2.innerText = Questions[id].a[1].text;
Opt3.innerText = Questions[id].a[2].text;
Opt4.innerText = Questions[id].a[3].text;

Opt1.value = Questions[id].a[0].isCorrect;
Opt2.value = Questions[id].a[0].isCorrect;
Opt3.value = Questions[id].a[0].isCorrect;
Opt4.value = Questions[id].a[0].isCorrect;

var selected ="";

