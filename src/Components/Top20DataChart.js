import React, { Component } from 'react'
import './Charts.css';
import CanvasJS from '../canvasjs.react';
import { withRouter } from 'react-router';
// var CanvasJS = CanvasJS;
var CanvasJSChart = CanvasJS.CanvasJSChart;
 
class Top20DataChart extends Component {	
	constructor(props){
		super();
		this.state={
			data:[]
		}
		// console.log(props.twentyData)
	}

	changetoInt=(stringvalue)=>{
		let ss = stringvalue.replace(",","");
		console.log(ss);
		return parseInt(ss);
	}

	componentDidMount(){
		this.setState({
			data:this.props.twentyData
		  });
		//   console.log(this.state.data[0])
	}
	
	render() {
		const options = {
			animationEnabled: false,
			exportEnabled: false,
			theme: "dark1", //"light1", "dark1", "dark2",
			backgroundColor: "#1d2124",
			color: "white",
			title:{
				text: "Top 10 most affected countries."
			},
			axisY: {
				title: "Number of Cases",
				gridThickness: 0
				
			},
			axisX: {
				title: "Country",
				
			},
			
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "white",
				indexLabelPlacement: "outside",	
				dataPoints: [
					{ x: 1, y:this.changetoInt(this.props.twentyData[0].TotalCases), indexLabel: this.props.twentyData[0].Country },
					{ x: 2, y: this.changetoInt(this.props.twentyData[1].TotalCases), indexLabel: this.props.twentyData[1].Country },
					{ x: 3, y: this.changetoInt(this.props.twentyData[2].TotalCases), indexLabel: this.props.twentyData[2].Country },
					{ x: 4, y: this.changetoInt(this.props.twentyData[3].TotalCases), indexLabel: this.props.twentyData[3].Country },
					{ x: 5, y: this.changetoInt(this.props.twentyData[4].TotalCases), indexLabel: this.props.twentyData[4].Country },
					{ x: 6, y: this.changetoInt(this.props.twentyData[5].TotalCases), indexLabel: this.props.twentyData[5].Country },
					{ x: 7, y: this.changetoInt(this.props.twentyData[6].TotalCases), indexLabel: this.props.twentyData[6].Country },
					{ x: 8, y: this.changetoInt(this.props.twentyData[7].TotalCases), indexLabel: this.props.twentyData[7].Country },
					{ x: 9, y: this.changetoInt(this.props.twentyData[8].TotalCases), indexLabel: this.props.twentyData[8].Country },
					// { x: 10, y: this.changetoInt(this.props.twentyData[9].TotalCases), indexLabel: this.props.twentyData[9].Country },
					// { x: 11, y: this.changetoInt(this.props.twentyData[10].TotalCases), indexLabel: this.props.twentyData[10].Country },
					// { x: 12, y: this.changetoInt(this.props.twentyData[11].TotalCases), indexLabel: this.props.twentyData[11].Country },
					// { x: 13, y: this.changetoInt(this.props.twentyData[12].TotalCases), indexLabel: this.props.twentyData[12].Country },
					// { x: 14, y: this.changetoInt(this.props.twentyData[13].TotalCases), indexLabel: this.props.twentyData[13].Country },
					// { x: 15, y: this.changetoInt(this.props.twentyData[14].TotalCases), indexLabel: this.props.twentyData[14].Country },
					// { x: 16, y: this.changetoInt(this.props.twentyData[15].TotalCases), indexLabel: this.props.twentyData[15].Country },
					// { x: 17, y: this.changetoInt(this.props.twentyData[16].TotalCases), indexLabel: this.props.twentyData[16].Country },
					// { x: 18, y: this.changetoInt(this.props.twentyData[17].TotalCases), indexLabel: this.props.twentyData[17].Country },
					// { x: 19, y: this.changetoInt(this.props.twentyData[18].TotalCases) , indexLabel: this.props.twentyData[18].Country},
					// { x: 20, y: this.changetoInt(this.props.twentyData[19].TotalCases) , indexLabel: this.props.twentyData[19].Country}
				]
			}]
		}
		
		return (
		<div className="chart">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default Top20DataChart; 