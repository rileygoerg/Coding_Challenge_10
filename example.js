// U14123683
// Logic for Data Loading and Display
function loadData(){
    d3.csv("../data/purchase_orders.csv").then(
        function (d) {
            for (let index = 0; index < d.length; index++) {
                const element = d[index];
                d3.select("body")
                .append("ul")
                .append("li")
                .text("Customer Name: " + d.customerName + ", Order ID: " + d.orderId + ", Purchase Amount: " + d.purchaseAmount)
                
            }
        }

    )
}