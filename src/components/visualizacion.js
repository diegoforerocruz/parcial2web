import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import * as d3 from 'd3'

function Visualizacion(props) {
    const [tableData, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const URL = props.urls
            const res = await (await fetch(URL)).json()

            
            const canvas = d3.select("#canvas");
            const width = 1000;
            const height = 500;

            const margin = {top:10 ,left:50, bottom:40, right:10};

            const iwidth = width-margin.left-margin.right;
            const iheight = height-margin.top-margin.bottom;

            const svg = canvas.append("svg");
            svg.attr("width", width);
            svg.attr("height", height);

            let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

            let y = d3.scaleLinear()
                .domain([0, 973306])
                .range([iheight, 0]);
            let x = d3.scaleBand()
                .domain(res.map(d => d.name))
                .range([0, iwidth])
                .padding(0.1);
            
            const bars = g.selectAll("rect").data(res);
            bars.enter().append("rect")
                .attr("class", "bar")
                .attr("x", d => x(d.name))
                .attr("y", d => y(d.seasons))
                .attr("height", d => iheight - y(d.seasons))
                .attr("width", x.bandwidth())
                .style("fill", "steelblue");
            
            g.append("g")
                .classed("x--axis", true)
                .call(d3.axisBottom(x))
                .attr("transform", `translate(0,${iheight})`)
            
            g.append("g")
                .classed("y--axis", true)
                .call(d3.axisBottom(x))
                .call(d3.axisLeft(y))
    
   
           
        }
        fetchData()
    }, [])


    function render() {
        
            return (
                <div>
                </div>
            )
        }
        
        
    

    return render()
}

export default Visualizacion