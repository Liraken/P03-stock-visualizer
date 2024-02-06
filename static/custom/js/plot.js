let plotDiv = document.getElementById('price-plot');

function plotStocks(traceArray) {

    //console.log(traceArray);

    let titleStr = '';
    if (traceArray.length > 0) {
        //preloading first ticker name into title string
        titleStr = `Stock Prices in $USD: ${traceArray[0].name}`;
        //iterating through rest of ticker names, adding them with comma separators
        for(i = 1; i < traceArray.length; i++) {
            titleStr = titleStr + ", " + `${traceArray[i].name}`;
        };
    } else {
        titleStr = 'Select one or more stock tickers(s) to see plot!'
    }

    //console.log(titleStr);

    let layout = {
        dragmode: 'zoom',
        //selectdirection: 'h',
        title: titleStr,
        width: plotDiv.clientWidth,
        height: plotDiv.clientHeight,
        margin: {
            l: 30,
            r: 30,
            t: 90,
            b: 30
        },
        plot_bgcolor: '#111',
        paper_bgcolor: '#111',
        font: {
            color: '#eee'
        },
        line: {
            color: '#eee'
        },
        xaxis: {
            gridcolor: '#555'
        },
        yaxis: {
            gridcolor: '#555'
        }
    };

    Plotly.newPlot("price-plot", traceArray, layout);
}

function clearSelectedStocks() {
    let selectedTickerLiItems = document.querySelectorAll('li.selected');
    selectedTickerLiItems.forEach(function(li) {
        li.classList.remove('selected');
    });
    numStocksSelected = 0;
    keywordList.classList.remove('full');
    refreshTracesAndPlot();
}