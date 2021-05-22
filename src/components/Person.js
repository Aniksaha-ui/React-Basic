import React, {Component} from 'react'


let Person = (props)=>{
    return(
        <div>
            Serial number:{Math.random()}
            <h2>Name:{props.name} and Age :{props.age} </h2>
            <h2>Extra Info:{props.children}</h2>
        </div>
      );
}


// class Person extends Component{
   
//     constructor(props){
//         super(props);
//     }
   
//     render(){
//      return(
//         <div>
//             Serial number:{Math.random()}
//             <h2>Name:{this.props.name} and Age :{this.props.age} </h2>
//             <h2>Extra Info:{this.props.children}</h2>
//         </div>
//       );
//     }
// }

export default Person;  