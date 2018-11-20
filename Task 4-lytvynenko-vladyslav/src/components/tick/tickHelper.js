import React from "react";


class TickHelper extends React.Component{
    render(){
        let itemStyle = {
            color:this.props.color,
            listStyleType:"none",
            cursor:"pointer",
            background:"#00CED1",
            padding:"8px",
            margin: "0 auto",
            marginBottom:"15px",
            borderRadius:"15px",
            fontWeight:"bold",
            width: "20vw",
          };

        let item = this.props.divItems.map((item, index) => {
            return <li style={itemStyle} key={index} onClick={this.props._deleteItem}>{item}</li>
        });
        
        return (
        <ul> 
        {item}
         </ul>
         )
        }

    }
    
    export default TickHelper;