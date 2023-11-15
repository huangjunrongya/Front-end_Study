function fetchData(callback) {
    //模拟数据获取
    setTimeout(() => {
        callback("数据");
    },1000);
}

function processData(data){
    console.log("处理的数据："+data);
}


fetchData(processData);