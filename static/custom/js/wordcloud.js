// Callback function to draw the word cloud
function draw(words) {
    d3.select("#word-cloud").append("svg")
        .attr("width", wordDiv.clientWidth)
        .attr("height", wordDiv.clientHeight)
        .append("g")
        .attr("transform", "translate(" + cloudLayout.size()[0] / 2 + "," + cloudLayout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Georgia")
        .style("fill", function(d) { return d.colorValue; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}