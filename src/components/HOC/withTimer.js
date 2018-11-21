import React, { Component } from 'react'
function withTimer(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                count: 1
            }
        }
        render() {
            return (
                <div>
                    <button onClick={this._handlePlusMinus(true)}>+</button>
                    <button onClick={this._handlePlusMinus(false)}>-</button>
                    <WrappedComponent changer={this._handleChangerCount} count={this.state.count} />
                </div>);
        }
        _handleChangerCount = e => {
            this.setState({
                count:1
            });
        }
        _handlePlusMinus = val => e => {
            val ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: this.state.count - 1 });
        }
    };
}

export default withTimer;
