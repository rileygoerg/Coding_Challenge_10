// U14123683
// Logic for Data Loading and Display
function main(){
    d3.dsv(',','data/purchase_orders.csv', d3.autoType).then( // loads data
        function (d) {
            for (let index = 0; index < d.length; index++) { // for loop to obtain each row of data
                const element = d[index];
                d3.select("body")
                .append("ul")
                .append("li") // appends each row to a list item in an unordered list
                .text(element.customerName + " - #" + element.orderId + ": $" + element.purchaseAmount)
            }
        }

    )
}