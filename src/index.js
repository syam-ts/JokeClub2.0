var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    var jokeInterface = document.getElementById('jokeInterface');
    var loadJokeButton = document.getElementById('loadJoke');
    loadJokeButton.addEventListener('click', function () {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            jokeInterface.innerText = "".concat(data.setup, " - ").concat(data.punchline);
            document.addEventListener('DOMContentLoaded', function () {
                var jokeInterface = document.getElementById('jokeInterface');
                var loadJokeButton = document.getElementById('loadJoke');
                if (!jokeInterface || !loadJokeButton) {
                    console.error('Failed to find elements');
                    return;
                }
                loadJokeButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                    var response, data_1, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, fetch('https://official-joke-api.appspot.com/random_joke')];
                            case 1:
                                response = _a.sent();
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                return [4 /*yield*/, response.json()];
                            case 2:
                                data_1 = _a.sent();
                                jokeInterface.innerText = "".concat(data_1.setup, " - ").concat(data_1.punchline);
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _a.sent();
                                jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
                                console.error('Fetch error:', error_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
            });
        })
            .catch(function (error) {
            jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
            console.error('Fetch error:', error);
        });
    });
    /**
     * !Dark Mode Configs
     */
    var darkMode = document.getElementById('darkMode');
    var paragraphs = document.getElementsByTagName('p');
    var spans = document.getElementsByTagName('span');
    var articles = document.getElementsByTagName('a');
    var body = document.getElementsByTagName('body')[0];
    var nav = document.getElementsByTagName('header')[0];
    var main = document.getElementsByClassName('main');
    var about = document.getElementsByClassName('about');
    var contact = document.getElementsByClassName('contact');
    var dark = document.getElementsByClassName('dark');
    var jokes = document.getElementsByClassName('jokes');
    var jo = document.getElementsByClassName('jo');
    var isDarkMode = false;
    if (darkMode) {
        darkMode.addEventListener('click', function () {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                for (var i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.color = 'white';
                    spans[i].style.color = 'white';
                    articles[i].style.color = 'white';
                }
                body.style.backgroundColor = 'black';
                nav.style.backgroundColor = 'black';
                for (var j = 0; j < main.length; j++) {
                    main[j].style.backgroundColor = 'black';
                }
                for (var k = 0; k < about.length; k++) {
                    about[k].style.color = 'white';
                }
                for (var l = 0; l < contact.length; l++) {
                    contact[l].style.color = 'white';
                }
                for (var m = 0; m < dark.length; m++) {
                    dark[m].style.color = 'white';
                }
                for (var n = 0; n < jokes.length; n++) {
                    jokes[n].style.color = 'white';
                }
                for (var o = 0; o < jo.length; o++) {
                    jo[o].style.color = 'white';
                }
            }
            else {
                for (var i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.color = '';
                    spans[i].style.color = '';
                    articles[i].style.color = '';
                }
                body.style.backgroundColor = '';
                nav.style.backgroundColor = '';
                for (var j = 0; j < main.length; j++) {
                    main[j].style.backgroundColor = '';
                }
                for (var k = 0; k < about.length; k++) {
                    about[k].style.color = '';
                }
                for (var l = 0; l < contact.length; l++) {
                    contact[l].style.color = '';
                }
                for (var m = 0; m < dark.length; m++) {
                    dark[m].style.color = '';
                }
                for (var n = 0; n < jokes.length; n++) {
                    jokes[n].style.color = '';
                }
                for (var o = 0; o < jo.length; o++) {
                    jo[o].style.color = '';
                }
            }
        });
    }
});
