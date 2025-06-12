/**
 * 中国地图图表类
 * 移植自 ChinaMapChart.vue
 */
class ChinaMapChart {
  constructor(containerId) {
    this.containerId = containerId;
    this.chartInstance = null;
    this.resizeHandler = this.handleResize.bind(this);
  }

  /**
   * 注册中国地图
   */
  registerChinaMap() {
    echarts.registerMap("china", chinaJSON);
  }

  /**
   * 初始化图表
   */
  initChart() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Container with id "${this.containerId}" not found`);
      return;
    }

    this.registerChinaMap();

    this.chartInstance = echarts.init(container);

    const iconRQ =
      "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII=";

    const data = [
      { name: "北京", value: [116.24, 39.55, 100] },
      { name: "深圳", value: [114.271522, 22.753644] },
      { name: "重庆", value: [106.54, 29.59] },
      { name: "浙江", value: [120.19, 30.26] },
      { name: "上海", value: [121.4648, 31.2891] },
    ];

    const option = {
      geo: {
        map: "china",
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"],
        layoutSize: "100%",
        itemStyle: {
          normal: {
            shadowColor: "#276fce",
            shadowOffsetX: 0,
            shadowOffsetY: 15,
            opacity: 0.5,
          },
          emphasis: { areaColor: "#276fce" },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              areaColor: "rgba(0, 10, 52, 1)",
              borderColor: "rgba(0, 10, 52, 1)",
              normal: { opacity: 0, label: { show: false, color: "#009cc9" } },
            },
            label: { show: false, color: "#FFFFFF", fontSize: 12 },
          },
        ],
      },
      series: [
        {
          type: "map",
          mapType: "china",
          aspectScale: 0.85,
          layoutCenter: ["50%", "50%"],
          layoutSize: "100%",
          zoom: 1,
          scaleLimit: { min: 1, max: 2 },
          itemStyle: {
            normal: {
              areaColor: "#0c274b",
              borderColor: "#1cccff",
              borderWidth: 1.5,
            },
            emphasis: { areaColor: "#02102b", label: { color: "#fff" } },
          },
        },
        {
          name: "首都",
          type: "scatter",
          coordinateSystem: "geo",
          data: [{ name: "首都", value: [116.24, 41.55, 100] }],
          symbol: iconRQ,
          symbolSize: 20,
          label: { normal: { show: false }, emphasis: { show: false } },
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          symbolSize: 10,
          rippleEffect: { period: 3, scale: 5, brushType: "fill" },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}",
              color: "#b3e2f2",
              fontWeight: "bold",
              fontSize: 16,
            },
          },
          data: data,
          itemStyle: {
            normal: {
              show: true,
              color: "#ff8003",
              shadowBlur: 20,
              shadowColor: "#fff",
            },
            emphasis: { areaColor: "#f00" },
          },
        },
      ],
    };

    this.chartInstance.setOption(option);
  }

  /**
   * 处理窗口大小变化
   */
  handleResize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }

  /**
   * 手动触发图表重绘
   */
  resize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }

  /**
   * 绑定事件监听器
   */
  bindEvents() {
    window.addEventListener("resize", this.resizeHandler);
  }

  /**
   * 解绑事件监听器
   */
  unbindEvents() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  /**
   * 销毁图表
   */
  destroy() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
    this.unbindEvents();
  }

  /**
   * 初始化方法 - 创建图表并绑定事件
   */
  init() {
    this.initChart();
    this.bindEvents();
  }
}

// 全局方式使用的便捷函数
function createChinaMapChart(containerId) {
  const chart = new ChinaMapChart(containerId);
  chart.init();
  return chart;
}
