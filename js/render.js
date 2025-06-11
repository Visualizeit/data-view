/**
 * Renders a chart with the provided data
 * @param {typeof mockData} data - The data used to render the chart, should match the structure of mockData
 */
const renderChart = ({ data }) => {
  $('#order_count').text(data.order_count);
};

const initializeCharts = () => {
  if (
    window.location.href.startsWith("http://localhost") ||
    window.location.href.startsWith("http://127.0.0.1")
  ) {
    renderChart(mockData);
  } else {
    const url =
      "https://meixi.nuws.cn/addons/yun_shop/api.php?route=plugin.angel-pen.open.visualization.index&i=1&certificate=LWNLpUdmCFoJQ5esmpGERS8bkLU2e3fm";

    $.getJSON(url, (data) => {
      renderChart(data);
    });
  }
};

initializeCharts();
