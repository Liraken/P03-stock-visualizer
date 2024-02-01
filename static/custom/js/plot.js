function plotStocks(traceArray, plotType) {

    let layout = {
        dragmode: 'zoom',
    };

    Plotly.newPlot("price-plot", traceArray, layout);
}