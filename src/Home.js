import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div id="main">
                    <div id="box-input" class="center small">
                        <h1>Acak Kata</h1>
                        <table class="number">
                            <tr>
                                <td><span>Score :</span><span id="score"></span></td>
                                <td><span>Life :</span><span id="life"></span></td>
                            </tr>
                        </table>

                        <form id="input-form" autocomplete="off">
                            <table>
                                <tr>
                                    <td><span>Tebak kata :</span></td>
                                    <td><span id="shuffled-word"></span></td>
                                </tr>
                                <tr>
                                    <td><span>Jawab :</span></td>
                                    <td><input id="input-word" type="text" name="input-word" placeholder="Masukkan jawaban..."/></td>
                                </tr>
                                <tr>
                                    <td><button id="btn-skip" class="btn-primary" type="button" onclick="skipWord()" >Skip</button></td>
                                    <td><button id="btn-enter" class="btn-primary" type="button" onclick="checkInput()" >Enter</button></td>
                                </tr>
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