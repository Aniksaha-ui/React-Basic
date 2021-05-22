import React,{Component} from 'react'
import './App.css';
import Books from './components/Book'

//functional component

// function App() {
//   return (
//     <div className="App">
//         <h1>Hello World</h1>
//         <Person />
//     </div>
//   );
// }


//class component

class App extends Component{

  //state 

    
    state = {
      books:[
        { bookName:"1984" , writer:"someone"},
        {bookName:"1977" , writer:"someone1"},
        {bookName:"1977" ,  writer:"someone1"}
      ],
      otherProp:"I am from other Prop"

    }

    changeBookState = (password)=>{
  
      this.setState({

        books:[
          {bookName:password , writer:"someone"},
          {bookName:"1977" , writer:"sdajks"},
          {bookName:"1997" ,  writer:"sdjakjs"}
        ],

      });

    }

    changeInputState = (event)=>{
      this.setState({
        books:[
          {bookName:"1945", writer:"someone"},
          {bookName:"1977" , writer:event.target.value},
          {bookName:"2000", writer:"someone"},
        ],
      });
    }
  
 
  render(){

    const style ={
      border:"1px solid red",
      borderRedius:"5px",
      backgroundColor:"Black",
      color:"White"
    };

      return (
        <div className="App">
            <h1 style={style}>Book List </h1>

            <input type="text" onChange={this.changeInputState}></input>
            <Books bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} 
            change={this.changeBookState.bind(this,"change from books")} />
            <Books bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
            <Books bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} />
            <Books bookName={this.state.otherProp}></Books>
            <button onClick={this.changeBookState.bind(this,"Change from Button")}>Change State</button>
        </div> 
      );

  }
 
}


export default App;
