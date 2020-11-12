module.exports = function(source){
    console.log(this)
    const callback = source.async();
    setTimeout(() => {
        let result = source.replace('world','tom')
        callback(result)
    }, 1000);
}