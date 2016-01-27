import React from 'react';
import ReactDOM from 'react-dom';
class UserAvatar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'ok'
        };
    }
    
    onChangeInput(e) {
        let text = e.target.value;
        this.setState({text});
    }
    
    render () {
        let text = this.state.text;
        return (
            <div>
                <input type="text" placeholder="please input text" onChange={this.onChangeInput.bind(this)} />
                <img src={`http://fakeimg.pl/350x200/?text=${text}`}/>
            </div>
        )
    }
}

ReactDOM.render(<UserAvatar/>, document.getElementById('app'));