<template>
    <div style="background: #eeeeee;">

      <el-row>
          <el-row type="flex" justify="center">
              <el-col :span="12">
                  <div style="margin:120px auto 80px;" id="mofang" ></div>
              </el-col>
              <el-col :span="12" style="margin-top: 70px;margin-left: 10px">

                <!--上部分-->
                <el-row type="flex">
                    <div>
                      <el-col style="margin-left: 155px">
                        <a id="up" class="faces" style="margin:0px 0px 0px 0px;">
                          <el-row type="flex" justify="center">
                            <input type="text" maxlength="1" value="R">
                            <input type="text" maxlength="1" value="R">
                            <input type="text" maxlength="1" value="R">
                          </el-row>
                          <el-row type="flex" justify="center">
                            <input type="text" maxlength="1" value="R">
                            <input type="text" maxlength="1" value="R">
                            <input type="text" maxlength="1" value="R">
                          </el-row>
                          <el-row type="flex" justify="center">
                            <input type="text" maxlength="1" value="R">
                            <input type="text" maxlength="1" value="R">
                            <input type="text" maxlength="1" value="R">
                          </el-row>
                        </a>
                      </el-col>
                    </div>
                </el-row>

                <!--中部分-->
                <el-row type="flex" justify="center">
                    <div>
                        <el-col :span="6">
                          <div>
                            <a id="left" class="faces">
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="U">
                                <input type="text" maxlength="1" value="U">
                                <input type="text" maxlength="1" value="U">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="U">
                                <input type="text" maxlength="1" value="U">
                                <input type="text" maxlength="1" value="U">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="U">
                                <input type="text" maxlength="1" value="U">
                                <input type="text" maxlength="1" value="U">
                              </el-row>
                            </a>
                          </div>
                        </el-col>
                        <el-col :span="6" >
                          <div>
                            <a id="front" class="faces" >
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="L">
                                <input type="text" maxlength="1" value="L">
                                <input type="text" maxlength="1" value="L">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="L">
                                <input type="text" maxlength="1" value="L">
                                <input type="text" maxlength="1" value="L">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="L">
                                <input type="text" maxlength="1" value="L">
                                <input type="text" maxlength="1" value="L">
                              </el-row>
                            </a>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div>
                            <a id="right" class="faces">
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="F">
                                <input type="text" maxlength="1" value="F">
                                <input type="text" maxlength="1" value="F">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="F">
                                <input type="text" maxlength="1" value="F">
                                <input type="text" maxlength="1" value="F">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="F">
                                <input type="text" maxlength="1" value="F">
                                <input type="text" maxlength="1" value="F">
                              </el-row>
                            </a>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div>
                            <a id="back" class="faces">
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="D">
                                <input type="text" maxlength="1" value="D">
                                <input type="text" maxlength="1" value="D">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="D">
                                <input type="text" maxlength="1" value="D">
                                <input type="text" maxlength="1" value="D">
                              </el-row>
                              <el-row type="flex" justify="center">
                                <input type="text" maxlength="1" value="D">
                                <input type="text" maxlength="1" value="D">
                                <input type="text" maxlength="1" value="D">
                              </el-row>
                            </a>
                          </div>
                        </el-col>
                    </div>
                </el-row>

                <!--下部分-->
                <el-row type="flex">
                  <div>
                    <el-col style="margin-left: 157px">
                      <a id="bottom" class="faces">
                        <el-row type="flex" justify="center">
                          <input type="text" maxlength="1" value="B">
                          <input type="text" maxlength="1" value="B">
                          <input type="text" maxlength="1" value="B">
                        </el-row>
                        <el-row type="flex" justify="center">
                          <input type="text" maxlength="1" value="B">
                          <input type="text" maxlength="1" value="B">
                          <input type="text" maxlength="1" value="B">
                        </el-row>
                        <el-row type="flex" justify="center">
                          <input type="text" maxlength="1" value="B">
                          <input type="text" maxlength="1" value="B">
                          <input type="text" maxlength="1" value="B">
                        </el-row>
                      </a>
                    </el-col>
                  </div>
                </el-row>
              </el-col>
          </el-row>


          <a style="width:50px;"></a>
          <div id="color_buttons">
            <button style="background-color:red;height: 20px"></button>
            <button style="background-color:orange;height: 20px"></button>
            <button style="background-color:yellow;height: 20px"></button>
            <button style="background-color:green;height: 20px"></button>
            <button style="background-color:blue;height: 20px"></button>
            <button style="background-color:#FFF;height: 20px"></button>
          </div>

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
              <!--<input type="text" style="margin-top:10px;" value="DRLUUBFBRBLURRLRUBLRDDFDLFUFUFFDBRDUBRUFLLFDDBFLUBLRBD">-->
              <input type="button" style="margin-top:10px" value="设置颜色"/>
              <input type="button" style="margin-top:10px" value="还原"/>
          </div>
      </el-row>



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
                aInt2[3].onclick=function(){
                  // let value=aInt2[3].value;
                  let colorType = ['yellow', '#fff', 'blue', 'green', 'red', 'orange'];
                  let arr = [];
                  let loc = 0;
                  let cc = 0;
                  let state
                  let tmp
                  let msg
                  // let color = ""
                  //构造涂色的字符串state
                  {

                     tmp = document.getElementById('up').getElementsByTagName('input');
                     state = tmp[0].value;
                    for (let i = 1; i < 9; i++) {
                      state = state + tmp[i].value;
                    }

                     tmp = document.getElementById('bottom').getElementsByTagName('input');
                    cc = 6;
                    while (cc < 9) {
                      state = state + tmp[cc].value;
                      cc++;
                    }
                    cc = 3;
                    while (cc < 6) {
                      state = state + tmp[cc].value;
                      cc++;
                    }
                    cc = 0;
                    while (cc < 3) {
                      state = state + tmp[cc].value;
                      cc++;
                    }

                     tmp = document.getElementById('left').getElementsByTagName('input')
                    cc = 0;
                    while (cc < 7) {
                      state = state + tmp[cc].value;
                      cc += 3;
                    }
                    cc = 1;
                    while (cc < 8) {
                      state = state + tmp[cc].value;
                      cc += 3;
                    }
                    cc = 2;
                    while (cc < 9) {
                      state = state + tmp[cc].value;
                      cc += 3;
                    }

                     tmp = document.getElementById('right').getElementsByTagName('input')
                    cc = 2;
                    while (cc < 9) {
                      state = state + tmp[cc].value;
                      cc += 3;
                    }
                    cc = 1;
                    while (cc < 8) {
                      state = state + tmp[cc].value;
                      cc += 3;
                    }
                    cc = 0;
                    while (cc < 7) {
                      state = state + tmp[cc].value;
                      cc += 3;
                    }

                     tmp = document.getElementById('front').getElementsByTagName('input')
                    for (let i = 0; i < 9; i++) {
                      state = state + tmp[i].value;
                    }

                     tmp = document.getElementById('back').getElementsByTagName('input')
                    cc = 2;
                    while (cc > -1) {
                      state = state + tmp[cc].value;
                      cc--;
                    }
                    cc = 5;
                    while (cc > 2) {
                      state = state + tmp[cc].value;
                      cc--;
                    }
                    cc = 8;
                    while (cc > 5) {
                      state = state + tmp[cc].value;
                      cc--;
                    }
                  }
                  //构造传入后端的字符串msg
                  {
                    // let tmp;
                     tmp = document.getElementById('up').getElementsByTagName('input');
                     msg = tmp[0].value;
                    for (let i = 1; i < 9; i++) {
                      msg = msg + tmp[i].value;
                    }

                     tmp = document.getElementById('right').getElementsByTagName('input');
                    for (let i = 0; i < 9; i++) {
                      msg = msg + tmp[i].value;
                    }

                     tmp = document.getElementById('front').getElementsByTagName('input');
                    for (let i = 0; i < 9; i++) {
                      msg = msg + tmp[i].value;
                    }

                     tmp = document.getElementById('bottom').getElementsByTagName('input');
                    for (let i = 0; i < 9; i++) {
                      msg = msg + tmp[i].value;
                    }

                     tmp = document.getElementById('left').getElementsByTagName('input');
                    for (let i = 0; i < 9; i++) {
                      msg = msg + tmp[i].value;
                    }

                     tmp = document.getElementById('back').getElementsByTagName('input');
                    for (let i = 0; i < 9; i++) {
                      msg = msg + tmp[i].value;
                    }
                  }

                  //state是要用作涂色的字符串，msg才是传入后端的字符串
                  let color = state
                  console.log(state)
                  console.log(color)
                  for (let i = 0; i < 6; i++) {
                    let sub = color.substr(i * 9, 9);//截取从i*9开始的连续9个字符
                    let subArr = [];
                    for (let j = 0; j < 9; j++) {
                      switch (sub[j]) {
                        case "U"://yellow
                          subArr.push(colorType[0]);//如果是第0种颜色，则将white填入
                          break;
                        case "R"://white
                          subArr.push(colorType[1]);
                          break;
                        case "F"://blue
                          subArr.push(colorType[2]);
                          break;
                        case "D"://green
                          subArr.push(colorType[3]);
                          break;
                        case "L"://red
                          subArr.push(colorType[4]);
                          break;
                        case "B"://orange
                          subArr.push(colorType[5]);
                          break;
                      }
                    }
                    arr.push(subArr);
                  }
                  cube.setColor(arr);
                  console.log("设置颜色")
                  initC = msg
                  console.log(msg)
                  // console.log(arr)
                };






                //还原
                aInt2[4].onclick=function(){
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




              //点击块，选择颜色
              {
                let tmp_div = document.getElementById('color_buttons').getElementsByTagName('button');
                let color_now = '#fff';
                let color_value = "R";
                tmp_div[0].onclick = function () {
                  color_now = "red";
                  color_value = "L";
                }
                tmp_div[1].onclick = function () {
                  color_now = "orange";
                  color_value = "B";
                }
                tmp_div[2].onclick = function () {
                  color_now = "yellow";
                  color_value = "U";
                }
                tmp_div[3].onclick = function () {
                  color_now = "green";
                  color_value = "D";
                }
                tmp_div[4].onclick = function () {
                  color_now = "blue";
                  color_value = "F";
                }
                tmp_div[5].onclick = function () {
                  color_now = "#fff";
                  color_value = "R";
                }
              }

              //给块上色
              {   //up
                {
                  let tmp_input_up = document.getElementById('up').getElementsByTagName('input');
                  tmp_input_up[0].onclick = function () {
                    tmp_input_up[0].value = color_value;
                    tmp_input_up[0].style.backgroundColor = color_now;
                  }
                  tmp_input_up[1].onclick = function () {
                    tmp_input_up[1].value = color_value;
                    tmp_input_up[1].style.backgroundColor = color_now;
                  }
                  tmp_input_up[2].onclick = function () {
                    tmp_input_up[2].value = color_value;
                    tmp_input_up[2].style.backgroundColor = color_now;
                  }
                  tmp_input_up[3].onclick = function () {
                    tmp_input_up[3].value = color_value;
                    tmp_input_up[3].style.backgroundColor = color_now;
                  }
                  tmp_input_up[4].onclick = function () {
                    tmp_input_up[4].value = color_value;
                    tmp_input_up[4].style.backgroundColor = color_now;
                  }
                  tmp_input_up[5].onclick = function () {
                    tmp_input_up[5].value = color_value;
                    tmp_input_up[5].style.backgroundColor = color_now;
                  }
                  tmp_input_up[6].onclick = function () {
                    tmp_input_up[6].value = color_value;
                    tmp_input_up[6].style.backgroundColor = color_now;
                  }
                  tmp_input_up[7].onclick = function () {
                    tmp_input_up[7].value = color_value;
                    tmp_input_up[7].style.backgroundColor = color_now;
                  }
                  tmp_input_up[8].onclick = function () {
                    tmp_input_up[8].value = color_value;
                    tmp_input_up[8].style.backgroundColor = color_now;
                  }
                }
                //left
                {
                  let tmp_input_left = document.getElementById('left').getElementsByTagName('input');
                  tmp_input_left[0].onclick = function () {
                    tmp_input_left[0].value = color_value;
                    tmp_input_left[0].style.backgroundColor = color_now;
                  }
                  tmp_input_left[1].onclick = function () {
                    tmp_input_left[1].value = color_value;
                    tmp_input_left[1].style.backgroundColor = color_now;
                  }
                  tmp_input_left[2].onclick = function () {
                    tmp_input_left[2].value = color_value;
                    tmp_input_left[2].style.backgroundColor = color_now;
                  }
                  tmp_input_left[3].onclick = function () {
                    tmp_input_left[3].value = color_value;
                    tmp_input_left[3].style.backgroundColor = color_now;
                  }
                  tmp_input_left[4].onclick = function () {
                    tmp_input_left[4].value = color_value;
                    tmp_input_left[4].style.backgroundColor = color_now;
                  }
                  tmp_input_left[5].onclick = function () {
                    tmp_input_left[5].value = color_value;
                    tmp_input_left[5].style.backgroundColor = color_now;
                  }
                  tmp_input_left[6].onclick = function () {
                    tmp_input_left[6].value = color_value;
                    tmp_input_left[6].style.backgroundColor = color_now;
                  }
                  tmp_input_left[7].onclick = function () {
                    tmp_input_left[7].value = color_value;
                    tmp_input_left[7].style.backgroundColor = color_now;
                  }
                  tmp_input_left[8].onclick = function () {
                    tmp_input_left[8].value = color_value;
                    tmp_input_left[8].style.backgroundColor = color_now;
                  }
                }
                //front
                {
                  let tmp_input_front = document.getElementById('front').getElementsByTagName('input');
                  tmp_input_front[0].onclick = function () {
                    tmp_input_front[0].value = color_value;
                    tmp_input_front[0].style.backgroundColor = color_now;
                  }
                  tmp_input_front[1].onclick = function () {
                    tmp_input_front[1].value = color_value;
                    tmp_input_front[1].style.backgroundColor = color_now;
                  }
                  tmp_input_front[2].onclick = function () {
                    tmp_input_front[2].value = color_value;
                    tmp_input_front[2].style.backgroundColor = color_now;
                  }
                  tmp_input_front[3].onclick = function () {
                    tmp_input_front[3].value = color_value;
                    tmp_input_front[3].style.backgroundColor = color_now;
                  }
                  tmp_input_front[4].onclick = function () {
                    tmp_input_front[4].value = color_value;
                    tmp_input_front[4].style.backgroundColor = color_now;
                  }
                  tmp_input_front[5].onclick = function () {
                    tmp_input_front[5].value = color_value;
                    tmp_input_front[5].style.backgroundColor = color_now;
                  }
                  tmp_input_front[6].onclick = function () {
                    tmp_input_front[6].value = color_value;
                    tmp_input_front[6].style.backgroundColor = color_now;
                  }
                  tmp_input_front[7].onclick = function () {
                    tmp_input_front[7].value = color_value;
                    tmp_input_front[7].style.backgroundColor = color_now;
                  }
                  tmp_input_front[8].onclick = function () {
                    tmp_input_front[8].value = color_value;
                    tmp_input_front[8].style.backgroundColor = color_now;
                  }
                }
                //right
                {
                  let tmp_input_right = document.getElementById('right').getElementsByTagName('input');
                  tmp_input_right[0].onclick = function () {
                    tmp_input_right[0].value = color_value;
                    tmp_input_right[0].style.backgroundColor = color_now;
                  }
                  tmp_input_right[1].onclick = function () {
                    tmp_input_right[1].value = color_value;
                    tmp_input_right[1].style.backgroundColor = color_now;
                  }
                  tmp_input_right[2].onclick = function () {
                    tmp_input_right[2].value = color_value;
                    tmp_input_right[2].style.backgroundColor = color_now;
                  }
                  tmp_input_right[3].onclick = function () {
                    tmp_input_right[3].value = color_value;
                    tmp_input_right[3].style.backgroundColor = color_now;
                  }
                  tmp_input_right[4].onclick = function () {
                    tmp_input_right[4].value = color_value;
                    tmp_input_right[4].style.backgroundColor = color_now;
                  }
                  tmp_input_right[5].onclick = function () {
                    tmp_input_right[5].value = color_value;
                    tmp_input_right[5].style.backgroundColor = color_now;
                  }
                  tmp_input_right[6].onclick = function () {
                    tmp_input_right[6].value = color_value;
                    tmp_input_right[6].style.backgroundColor = color_now;
                  }
                  tmp_input_right[7].onclick = function () {
                    tmp_input_right[7].value = color_value;
                    tmp_input_right[7].style.backgroundColor = color_now;
                  }
                  tmp_input_right[8].onclick = function () {
                    tmp_input_right[8].value = color_value;
                    tmp_input_right[8].style.backgroundColor = color_now;
                  }
                }
                //back
                {
                  let tmp_input_back = document.getElementById('back').getElementsByTagName('input');
                  tmp_input_back[0].onclick = function () {
                    tmp_input_back[0].value = color_value;
                    tmp_input_back[0].style.backgroundColor = color_now;
                  }
                  tmp_input_back[1].onclick = function () {
                    tmp_input_back[1].value = color_value;
                    tmp_input_back[1].style.backgroundColor = color_now;
                  }
                  tmp_input_back[2].onclick = function () {
                    tmp_input_back[2].value = color_value;
                    tmp_input_back[2].style.backgroundColor = color_now;
                  }
                  tmp_input_back[3].onclick = function () {
                    tmp_input_back[3].value = color_value;
                    tmp_input_back[3].style.backgroundColor = color_now;
                  }
                  tmp_input_back[4].onclick = function () {
                    tmp_input_back[4].value = color_value;
                    tmp_input_back[4].style.backgroundColor = color_now;
                  }
                  tmp_input_back[5].onclick = function () {
                    tmp_input_back[5].value = color_value;
                    tmp_input_back[5].style.backgroundColor = color_now;
                  }
                  tmp_input_back[6].onclick = function () {
                    tmp_input_back[6].value = color_value;
                    tmp_input_back[6].style.backgroundColor = color_now;
                  }
                  tmp_input_back[7].onclick = function () {
                    tmp_input_back[7].value = color_value;
                    tmp_input_back[7].style.backgroundColor = color_now;
                  }
                  tmp_input_back[8].onclick = function () {
                    tmp_input_back[8].value = color_value;
                    tmp_input_back[8].style.backgroundColor = color_now;
                  }
                }
                //bottom
                {
                  let tmp_input_bottom = document.getElementById('bottom').getElementsByTagName('input');
                  tmp_input_bottom[0].onclick = function () {
                    tmp_input_bottom[0].value = color_value;
                    tmp_input_bottom[0].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[1].onclick = function () {
                    tmp_input_bottom[1].value = color_value;
                    tmp_input_bottom[1].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[2].onclick = function () {
                    tmp_input_bottom[2].value = color_value;
                    tmp_input_bottom[2].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[3].onclick = function () {
                    tmp_input_bottom[3].value = color_value;
                    tmp_input_bottom[3].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[4].onclick = function () {
                    tmp_input_bottom[4].value = color_value;
                    tmp_input_bottom[4].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[5].onclick = function () {
                    tmp_input_bottom[5].value = color_value;
                    tmp_input_bottom[5].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[6].onclick = function () {
                    tmp_input_bottom[6].value = color_value;
                    tmp_input_bottom[6].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[7].onclick = function () {
                    tmp_input_bottom[7].value = color_value;
                    tmp_input_bottom[7].style.backgroundColor = color_now;
                  }
                  tmp_input_bottom[8].onclick = function () {
                    tmp_input_bottom[8].value = color_value;
                    tmp_input_bottom[8].style.backgroundColor = color_now;
                  }
                }
              }

            }
        }
    }
</script>

<style scoped>
  /*.faces input {*/
    /*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);*/
  /*}*/
  .faces input {
    height: 32px;
    width: 32px;
    margin: 1px;
    padding: 0px;
    border-width: 2px;
    border: 2px #CCCCCC;
    /*border-radius: 12px;*/
    background-color: #CCCCCC;
    text-align: center;
  }
</style>
