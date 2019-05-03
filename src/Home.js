import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            words: [],
            correctWord: "",
            shuffledWord: "",
            index: 0,
            score: 0,
            life: 3
        };
    }

    pickRandomWord(array) {
        let index = Math.floor(Math.random() * array.length);
        this.setState({
            index: index,
            correctWord: array[index]
        });
        this.shuffleWord(array[index]);
    }
    
    /* Fisher-Yates shuffle */
    shuffleWord(word) {
        let i = 0, j = 0, temp = null;
        let wordarray = word.split("");
        do {
            for(i = wordarray.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = wordarray[i];
                wordarray[i] = wordarray[j];
                wordarray[j] = temp;
            }
        } while (wordarray.join("") === word);
        this.setState({
            shuffledWord: wordarray.join("")
        });
    }

    updateWord() {
        let deletedWord = this.state.words[this.state.index];
        this.setState({
            words: this.state.words.filter(function(word) { 
            return word !== deletedWord
        })})
        if (this.state.words.length) {
            this.pickRandomWord(this.state.words);
        } else {
            this.endgame(true,this.state.score);
        }
    }

    checkLife() {
        if (this.state.life === 0) {
            this.endgame(false,this.state.score);
        }
    }

    endgame(win,finalscore) {
        document.getElementById('main').style.display = "none";
        document.getElementById('end-game').style.display = "block";
        document.getElementById('final-score').innerHTML = finalscore;
        if (win) {
            document.getElementById('end-status').innerHTML = "YOU WIN!";
        } else {
            document.getElementById('end-status').innerHTML = "GAME OVER!";
        }
    }

    showStatus(status){
        if (status === true) {
            document.getElementById('status').innerHTML = "<h2>BENAR! Poin Anda : " + this.state.score + "<h2>";
            document.getElementById('input-word').value = "";
        } else {
            document.getElementById('status').innerHTML = "<h2>SALAH! Silakan coba lagi.<h2>";
        }
    }

    updateStatusScore() {
        this.setState({
            score: this.state.score + 1
        }, () => this.showStatus(true));
    }

    updateLife() {
        this.setState({
            life: this.state.life - 1
        }, this.checkLife);
    }

    checkInput = () => {
        let input = document.getElementById('input-word').value;
        if (input === this.state.correctWord) {
            this.updateStatusScore();
            this.updateWord();
        } else {
            this.showStatus(false);
        }
    }

    skipWord = () => {
        this.updateWord();
        this.updateLife();
    }

    componentDidMount() {
        fetch("https://prisilamichelle.github.io/kata.txt")
            .then(res => res.text())
            .then(
                (result) => {
                    let responsearray = result.split(",");
                    responsearray[responsearray.length-1] = responsearray[responsearray.length-1].trim();
                    this.setState({
                        isLoaded: true,
                        words: responsearray
                    });
                    this.pickRandomWord(responsearray);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        let shuffledWord = this.state.shuffledWord;
        let score = this.state.score;
        let life = this.state.life;
        return (
            <div>
                <div id="main">
                    <div id="box-input" className="center small">
                        <h1>Acak Kata</h1>
                        <table className="number">
                            <tbody>
                                <tr>
                                    <td><span>Score :</span><span id="score">{score}</span></td>
                                    <td><span>Life :</span><span id="life">{life}</span></td>
                                </tr>
                            </tbody>            
                        </table>

                        <form id="input-form" autoComplete="off">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><span>Tebak kata :</span></td>
                                        <td><span id="shuffled-word">{shuffledWord}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Jawab :</span></td>
                                        <td><input id="input-word" type="text" name="input-word" placeholder="Masukkan jawaban..."/></td>
                                    </tr>
                                    <tr>
                                        <td><button id="btn-skip" className="btn-primary" type="button" onClick={() => this.skipWord()} >Skip</button></td>
                                        <td><button id="btn-enter" className="btn-primary" type="button" onClick={() => this.checkInput()} >Enter</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>

                        <div id="status"></div>
                        <div id="failure-notif"></div>
                    </div>
                </div>
                <div id="end-game">
                    <span id="end-status"></span>
                    <span>Score :</span><span id="final-score"></span>
                </div>
            </div>
        );
    }
}

export default Home;