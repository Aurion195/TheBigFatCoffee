import React from "react";
import { Line as LineChart } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      datatograph: [],
      datatograph1: [],
      datatograph2: [],
      labels: [],
      search_data: [],
      options: [], //for storing videos
    };
  }
  
  getData(url) {
    console.log(this.chartReference); // returns a   Chart.js instance reference
    const apiUrl = this.props.url;
    console.log(this.props.url);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((datar) => {
        var keys = [];
        var datatograph = [];
        var datatograph1 = [];
        var datatograph2 = [];

        for (var k in datar[0].mois[0]) {
          keys.push(k);
        }

        for (var key in datar[0].mois[0]) {
          datatograph.push(datar[0].mois[0][key]);
        }
        for (var key in datar[1].mois[0]) {
          datatograph1.push(datar[1].mois[0][key]);
        }
        for (var key in datar[2].mois[0]) {
          datatograph2.push(datar[2].mois[0][key]);
        }

        this.labels = keys;
        this.setState({ datatograph: datatograph });
        this.setState({ datatograph1: datatograph1 });
        this.setState({ datatograph2: datatograph2 });
        this.setState({ labels: keys });
        var data = {
          labels: this.labels,
          datasets: [
            {
              title: "café richard",
              label: datar[0].annee,
              data: datatograph,
              fill: true,
              backgroundColor: "rgba(22,233,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
            {
              label: datar[1].annee,
              data: datatograph1,
              fill: true,
              backgroundColor: "rgba(247,89,89,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
            {
              label: datar[2].annee,
              data: datatograph2,
              fill: true,
              backgroundColor: "rgba(89,247,110,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        };
        const options = {
          scaleShowGridLines: true,
          scaleGridLineColor: "rgba(0,0,0,.05)",
          scaleGridLineWidth: 1,
          scaleShowHorizontalLines: true,
          scaleShowVerticalLines: true,
          bezierCurve: true,
          bezierCurveTension: 0.4,
          pointDot: true,
          pointDotRadius: 4,
          pointDotStrokeWidth: 1,
          pointHitDetectionRadius: 20,
          datasetStroke: true,
          datasetStrokeWidth: 2,
          datasetFill: true,
          legendTemplate:
            '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        };
        this.setState({
          search_data: data,
          options: options,
        });
      });
  }
  componentDidMount() {
    this.getData(this.state.url); //start the fetch function here after elements appeared on page already
  }

  render() {
    return (
      <LineChart
        ref={this.chartReference}
        data={this.state.search_data}
        options={this.state.options}
      />
    );
  }
}

export default Chart;
