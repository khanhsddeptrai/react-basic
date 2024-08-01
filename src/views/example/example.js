import React from "react";

class Mycomponent extends React.Component {

    state = {
        name: 'khanh dep trai',
        email: 'ndkhanh2101362@student.ctuet.edu.vn'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnClickButton = () => {
        alert("Hello bro!")
    }

    render() {
        let name = "khanh dep trai";
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />Hello my name is {this.state.name}
                </div>
                <div className="second">Email: {this.state.email}</div>
                <div className="third">
                    <button onClick={() => this.handleOnClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}
export default Mycomponent;