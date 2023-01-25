import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                {(this.props.age != null) ? `안녕하세요, 제 이름은 ${this.props.name}이고, ${this.props.age}살 입니다.` :
                `안녕하세요, 제 이름은 ${this.props.name}입니다.`
                }
            </div>
        );
    }
}


export default MyComponent;