import React, { Component } from 'react';


function hoc(WrappedComponent) {
  return class extends Component {
      constructor(props) {
        super(props);
       
        this.state = {
          step: 1
        }

        this.incrementStep = this.incrementStep.bind(this);
        this.clearStep = this.clearStep.bind(this);
      }

      incrementStep(step){
        this.setState({
            step: this.state.step + step
        })
      }

      clearStep(){
          this.setState({
            step: 1
          });
      }
  
  
      render() {
        return (
          <div>
            <button onClick={ ()=>{ this.incrementStep(2) } }>+</button>
            <button onClick={ ()=>{ this.incrementStep(-2) } }>-</button>
            <WrappedComponent clearStep={this.clearStep} step={this.state.step} />
          </div>
        )
        
      }
  }
}

export default hoc;
