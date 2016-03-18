window.onload=function(){
	var word=getClass("remen_middlea");
	var con=getClass("jslogo");
	for(var i=0;i<word.length;i++){
		word[i].index=i;
		word[i].onclick=function(){
			for(var j=0;j<con.length;j++){
				con[j].style.display="none";
				word[j].style.fontWeight="normal"
				word[j].style.textDecoration="none";
			}
			con[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
		}
	}
/***********************************************/
	var jslogocenter=getClass("logo_centera")
	var jsxins=getClass("jstx")
	for(var k=0;k<jslogocenter.length;k++){
		jslogocenter[k].index=k;
		jslogocenter[k].onmouseover=function(){
			jsxins[this.index].style.display="block"
		}
		jslogocenter[k].onmouseout=function(){
			jsxins[this.index].style.display="none"
		}
	}





      var tex=$("#tex")
      tex.onfocus=function(){
        if(tex.value=="施华洛世奇华丽入住，璀璨好礼疯狂送"){//如果焦点事件是默认字体
          tex.value="";//则清空
        }
      }   
      tex.onblur=function(){
        if(tex.value==""){//如果失去焦点事件是空值则
        tex.value="施华洛世奇华丽入住，璀璨好礼疯狂送"//赋值给默认值 
        }
        
      }

      var texx=$("#texx")
      texx.onfocus=function(){
        if(texx.value=="施华洛世奇华丽入住，璀璨好礼疯狂送"){//如果焦点事件是默认字体
          texx.value="";//则清空
        }
      }   
      texx.onblur=function(){
        if(texx.value==""){//如果失去焦点事件是空值则
        texx.value="施华洛世奇华丽入住，璀璨好礼疯狂送"//赋值给默认值 
        }
        
      }
/*input***************************************/
/************************************************************/
//banner轮播
    var jsimg=$(".jsimg");
    var butbox=$(".butbox");
    var bigbanner=$(".bigbanner")[0];
    var jsbannerColor=["#b90af9","#ebebeb","#fff701","#e3e3e3","#63c6a9","#ee4130"]
    var num=1;
    function move(){
      if(num==6){
        num=0;
      }
      for(var i=0;i<jsimg.length;i++){
       jsimg[i].style.zIndex=4;
       butbox[i].style.background="rgba(0,0,0,0.5)"
    }
        jsimg[num].style.zIndex=5;
        butbox[num].style.background="#999"
        bigbanner.style.background=jsbannerColor[num];
        num++;
    }
    var t1=setInterval(move,2000);
    for(var i=0;i<butbox.length;i++){
        butbox[i].index=i;
        butbox[i].onmouseover=function(){
        clearInterval(t1);
        for(var j=0;j<jsimg.length;j++){
          jsimg[j].style.zIndex=4;
          butbox[j].style.background="rgba(0,0,0,0.5)";
        }
          jsimg[this.index].style.zIndex=5;
          this.style.background="#999";
           bigbanner.style.background=jsbannerColor[this.index];
        }
        butbox[i].onmouseout=function(){
          t1=setInterval(move,2000);
          num=this.index+1;
        }
      }
//banner轮播
//楼层跳转
  var jshead=$(".jshead")[0];
  var flagdnow=true;
  var flagup=true;
  var floors=$(".f2box");
  var jump=$(".jump")[0];
  var btn=$("li",jump);
    for(var i=0;i<btn.length;i++){
          btn[i].index=i;
          btn[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
          }
        }
  //搜索框的显示与隐藏
  var ch=document.documentElement.clientHeight;
  window.onscroll=function(){
    var scrollT=getScrollT();
    if(scrollT>=400){
      if(flagdnow){
        animate(jshead,{top:0});
        flagdnow=false;
        flagup=true;
        }
      }
    else{
        if(flagup){
          animate(jshead,{top:-50});
          flagup=false;
          flagdnow=true;
        }
      }
 
 if(scrollT>=1104){
            jump.style.display="block";
          }else{
            jump.style.display="none";
          }
//滚动条控制按钮
            for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;//
              if(floors[i].t<scrollT+1){//如果scrollTop大于当前楼层的top
                //alert(11111)
                for(var j=0;j<btn.length;j++){
                  btn[j].style.backgroundColor="#fff";
                }
                btn[i].style.backgroundColor="#333";
              }
              //floors[i].index=i;
            }
//按需加载
//document.title=scrollT;
    for(var i=0;i<floors.length;i++){
      if(floors[i].offsetTop<scrollT+ch){
        var imgs=$("img",floors[i]);
        for(var j=0;j<imgs.length;j++){
          imgs[j].src=imgs[j].getAttribute("aa");
        }
      }
    }

}
//楼层跳转
//楼层轮播
function loucengleftlunbo(a){
      var bigbox1=$(".bigbox1")[a];
      var anniu1=$(".anniu1")[a];
      var anniu2=$(".anniu2")[a];
    function moveleft(){
        var first=getFirst(bigbox1);
        var last=getLast(bigbox1);
      animate(bigbox1,{left:-100},600,Tween.Linear,function(){
        bigbox1.appendChild(first);//第一个放最后
        bigbox1.style.left=0;//拉回来
      })
    }
     var t=setInterval(moveleft,2000);
    function moveright(){
       var last=getLast(bigbox1);
        var first=getFirst(bigbox1);
        last.style.width=0;
        bigbox1.insertBefore(last,first);
      animate(last,{width:100},600,Tween.Linear)  
    }
    
        anniu1.onmouseover=anniu2.onmouseover=function(){
          clearInterval(t);
      }
        anniu1.onmouseout=anniu2.onmouseout=function(){
          t=setInterval(moveleft,2000);
      }
        anniu1.onclick=function(){
          moveleft();
      }
        anniu2.onclick=function(){
          moveright();
      }
}
for(var i=0;i<6;i++){
  loucengleftlunbo(i);
}
//左移动 
for(var i=0;i<24;i++){
   var movel=$(".moveleft")[i];
   var moveimg=$("img",movel);
    moveLeft(moveimg);
 }
  function moveLeft(obj){
 
    for(var i=0;i<obj.length;i++){
  obj[i].index=i;
  obj[i].onmouseover=function(){
    obj[this.index].style.cssText="position:relative;left:-3px";
  }
  obj[i].onmouseout=function(){
    obj[this.index].style.cssText="position:relative;left:0px"
    }
  }
}

//banner 左侧轮播
 var yiji=$(".yiji");
    var erji=$(".erji");
    var lingxingtop=$(".lingxingtop")
    for(var i=0;i<yiji.length;i++){
      yiji[i].index=i;
      yiji[i].onmouseover=function(){
        erji[this.index].style.display="block";
        lingxingtop[this.index].style.display="block";
      }
      yiji[i].onmouseout=function(){
        erji[this.index].style.display="none";
        lingxingtop[this.index].style.display="none";

      }
    }


//下拉菜单我的淘宝

var yijis=$(".yijis")[0];
var erjis=$(".erjis")[0];
  hover(yijis,function(){
    erjis.style.display="block"
  },function(){
    erjis.style.display="none"
  })

//下拉菜单收藏夹

var yijia=$(".yijia")[0];
   var erjia=$(".erjia")[0];
      hover(yijia,function(){
    erjia.style.display="block"
  },function(){
    erjia.style.display="none"
  })

//下来菜单手机版

var yijib=$(".yijib")[0];
var erjib=$(".erjib")[0];
      hover(yijib,function(){
        erjib.style.display="block";
      },function(){
        erjib.style.display="none";
      })

 //下拉菜单商家支持  
var yijic=$(".yijic")[0];
var erjic=$(".erjic")[0];
      hover(yijic,function(){
        erjic.style.display="block";
      },function(){
        erjic.style.display="none";
      })

var yijid=$(".yijid")[0];
var erjid=$(".erjid")[0];
      hover(yijid,function(){
        erjid.style.display="block";
      },function(){
        erjid.style.display="none";
      })
//右侧固定定位
  
       function  headright(e){
        var erjie=$(".erjie")[e];
        var yijie=$(".yijie")[e];
        var jstuquana=$(".jstuquana")[e];
        var jstuquanb=$(".jstuquanb")[e];
        hover(yijie,function(){
          erjie.style.display="block";
          jstuquana.style.display="block";
          jstuquanb.style.display="block";
          animate(erjie,{marginLeft:20},300,Tween.Linear)
          animate(jstuquana,{marginLeft:20},300,Tween.Linear)
          animate(jstuquanb,{marginLeft:20},300,Tween.Linear)
        },function(){
          erjie.style.display="none";
          jstuquana.style.display="none";
          jstuquanb.style.display="none";
          animate(erjie,{marginLeft:0},300,Tween.Linear)
           animate(jstuquana,{marginLeft:0},300,Tween.Linear)
          animate(jstuquanb,{marginLeft:0},300,Tween.Linear)
        })

    }
for(var j=0;j<8;j++){
  headright(j);
}

var yijif=$(".yijif")[0];
var _libao=$("._libao")[0];
var jstuquanaa=$(".jstuquanaa")[0]
var jstuquanba=$(".jstuquanba")[0]
      hover(yijif,function(){
        _libao.style.display="block";
       jstuquanaa.style.display="block";
       jstuquanba.style.display="block";
      },function(){
        _libao.style.display="none";
        jstuquanaa.style.display="none";
       jstuquanba.style.display="none";
      })

//左侧楼层跳转
var jump1=$(".jump1");
var jump_a=$(".jump_a");
for(var i=0;i<jump1.length;i++){
  jump1[i].index=i;
  jump1[i].onmouseover=function(){
    jump_a[this.index].style.display="block";
  }
  jump1[i].onmouseout=function(){
    jump_a[this.index].style.display="none";
  }
}




}