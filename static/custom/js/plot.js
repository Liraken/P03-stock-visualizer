function plotStocks(traceArray) {

    console.log(traceArray);

    let titleStr = "";
    for(i = 0; i < traceArray.length; i++) {
        if (i === 0) {
            titleStr = `${traceArray[i].name}`;
        } else {
            titleStr = titleStr + ", " + `${traceArray[i].name}`;
        }
    };

    console.log(titleStr);

    let layout = {
        dragmode: 'zoom',
        template: 'plotly_dark',
        title: titleStr
    };

    Plotly.newPlot("price-plot", traceArray, layout);
}