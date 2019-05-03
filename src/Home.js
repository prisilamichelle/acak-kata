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
        console.log(array[index]);
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
        console.log(wordarray.join(""));
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