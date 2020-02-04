// import React, {Component} from 'react';
//
// export default class User extends Component {
//     render() {
//         return (
//             <div style={{marginTop: "100px"}}>
//                 <h1>Your private user dashboard!</h1>
//                 <form>
//                     <h3>React File Upload</h3>
//                     <div>
//                         <input type="file" />
//                     </div>
//                     <div>
//                         <button type="submit">Upload</button>
//                     </div>
//              </form>
//             </div>
//         );
//     }
// }
import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("http://localhost:5000/files/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
                <div style={{marginTop: "100px"}}>
                    <h1>Your private user dashboard!</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div>
                            <button  type="submit">Upload</button>
                        </div>
                    </form>
                </div>
        )
    }
}