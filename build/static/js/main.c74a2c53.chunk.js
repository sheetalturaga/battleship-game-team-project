(this.webpackJsonphunter_fall2021_cs5610=this.webpackJsonphunter_fall2021_cs5610||[]).push([[0],{13:function(e,r,t){},14:function(e,r,t){},16:function(e,r,t){},17:function(e,r,t){},31:function(e,r,t){},32:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(10),c=t.n(o),i=(t(13),t(11)),s=t(3);var u={scout:2,submarine:3,destroyer:4,aircraft:5},l={scout:[],submarine:[],destroyer:[],aircraft:[]},d={scout:"sc",submarine:"sb",destroyer:"de",aircraft:"ac"},b={scout:0,submarine:0,destroyer:0,aircraft:0},h=["horizontal","vertical"],j=[];function f(){for(var e={count:0,gameBoard:[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]],isPlayerTurn:!0},r=e.gameBoard,t=0;t<r.length;t++)for(var n=0;n<r.length;n++)j.push([t,n]);for(var a in u){for(var o=h[Math.floor(Math.random()*h.length)],c=v(r,u[a],o),i=c[0],s=c[1];!p(i,s,u[a],o);){i=(c=v(r,u[a],o))[0],s=c[1];break}if("horizontal"===o)for(var b=i;b<i+u[a];b++){l[a].push([b,s]);var f=O(b,s);j.splice(f,1),e.gameBoard[b][s]=d[a],l[a].length===3*u[a]&&y(a,u[a],l[a].length)}else for(var m=s;m<s+u[a];m++){l[a].push([i,m]);var x=O(i,m);j.splice(x,1),e.gameBoard[i][m]=d[a],l[a].length===3*u[a]&&y(a,u[a],l[a].length)}}return e}function O(e,r){for(var t=0;t<100;t++)if(j[t]===[e,r])return t}function m(e,r){for(var t=0;t<100;t++)if(j[t]===[e,r])return!0;return!1}function p(e,r,t,n){if("horizontal"===n){for(var a=0;a<t;a++)if(!m(e,r+a))return!1;return!0}for(var o=0;o<t;o++)if(!m(e+o,r))return!1;return!0}function y(e,r,t){l[e].splice(0,t-r),console.log(l)}function v(e,r,t){var n=0,a=0;return"horizontal"===t?(n=x(0,e.length-r-1),a=x(0,e.length-2)):(n=x(0,e.length-2),a=x(0,e.length-r-1)),[n,a]}var x=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)},g=function(e){b[e]+=1},B=function(e){if(b[e]===u[e])return!0},E=function(e,r){for(var t=0;t<u[r];t++){var n=l[r][t][0],a=l[r][t][1];e.gameBoard[n][a]="S"}};var k=t(19),C={scout:2,submarine:3,destroyer:4,aircraft:5},T={scout:[],submarine:[],destroyer:[],aircraft:[]},M={scout:"sct",submarine:"sbe",destroyer:"der",aircraft:"act"},R={scout:0,submarine:0,destroyer:0,aircraft:0},S=["horizontal","vertical"],A=[],G=[];function P(){for(var e={count:0,gameBoard:[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]},r=e.gameBoard,t=0;t<r.length;t++)for(var n=0;n<r.length;n++)A.push([t,n]);for(var a in C){for(var o=S[Math.floor(Math.random()*S.length)],c=w(r,C[a],o),i=c[0],s=c[1];!z(i,s,C[a],o);){i=(c=w(r,C[a],o))[0],s=c[1];break}if("horizontal"===o)for(var u=i;u<i+C[a];u++){T[a].push([u,s]);var l=_(u,s);A.splice(l,1),e.gameBoard[u][s]=M[a],T[a].length===3*C[a]&&W(a,C[a],T[a].length)}else for(var d=s;d<s+C[a];d++){T[a].push([i,d]);var b=_(i,d);A.splice(b,1),e.gameBoard[i][d]=M[a],T[a].length===3*C[a]&&W(a,C[a],T[a].length)}}return e.gameBoard}function _(e,r){for(var t=0;t<100;t++)if(A[t]===[e,r])return t}function N(e,r){for(var t=0;t<100;t++)if(A[t]===[e,r])return!0;return!1}var z=function(e,r,t,n){if("horizontal"===n){for(var a=0;a<t;a++)if(!N(e,r+a))return!1;return!0}for(var o=0;o<t;o++)if(!N(e+o,r))return!1;return!0};function W(e,r,t){T[e].splice(0,t-r)}function w(e,r,t){var n=0,a=0;return"horizontal"===t?(n=D(0,e.length-r),a=D(0,e.length-1)):(n=D(0,e.length-1),a=D(0,e.length-r)),[n,a]}var D=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)},F=function(e){R[e]+=1},L=function(e){if(R[e]===C[e])return!0},I=function(e,r){for(var t=0;t<C[r];t++){var n=T[r][t][0],a=T[r][t][1];e[n][a]="S"}},X=function(e,r){G.push([e,r])},Y=function(e,r,t){for(var n=0;n<G.length;n++)if(G[n][0]===r&&G[n][1]===t)return!1;return!0};var H=Object(i.a)({playerBoard:function(e,r){if(void 0===e)return P();if("CREATE_GAME_BOARD"===r.type&&alert("created a game board!"),"onClick"===r.type){e[r.x][r.y];if("computer"===r.boardType){for(var t=D(0,e.length-1),n=D(0,e.length-1);!Y(0,t,n);)t=D(0,e.length-1),n=D(0,e.length-1);"sct"===e[t][n]?(F("scout"),L("scout")?I(e,"scout"):e[t][n]="O",(e[t][n]="O")&&X(t,n)):"sbe"===e[t][n]?(F("submarine"),L("submarine")?I(e,"submarine"):e[t][n]="O",(e[t][n]="O")&&X(t,n)):"der"===e[t][n]?(F("destroyer"),L("destroyer")?I(e,"destroyer"):e[t][n]="O",(e[t][n]="O")&&X(t,n)):"act"===e[t][n]?(F("aircraft"),L("aircraft")?I(e,"aircraft"):e[t][n]="O",(e[t][n]="O")&&X(t,n)):(e[t][n]="X",X(t,n))}return Object(k.a)(e)}return"RESET"===r.type||"RESET_GAMEBOARD_ONLY"===r.type?e=P():e},clickCount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;return"boardClick"===r.type?e+1:"RESET"===r.type?0:e},computerBoard:function(e,r){if(void 0===e)return f();if("onClick"===r.type){var t=e.gameBoard[r.x][r.y];return"player"===r.boardType||("sc"===t?(g("scout"),B("scout")?E(e,"scout"):e.gameBoard[r.x][r.y]="O"):"sb"===t?(g("submarine"),B("submarine")?E(e,"submarine"):e.gameBoard[r.x][r.y]="O"):"de"===t?(g("destroyer"),B("destroyer")?E(e,"destroyer"):e.gameBoard[r.x][r.y]="O"):"ac"===t?(g("aircraft"),B("aircraft")?E(e,"aircraft"):e.gameBoard[r.x][r.y]="O"):e.gameBoard[r.x][r.y]="O"===t?"O":"X",e.isPlayerTurn=!1),e}return"RESET"===r.type||"RESET_GAMEBOARD_ONLY"===r.type?(e=f(),Object.keys(l).map((function(e){l[e]instanceof Array&&(l[e]=[])})),Object.keys(b).map((function(e){b[e]instanceof Array&&(b[e]=0)})),e):e}}),J=t(7),q=t(2),K=(t(16),t(1));function Q(){return Object(K.jsxs)("div",{className:"WelcomePage",children:[Object(K.jsx)("h1",{children:" WELCOME TO BATTLESHIP "}),Object(K.jsx)("h3",{children:" Sink all your Opponent's Ships Before they sink you! "}),Object(K.jsx)("button",{type:"buttonC",children:Object(K.jsx)(J.b,{to:"/gameBoard/Rules",children:"Rules"})}),Object(K.jsx)("button",{type:"buttonA",children:Object(K.jsx)(J.b,{to:"/gameBoard/NormalGameMode",children:"Normal Game Mode"})}),Object(K.jsx)("button",{type:"buttonB",children:Object(K.jsx)(J.b,{to:"/gameBoard/FreePlayMode",children:"Free Play Mode"})})]})}function U(){return Object(K.jsxs)("div",{className:"WelcomePage",children:[Object(K.jsx)("h1",{children:" Rules of the Game "}),Object(K.jsxs)("ol",{children:[Object(K.jsx)("li",{children:"Four ships will be placed randomly on both boards"}),Object(K.jsx)("li",{children:"You and the opponent will take turns firing onto each other's boards"}),Object(K.jsx)("li",{children:"When someone makes a hit, the tile will turn RED. Else, it turns Gray."}),Object(K.jsx)("li",{children:"When an entire ship is hit, the tiles will turn black"}),Object(K.jsx)("li",{children:"Whoever hits all ships, WINS!"})]}),Object(K.jsx)(J.b,{to:"/",children:"Home"})]})}var V=t(5),Z=a.a.createContext();function $(e,r){return"boardClick"===r.type?e+1:e}function ee(e){var r=Object(n.useReducer)($,10),t=Object(V.a)(r,2),a=t[0],o=t[1];return Object(K.jsx)(Z.Provider,{value:[a,o],children:e.children})}t(31);function re(e){var r=Object(n.useContext)(Z),t=Object(V.a)(r,2),a=(t[0],t[1]),o=e.symbol,c=e.boardType,i="background";"X"===o?i="player-miss":"O"===o?i="player-hit":"sc"===o||"sb"===o||"ac"===o||"de"===o?i="ship-color":"sct"===o||"sbe"===o||"act"===o||"der"===o?i="player-ship-color":"S"===o&&(i="destroyed-ship");var u=Object(s.b)();return Object(K.jsx)("div",{onClick:function(){u({type:"onClick",x:e.x,y:e.y,boardType:c}),a({type:"boardClick",symbol:o})},id:"square",class:i,children:o})}t(14);function te(e){var r=e.text,t=Object(s.b)();return Object(K.jsx)("button",{onClick:function(){return t({type:"RESET"})},children:r})}function ne(){for(var e=Object(n.useContext)(Z),r=Object(V.a)(e,2),t=(r[0],r[1],Object(s.b)(),Object(q.g)().gameType,Object(s.c)((function(e){return e.clickCount})),Object(s.c)((function(e){return e.playerBoard}))),a=[],o=0;o<10;o++){t[o];for(var c=0;c<10;c++)a.push(Object(K.jsx)(re,{symbol:t[o][c],x:o,y:c,boardType:"player"}))}return Object(K.jsx)("div",{children:Object(K.jsx)("div",{id:"board",children:a})})}function ae(){var e=Object(n.useContext)(Z),r=Object(V.a)(e,2),t=(r[0],r[1],Object(s.b)()),a=(Object(q.g)().gameType,Object(s.c)((function(e){return e.clickCount})),Object(s.c)((function(e){return e.computerBoard})));Object(n.useEffect)((function(){return t({type:"placeShips"})}),[]);for(var o=[],c=0;c<10;c++)for(var i=0;i<10;i++)o.push(Object(K.jsx)(re,{symbol:a.gameBoard[c][i],x:c,y:i,boardType:"computer"}));return Object(K.jsx)("div",{children:Object(K.jsx)("div",{id:"board",children:o})})}t(17);function oe(){return Object(K.jsx)("div",{children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{class:"align-title",children:[Object(K.jsx)(ne,{}),"Player Board"]}),Object(K.jsxs)("div",{class:"align-title",children:[Object(K.jsx)(ae,{}),"Computer Board"]}),Object(K.jsx)(te,{text:"Reset Game"})]})})}function ce(){return Object(K.jsx)("div",{children:Object(K.jsxs)("div",{class:"container",children:[Object(K.jsxs)("div",{class:"align-title",children:[Object(K.jsx)(ae,{}),"Computer Board"]}),Object(K.jsx)(te,{text:"Reset Game"})]})})}var ie=Object(i.b)(H);c.a.render(Object(K.jsx)(ee,{children:Object(K.jsx)(s.a,{store:ie,children:Object(K.jsx)(J.a,{children:Object(K.jsxs)(q.c,{children:[Object(K.jsx)(q.a,{path:"/",element:Object(K.jsx)(Q,{})}),Object(K.jsx)(q.a,{path:"/gameBoard/NormalGameMode",element:Object(K.jsx)(oe,{})}),Object(K.jsx)(q.a,{path:"/gameBoard/FreePlayMode",element:Object(K.jsx)(ce,{})}),Object(K.jsx)(q.a,{path:"/gameboard/:rules",element:Object(K.jsx)(U,{})})]})})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c74a2c53.chunk.js.map