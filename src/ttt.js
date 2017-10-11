import React from 'react';
import ReactDOM from 'react-dom';





function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      message: 'ready'
    };
  }
/*
  getClickedRefresh() {
      console.log("reach");
  }*/

  /*
  sendFormData() {
    // Fetch form values.
    var formData = {
      buttonID: '1'//ReactDOM.findDOMNode(this.refs.budget).value,
    };
  
    // Send the form data.
    
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          _this.setState({message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
        }
      }
    };
    xmlhttp.open('POST', '/send', true);
    //xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
    
  }
*/

  handleClick(i) {
    //event.preventDefault();
    //document.getElementById('heading').scrollIntoView();
    //this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    
    var invocation = new XMLHttpRequest();
    var url = 'http://66.189.31.132:8080';
    var invocation = new XMLHttpRequest();
    var url = 'http://66.189.31.132:8080/posttest';
    if (invocation) {
      invocation.open('POST', url, true);
      var setstring;
      invocation.onreadystatechange = function() {
          // Ready state 4 means the request is done
          if (invocation.readyState === 4) {
              // 200 is a successful return
              if (invocation.status === 200) {
                  //alert(invocation.responseText); // 'This is the returned text.'
                  invocation.open("POST", "/red0", true);
                  if (_this.state.xIsNext){
                      setstring = "Color=Red &Square=" + i
                      alert("sent post with red "+ i)
                  }
                  else if (!_this.state.xIsNext) {
                      setstring ="Color=Yellow &Square=" +i
                      alert("sent post with yellow "+i)
                  }
              } else {
                  alert('Error: ' + invocation.status); // An error occurred during the request
              }
          }
      };
      invocation.send(setstring);
  }
  

    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares, xIsNext: !this.state.xIsNext, message: 'Sending'},
      this.sendFormData
    );
  }




  
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status} {this.state.message}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root2')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;