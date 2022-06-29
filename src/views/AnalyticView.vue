<template>
	<div class="analytic-wrapper">
		<div class="analytic-wrapper__title">Аналитика</div>
		<div class="hello" ref="chartdiv">
		</div>
	</div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export default {
	name: "analytic-page",
	mounted() {
		let root = am5.Root.new(this.$refs.chartdiv);
		const myTheme = am5.Theme.new(root);
		myTheme.rule("Label").setAll({
			fill: am5.color(0x333333),
			fontSize: "14px"
		});

		root.setThemes([
			am5themes_Animated.new(root),
			myTheme
		]);
		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				panX: true,
				panY: true,
				wheelX: "panX",
				wheelY: "zoomX"
			})
		);
		am5.ease.linear;
		let xAxis = chart.xAxes.push(
			am5xy.GaplessDateAxis.new(root, {
				maxDeviation: 0.1,
				groupData: false,
				baseInterval: {
					timeUnit: "day",
					count: 1
				},
				renderer: am5xy.AxisRendererX.new(root, {
					minGridDistance: 50
				}),
				tooltip: am5.Tooltip.new(root, {})
			})
		);
		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				maxDeviation: 0.1,
				renderer: am5xy.AxisRendererY.new(root, {})
			})
		);
		let series = chart.series.push(
			am5xy.LineSeries.new(root, {
				minBulletDistance: 10,
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: "value",
				valueXField: "date",
				tooltip: am5.Tooltip.new(root, {
					pointerOrientation: "horizontal",
					labelText: "{valueY}"
				})
			})
		);
		series.data.setAll(this.datas);
		series.bullets.push(function () {
			return am5.Bullet.new(root, {
				sprite: am5.Circle.new(root, {
					radius: 5,
					fill: series.get("fill"),
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2
				})
			});
		});
		let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
			xAxis: xAxis
		}));
		cursor.lineY.set("visible", false);
		chart.set("scrollbarX", am5.Scrollbar.new(root, {
			orientation: "horizontal"
		}));
		series.appear(1000, 100);
		chart.appear(1000, 100);
	},
	data() {
		return {
			datas: [
				{ date: new Date(2020, 6, 1).getTime(), value: 213 },
				{ date: new Date(2020, 6, 2).getTime(), value: 249 },
				{ date: new Date(2020, 6, 3).getTime(), value: 179 },
				{ date: new Date(2020, 6, 4).getTime(), value: 170 },
				{ date: new Date(2020, 6, 5).getTime(), value: 184 },
				{ date: new Date(2020, 6, 6).getTime(), value: 202 },
				{ date: new Date(2020, 6, 7).getTime(), value: 198 },
				{ date: new Date(2020, 6, 8).getTime(), value: 168 },
				{ date: new Date(2020, 6, 9).getTime(), value: 176 },
				{ date: new Date(2020, 6, 10).getTime(), value: 171 },
				{ date: new Date(2020, 6, 11).getTime(), value: 190 },
				{ date: new Date(2020, 6, 12).getTime(), value: 154 },
				{ date: new Date(2020, 6, 13).getTime(), value: 246 },
				{ date: new Date(2020, 6, 14).getTime(), value: 250 },
				{ date: new Date(2020, 6, 14).getTime(), value: 250 },
				{ date: new Date(2020, 6, 15).getTime(), value: 227 },
				{ date: new Date(2020, 6, 16).getTime(), value: 140 },
				{ date: new Date(2020, 6, 17).getTime(), value: 170 },
				{ date: new Date(2020, 6, 18).getTime(), value: 125 },
				{ date: new Date(2020, 6, 19).getTime(), value: 106 },
				{ date: new Date(2020, 6, 20).getTime(), value: 207 },
				{ date: new Date(2020, 6, 21).getTime(), value: 222 },
				{ date: new Date(2020, 6, 22).getTime(), value: 198 },
				{ date: new Date(2020, 6, 23).getTime(), value: 204 },
				{ date: new Date(2020, 6, 24).getTime(), value: 213 },
				{ date: new Date(2020, 6, 25).getTime(), value: 145 },
				{ date: new Date(2020, 6, 26).getTime(), value: 166 },
				{ date: new Date(2020, 6, 27).getTime(), value: 163 },
				{ date: new Date(2020, 6, 28).getTime(), value: 135 },
				{ date: new Date(2020, 6, 29).getTime(), value: 45 },
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.analytic-wrapper__title {
	font-size: 28px;
	display: flex;
	justify-content: center;
	margin-top: 20px;
}

.hello {
	width: 100%;
	min-height: 500px;
}
</style>