/**
 * Renders a chart with the provided data
 * @param {typeof mockData} data - The data used to render the chart, should match the structure of mockData
 */
const renderChart = ({ data }) => {
  // 加盟商统计

  // 订单统计
  $("#order_count").text(data.order_count);
  $("#today_order").text(data.today_order);
  $("#yesterday_order").text(data.yesterday_order);
  $("#month_order").text(data.month_order);

  // 设备使用统计
  $("#device_use_count").text(data.device_use_count);
  $("#today_use_count").text(data.today_use_count);
  $("#yesterday_use_count").text(data.yesterday_use_count);

  // 会员统计
  $("#member_count").text(data.member_count);

  $("#order_list").html(
    data.order_data
      .map(
        (order) => `
    <li>
      <p>${order.mobile} ${order.goods_title} ¥${order.price}元</p>
    </li>
  `
      )
      .join()
  );

  createChinaMapChart("china_map");
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

$(document).ready(() => {
  initializeCharts();
});
