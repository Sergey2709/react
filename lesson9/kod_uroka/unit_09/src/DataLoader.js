import React, { Component } from 'react';

class DataLoader extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data });
            });
    }

    // loadData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({ data });
    //         });
    // }

    render() {
        // this.loadData(); !!!!!!!!
        return (
            <div>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }


}

export default DataLoader;