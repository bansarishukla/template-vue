<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="cart">
          <div class="cart-body">
            <p style="font-size: 20px;" class="pull-left">
              Admin Dashboard
              <span style="font-size: 10px;">hello everyone</span>
            </p>
            <!-- <ul class="navbar-nav">
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link text-secondary pull-right"
                  href="#"
                >
                  Dashboard
                </router-link>
                <router-link
                  to="/"
                  class="nav-link text-secondary pull-right"
                  href="#"
                >
                  Home
                </router-link>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button
              type="button"
              class="btn button-align pull-right"
              style="background: #ff6a5d;"
            >
              Daily Income
            </button>
          </div>
          <div class="card-body">
            <p class="doller">$1,3012</p>
            <p class="income">
              Daily Income
              <span class="pull-right" style="color: #ff6a5d;">53%</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button
              type="button"
              class="btn button-align pull-right"
              style="background: #4caae9;"
            >
              Weekly Income
            </button>
          </div>
          <div class="card-body">
            <p class="doller">$5,534</p>
            <p class="income">
              Weekly Income
              <span class="pull-right" style="color: #4caae9;">65%</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button
              type="button"
              class="btn button-align pull-right"
              style="background: #eac55c;"
            >
              Monthly Income
            </button>
          </div>
          <div class="card-body">
            <p class="doller">$22,329</p>
            <p class="income">
              Monthly Income
              <span class="pull-right" style="color: #eac55c;">77%</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="pull-right">
            <button
              type="button"
              class="btn button-align pull-right"
              style="background: #1cb7a7;"
            >
              Annual Income
            </button>
          </div>
          <div class="card-body">
            <p class="doller">$268,188</p>
            <p class="income">
              Annual Income
              <span class="pull-right" style="color: #1cb7a7;">83%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row abc">
        <div class="col-xl-6 col-md-6">
          <div class="card">
            <div class="card-body">
              <p class="font-formation text-left">
                PROJECT STATISTICS<span class="pull-right">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </p>
              <BarChart
                :labels="[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July'
                ]"
                :values="[65, 59, 80, 81, 56, 55, 40]"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6">
          <div class="card">
            <div class="card-body">
              <p class="font-formation text-left">
                PRODUCT SALES<span class="pull-right">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </p>
              <LineChart
                :labels="[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July'
                ]"
                :values="[65, 59, 80, 81, 56, 55, 40]"
              />
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
              <p class="font-formation text-left">
                DAILY VISIT<span class="pull-right icons_formation">
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <div class="card-body">
              <DoughnutChart
                :labels="['January', 'February', 'March']"
                :values="[50, 30, 20]"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <p class="font-formation text-left">
                VISITOR GRAPH<span class="pull-right icons_formation">
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <div class="card-body">
              <PieChart
                :labels="['January', 'February', 'March']"
                :values="[30, 30, 40]"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <p class="font-formation text-left">
                RANDOM GRAPH<span class="pull-right icons_formation">
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <div class="card-body">
              <LineChartBottom
                :labels="['January', 'February', 'March']"
                :values="[65, 59, 80]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import LineChartBottom from "./LineChartBottom";
export default {
  components: {
    BarChart,
    LineChart,
    DoughnutChart,
    PieChart,
    LineChartBottom
  }
};
</script>
<style scoped>
h1 {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
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
.icons_formation {
  padding: 0 15px 0 0;
}
.card-header {
  background-color: white;
}
</style>
