import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 1
        }
    }

    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1}
                    )
                }}>숫자 더하기</button>
            </div>
        );
    }
}

export default MyComponent;