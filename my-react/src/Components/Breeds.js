import React from "react";

export default class Breeds extends React.Component {
    state = {
        breeds: []
    }


    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all ")
            .then(responce => responce.json())
            .then(result => this.setState({
                breeds: Object.keys(result.message)
            }))

    }

    render() {

        return (
            <div> {this.state.breeds.map(breed => <div> {breed} </div>)} </div>

        )
    }
} 