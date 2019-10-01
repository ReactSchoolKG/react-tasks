import React from "react";

class TickList extends React.Component{
    render(){
        let liStyle = {
            color:this.props.color,
            listStyleType:"circle",
            background:"#d9dd4a99",
            padding:"10px",
            margin:"10px 50px",
            borderRadius:"10px",
            fontWeight:"bold",
            cursor:"pointer",
          };

        let new_ul = this.props.div5.map((item, index) => {
            return <li style={liStyle} key={index} onClick={this.props.handlClick}>{item}</li>
        });
        
        return (<ul> {new_ul} </ul>)
        }
    }
    
    export default TickList;
