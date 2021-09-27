let box=document.getElementById("box");
//当鼠标在被拖拽元素按下时，开始拖拽    onmousedown
box.onmousedown= function (event){
        //因为超出窗口还能跟随移动，so需捕捉释放鼠标
        //捕捉
        //if(box.setCapture) box.setCapture();
        box.setCapture && box.setCapture()
        //获取div偏移量  
        let ol = event.clientX - box.offsetLeft;
        let ot = event.clientY - box.offsetTop;
    //鼠标跟随移动时拖拽元素跟着移动       onmousemove
    document.onmousemove =  function(event){
        event=event || window.event;
        //获取鼠标的坐标
        let left = event.clientX - ol;
        let top = event.clientY - ot;
        //修改box位置
        box.style.left = left + "px";
        box.style.top = top + "px";
    };
    //鼠标松开时，该元素固定到当前位置     onmouseup
        box.onmouseup = function (){
            document.onmousemove = null;
            document.onmouseup = null;
             //释放，取消对事件的捕获 
             box.releaseCapture && box.releaseCapture();
        };
        //拖拽内容时，浏览器会搜索引擎搜索，此时会导致拖拽功能异常     取消
        return false;                                                    
};
