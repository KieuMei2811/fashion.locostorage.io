function listProducts() {
    for (let i=0; i<= man.length-1; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width:18rem;">';
        demo += '<img src="'+man[i].image+'" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+ man[i].name +'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
    for (let i=0; i<=woment.length-1; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width:18rem;">';
        demo += '<img src="'+woment[i].image+'" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+ woment[i].name +'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
    localStorage.setItem('listproduct', JSON.stringify(man));
    localStorage.setItem('listfashion', JSON.stringify(woment));

}
function order(){
    alert("Thank you for your order");
}