// U14123683
// Logic for Data Loading and Display
function main(){
    d3.csv('data/purchase_orders.csv').then(
        function (d) {
            for (let index = 0; index < d.length; index++) {
                const element = d[index];
                d3.select("body")
                .append("ul")
                .append("li")
                .text(element.customerName + " - #" + element.orderId + ": $" + element.purchaseAmount)
            }
        }

    )
}