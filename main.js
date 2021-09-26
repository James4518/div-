let box=document.getElementById("box");
//当鼠标在被拖拽元素按下时，开始拖拽    onmousedown
box.onmousedown= function (){
    //鼠标跟随移动时拖拽元素跟着移动       onmousemove
    document.onmousemove =  function(event){
        event=event || window.event;
        //获取鼠标坐位
        let left = event.clientX;
        let top = event.clientY;
        //修改位置
        box.style.left = left + "px";
        box.style.top = top + "px";
    }
};
//鼠标松开时，该元素固定到当前位置     onmouseup
box.onmouseup = function (){
    //释放，取消onmouseve事件
    document.onmousemove = null;
}
