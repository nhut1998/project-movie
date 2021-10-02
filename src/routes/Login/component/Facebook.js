// import React, {Component} from 'react';
// import FacebookLogin from 'react-facebook-login';
// import { withRouter } from 'react-router-dom'

// class Facebook extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       auth: false,
//       name: '',
//       picture: ''
//     };
//     this.componentClicked  = this.componentClicked.bind(this)

//   }

 
//     responseFacebook = response => {
//         console.log(response);
//         if(response.status !== 'unknown')
//         this.props.history.push('/')
//         this.setState({
//             auth: true,
//             name: response.name,
//             picture: response.picture.data.url
//         });
        
//     }

//     componentClicked = () => {
//         console.log('Facebook btn clicked');
       
//     }

//     render(){
//         let facebookData;

//         this.state.auth ?
//         facebookData = (
//                 <div style={{
//                     width: '400px',
//                     margin: 'auto',
//                     background: '#f4f4f4',
//                     padding: '20px',
//                     color: '#000'
//                 }}>
//                     <img src={this.state.picture} alt={this.state.name} />
//                     <h2>Welcome {this.state.name}!</h2>
//                 </div>
//             ) : 
//             facebookData = (<FacebookLogin
//                 appId="1024248348388299"
//                 autoLoad={true}
//                 fields="name,picture"
//                 onClick={this.componentClicked}
//                 callback={this.responseFacebook} />);

//         return (
//             <>
//                 {facebookData}
//             </>
//         );
//     }
// }
// export default withRouter(Facebook)

  
import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        // localStorage.setItem('access_token', response.accessToken)
        // axios.defaults.headers["Authorization"] = `Bearer ${response.accessToken}`
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });
        
    }

    // componentClicked = () => {
    //     console.log('Facebook btn clicked');
    // }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="1024248348388299"
                autoLoad={true}
                fields="name,picture"
                // onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}