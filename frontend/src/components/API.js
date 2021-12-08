import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';
import Api from '../styles/Api.css'

class API extends React.Component {

    state = {
        title: '',
        body: ''
    };

handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

submit = (event) => {
        event.preventDefault();
        const payload = {
            title: this.state.title,
            body: this.state.body
        };
        axios({
        url: '/api/save',
        method: 'FORM',
        data: payload
    })
        .then(() => {
            console.log('Les données ont été envoyé vers le server')
        })
        .catch(() => {
            console.log('Erreur')
        });;
    };

    render() {

        console.log('State: ', this.state);

    return(
        <div>
            <h2 className="API_titre">Give us some ideas</h2>
            <form className="form"> 
                <div className="form-input1"></div>
                    <input 
                    type="text" 
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                <div className="form-input2">
                    <textarea 
                    placeholder="body"
                    name="body" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    value={this.state.body}
                    onChange={this.handleChange}></textarea>
                </div>
                <button className="btn_submit">Submit</button>
            </form>
        </div>
    );
}
}

export default API;