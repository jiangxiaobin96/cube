<template>
    <div style="background: #eeeeee;">

      <div style="margin:120px auto 80px;" id="mofang" ></div>

      <div id="btns" class="btns" style="margin:50px auto 20px; width:300px;">
          <input type="button" value="u"/>
          <input type="button" value="d"/>
          <input type="button" value="l"/>
          <input type="button" value="r"/>
          <input type="button" value="f"/>
          <input type="button" value="b"/>
          <input type="button" value="u'"/>
          <input type="button" value="d'"/>
          <input type="button" value="l'"/>
          <input type="button" value="r'"/>
          <input type="button" value="f'"/>
          <input type="button" value="b'"/>
      </div>

      <div class="cs" id="cs" style="width:300px; margin:0 auto;">
          <input type="button" value="重置颜色" style="margin-top:10px;"/>
          <input type="button" value="重置位置" style="margin-top:10px;"/>
          <input type="button" value="随机打乱" style="margin-top:10px;"/>
          <input type="text" style="margin-top:10px;" value="ddr'd'ffbdrrddr'ffd'ffu'bblluudrru">
          <input type="button" style="margin-top:10px" value="批量操作"/>
          <input type="text" style="margin-top:10px;" value="DRLUUBFBRBLURRLRUBLRDDFDLFUFUFFDBRDUBRUFLLFDDBFLUBLRBD">
          <input type="button" style="margin-top:10px" value="设置颜色"/>
          <input type="button" style="margin-top:10px" value="还原"/>
      </div>
    </div>
</template>

<!--<script type="text/javascript" src="Cube.js"></script>-->
<script type="text/javascript" defer=true>
    import {Cube} from '../components/Cube.js'
    export default {
        name: "cubeVue",
        // data: function(){
        //     return{
        //
        //     }
        // },
        mounted(){
          this.solution();
        },
        methods: {
            solution(){
              // console.log("id:"+document.getElementById("mofang"))
              // console.log("aaa")
                let cube= new Cube("mofang",{borderLength:200});
                console.log("aaa")
                let aInt=document.getElementById('btns').getElementsByTagName('input');
                console.log("aInt:"+aInt)
                for(let i=0;i<aInt.length;i++){
                  aInt[i].onclick=function(){
                    console.log("value:"+this.value)
                    cube.turn3(this.value);
                  }
                }
                let aInt2=document.getElementById('cs').getElementsByTagName('input');
                aInt2[0].onclick=function(){
                  cube.initColor();
                };
                aInt2[1].onclick=function(){
                  cube.initL();
                };
                aInt2[2].onclick=function(){
                  cube.random();
                };
                aInt2[4].onclick=function(){
                  let value=aInt2[3].value;
                  cube.turn3s(value);
                };
                aInt2[6].onclick=function(){
                  let value=aInt2[5].value;
                  cube.setColorChar(value)
                };
                aInt2[7].onclick=function(){
                };
            }
        }
    }
</script>

<style scoped>

</style>
