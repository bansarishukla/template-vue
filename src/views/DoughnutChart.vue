<template>
  <div class="graph-container">
    <canvas id="graph" ref="graph"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    labels: {
      type: Array,
      require: true,
      default: Array
    },
    values: {
      type: Array,
      require: true,
      default: Array
    }
  },

  mounted() {
    let context = this.$refs.graph.getContext("2d");
    let options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    };

    let data = {
      labels: this.labels,
      datasets: [
        {
          backgroundColor: ["#A4D0A0", "yellow", "#b3e6ff"],
          borderWidth: 1,
          data: this.values
        }
      ]
    };

    this.myDoughnutChart = new Chart(context, {
      type: "doughnut",
      data: data,
      options: options
    });
  },

  beforeDestroy() {
    this.myDoughnutChart.destroy();
  }
};
</script>

<style scoped>
.graph-container {
  height: 300px;
}
</style>
