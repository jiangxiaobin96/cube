<template>
    <div style="background: #eeeeee;">

      <div style="margin:120px auto 80px;" id="mofang" ></div>

      <div id="btns" class="btns" style="margin:50px auto 20px; width:500px;">
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
          <!--<input type="text" style="margin-top:10px;" value="ddr'd'ffbdrrddr'ffd'ffu'bblluudrru">-->
          <!--<input type="button" style="margin-top:10px" value="批量操作"/>-->
          <input type="text" style="margin-top:10px;" value="DRLUUBFBRBLURRLRUBLRDDFDLFUFUFFDBRDUBRUFLLFDDBFLUBLRBD">
          <input type="button" style="margin-top:10px" value="设置颜色"/>
          <input type="button" style="margin-top:10px" value="还原"/>
      </div>
    </div>
</template>

<!--<script type="text/javascript" src="Cube.js"></script>-->
<script type="text/javascript" defer=true>
    import axios from 'axios'
    import qs from 'qs'
    import {Cube} from '../components/Cube.js'
    // import {Vue} from "vue";
    export default {
        name: "cubeVue",
        // data: function(){
        //     return{
        //         initC:''
        //     }
        // },
        mounted(){
          this.solution();
        },
        methods: {
            solution(){
              let tt = this
              // console.log("id:"+document.getElementById("mofang"))
              // console.log("aaa")
              let initC=""
                let cube= new Cube("mofang",{borderLength:200});
                // console.log("aaa")
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
                //随机打乱
                aInt2[2].onclick=function(){
                  // cube.random();
                  axios.get('/apis/scramble').then(response => {
                    console.log(response.data)
                    cube.setColorChar(response.data)
                    initC = response.data
                  })
                };
                //批量操作
                // aInt2[4].onclick=function(){
                //   let value=aInt2[3].value;
                //   console.log(value)
                //   cube.turn3s(value);
                // };
                //设置颜色
                aInt2[4].onclick=function(){
                  let value=aInt2[3].value;
                  initC = value
                  // console.log(initC)
                  cube.setColorChar(value)
                };
                //还原
                aInt2[5].onclick=function(){
                  // let vm = this
                  // console.log(initC)
                    axios.post('/apis/operation',qs.stringify({
                        "initC": initC
                    })).then(response => {
                        console.log(response.data)
                        if(response.data.indexOf("Error") == -1){
                          cube.turn3s(response.data)
                        }else{
                          tt.$alert('此次输入为非法输入! 请重新输入。', '提示', {
                            confirmButtonText: '确定',
                            // callback: action => {
                            //   this.$message({
                            //     type: 'info',
                            //     message: `action: ${ action }`
                            //   });
                            // }
                          });
                        }
                    }).catch(e => {
                        this.error.push(e)
                    })
                };
            }
        }
    }
</script>

<style scoped>

</style>
