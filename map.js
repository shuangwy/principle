Array.prototype.MyMap=function(fn,context){
    var arr = Array.prototype.splice.call(this)
    var mappedArray =[]
    for(var i =0;i<arr.length;i++){
        mappedArray.push(fn(arr.call(context,arr[i],i,this)))
    }

}