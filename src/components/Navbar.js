// function Navbar() {   
//     return ( 
//         <nav classname= "navbar bg-primary">
//             <h1>
//                 <i class= {props.title}></i>
//             </h1>
            
//         </nav>
//      );
     
// }

// Navbar.defaultProps= {
//     title: "Github Finder",
//     icon: "fab fa-github"
// }
import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Navbar extends Component {
    static defaultProps= {
        title: "Github Finder",
        icon: "fab fa-github"
    }

    static propTypes= {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }

    render() {
        return ( 
            <nav className= "navbar bg-primary">
                <h1>
                    <i class= {this.props.icon}></i>&nbsp;{this.props.title}
                </h1>
                
            </nav>
         );
    }
}


export default Navbar;