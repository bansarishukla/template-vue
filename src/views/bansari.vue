<template>
  <div class="container">
    <div class="row">

    </div>
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button type="button" class="btn button-align pull-right" style="background: #ff6a5d;">Daily Income</button>
          </div>
            <div class="card-body">
            <p class="doller">$1,3012</p>
            <p class="income">Daily Income<span class="pull-right" style="color: #ff6a5d;">53%</span></p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button type="button" class="btn button-align pull-right" style="background: #4caae9;">Weekly Income</button>
          </div>
          <div class="card-body">
            <p class="doller">$5,534</p>
            <p class="income">Weekly Income<span class="pull-right" style="color: #4caae9;">65%</span></p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button type="button" class="btn button-align pull-right" style="background: #eac55c;">Monthly Income</button>
          </div>
          <div class="card-body">
            <p class="doller">$22,329</p>
            <p class="income">Monthly Income<span class="pull-right" style="color: #eac55c;">77%</span></p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button type="button" class="btn button-align pull-right" style="background: #1cb7a7;">Annual Income</button>
          </div>
          <div class="card-body">
            <p class="doller">$268,188</p>
            <p class="income">Annual Income<span class="pull-right" style="color: #1cb7a7;">83%</span></p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row abc">
      <div class="col-xl-6 col-md-6">
        <div class="card">
          <div class="card-body">
            <p class="font-formation text-left">PROJECT STATISTICS<span class="pull-right"><i class="fa fa-times" aria-hidden="true"></i></span></p>
            <chartjs-doughnut :labels="labels" :datasets="datasets" :option="option"></chartjs-doughnut>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-6">
        <div class="card">
          <div class="card-body">
            <p class= "font-formation text-left">PRODUCT SALES<span class="pull-right"><i class="fa fa-times" aria-hidden="true"></i></span></p>
            <ul>
              <li v-for="skill in skills">
              <div class="lang text-muted">{{skill.lang}}</div>
                <div class="bar">
                  <div class="progress" v-bind:style = "{'background':skill.color, 'width':skill.percent+'%'}"></div>
                  <span class="percent">{{skill.percent}}%</span>
               </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <p class="font-formation text-left">DAILY VISIT<span class="pull-right space1">
            <i class="fa fa-refresh space1" aria-hidden="true"></i>
            <i class="fa fa-caret-down space1" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i></span></p>
          </div>
          <div class="card-body">
            <chartjs-line :labels="labels" :datasets="datasets" :option="{scales:{yAxes:[{ticks:{beginAtZero:true}}]}}"></chartjs-line>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <p class="font-formation text-left">VISITOR GRAPH<span class="pull-right space1">
            <i class="fa fa-refresh space1" aria-hidden="true"></i>
            <i class="fa fa-caret-down space1" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i></span></p>
          </div>
          <div class="card-body">
            <chartjs-line v-bind:labels="labels"
              :datasets="datasets"
              :option="{scales:{yAxes:[{ticks:{beginAtZero:true}}]}}">
            </chartjs-line>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <p class="font-formation text-left">RANDOM GRAPH<span class="pull-right space1">
            <i class="fa fa-refresh space1" aria-hidden="true"></i>
            <i class="fa fa-caret-down space1" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i></span></p>
          </div>
          <div class="card-body">
            <chartjs-bar :labels="labels" :datasets="datasets"
              :option="{scales:{yAxes:[{ticks:{beginAtZero:true}}]}}">
            </chartjs-bar>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        labels: ["Apple", "Banana", "Grapes"],
        datasets: [
          {
            data: [20,30,50],
            borderWidth: 0,
            backgroundColor:[ "#A4D0A0", "yellow", "#b3e6ff"]
          }
        ],
        skills: [
          { lang:"Apple", percent:90, color:"#ec407a"	},
          { lang:"Banana", percent:76, color:"#f4511e" },
          { lang:"Grapes", percent:87, color:"#388e3c" }
        ],
        option: {
          title: {
            display: true,
            position: "bottom",
            text: "Fruits"
          },
        }
      };
    },
  };
</script>
<style scoped>
h1 {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
.data-list {
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0 0 0 0;
  margin: 40px 0 0 0;
}
.data-item {
  display: flex;
  position: relative;
  background: white;;
  padding: 20px;
  margin: 20px 20px;
  flex-direction: column;
  text-align: center;
  width: 100%;
}
.button-align {
  display: flex;
  justify-content: flex-end;
  padding: 0 0 0 0;
  width: fit-content;
  font-size: 15px;
  border-radius: 0px;
  margin: 10px 0 0 0;
  color: white;
}
.doller {
  text-align: left;
  font-size: 25px;
  color: #929292;
  padding: 0px;
}
.income {
  text-align: left;
  color: #bbbbbb;

}
.aaa {
  background-color: white;
}
.bbb {
  padding: 0 0 0 0;
  margin: 0 0 0 18px;
}
.fa {
  color: #dcdcdf;
}
.font-formation {
  font-size: 15px;
  color: #939393;
  padding: 0 0 0 0;
  font-weight: bold;
}
.container {
  padding: 20px 0 0 0;
}
.lang {
	margin: 5px;
	font-size: 20px;
}
.bar {
	width: 100%;
	background: #dfdfdf;
	overflow: hidden;
	padding: 1px;
}
.progress {
	float: left;
	padding: 9px;
}
.percent {
	float: right;
	font-weight: 600;
	height: 10px;
	line-height: 20px;
}
ul li{
	list-style-type: none;
	padding: 10px;
}
.space1 {
  padding: 0 15px 0 0;
}
.card-header {
  background-color: white;
}
</style>
