(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),i=n.n(l),o=(n(14),n(1)),c=n(2),s=n(4),u=n(3),d=n(5),m=(n(15),n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).checkInput=function(){document.getElementById("input-word").value===n.state.correctWord?(n.updateStatusScore(),n.updateWord()):n.showStatus(!1)},n.skipWord=function(){n.updateWord(),n.updateLife()},n.state={error:null,isLoaded:!1,words:[],correctWord:"",shuffledWord:"",index:0,score:0,life:3},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"pickRandomWord",value:function(e){var t=Math.floor(Math.random()*e.length);this.setState({index:t,correctWord:e[t]}),this.shuffleWord(e[t])}},{key:"shuffleWord",value:function(e){var t=0,n=0,a=null,r=e.split("");do{for(t=r.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=r[t],r[t]=r[n],r[n]=a}while(r.join("")===e);this.setState({shuffledWord:r.join("")})}},{key:"updateWord",value:function(){var e=this.state.words[this.state.index];this.setState({words:this.state.words.filter(function(t){return t!==e})}),this.state.words.length?this.pickRandomWord(this.state.words):this.endgame(!0,this.state.score)}},{key:"checkLife",value:function(){0===this.state.life&&this.endgame(!1,this.state.score)}},{key:"endgame",value:function(e,t){document.getElementById("main").style.display="none",document.getElementById("end-game").style.display="block",document.getElementById("final-score").innerHTML=t,document.getElementById("end-status").innerHTML=e?"YOU WIN!":"GAME OVER!"}},{key:"showStatus",value:function(e){!0===e?(document.getElementById("status").innerHTML="<h2>BENAR! Poin Anda : "+this.state.score+"<h2>",document.getElementById("input-word").value=""):document.getElementById("status").innerHTML="<h2>SALAH! Silakan coba lagi.<h2>"}},{key:"updateStatusScore",value:function(){var e=this;this.setState({score:this.state.score+1},function(){return e.showStatus(!0)})}},{key:"updateLife",value:function(){this.setState({life:this.state.life-1},this.checkLife)}},{key:"componentDidMount",value:function(){var e=this;fetch("https://prisilamichelle.github.io/kata.txt").then(function(e){return e.text()}).then(function(t){var n=t.split(",");n[n.length-1]=n[n.length-1].trim(),e.setState({isLoaded:!0,words:n}),e.pickRandomWord(n)},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state.shuffledWord,n=this.state.score,a=this.state.life;return r.a.createElement("div",null,r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"box-input",className:"center small"},r.a.createElement("h1",null,"Acak Kata"),r.a.createElement("table",{className:"number"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,"Score :"),r.a.createElement("span",{id:"score"},n)),r.a.createElement("td",null,r.a.createElement("span",null,"Life :"),r.a.createElement("span",{id:"life"},a))))),r.a.createElement("form",{id:"input-form",autoComplete:"off"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,"Tebak kata :")),r.a.createElement("td",null,r.a.createElement("span",{id:"shuffled-word"},t))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,"Jawab :")),r.a.createElement("td",null,r.a.createElement("input",{id:"input-word",type:"text",name:"input-word",placeholder:"Masukkan jawaban..."}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{id:"btn-skip",className:"btn-primary",type:"button",onClick:function(){return e.skipWord()}},"Skip")),r.a.createElement("td",null,r.a.createElement("button",{id:"btn-enter",className:"btn-primary",type:"button",onClick:function(){return e.checkInput()}},"Enter")))))),r.a.createElement("div",{id:"status"}),r.a.createElement("div",{id:"failure-notif"}))),r.a.createElement("div",{id:"end-game"},r.a.createElement("span",{id:"end-status"}),r.a.createElement("span",null,"Score :"),r.a.createElement("span",{id:"final-score"})))}}]),t}(a.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.328072e5.chunk.js.map