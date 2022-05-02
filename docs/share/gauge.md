---
sidebar: auto
---

# canvas自定义仪表盘

- [x] 刻度线及刻度值
- [x] 当前值显示
- [x] 任意起始终止角度
- [ ] 当前值动画

```js
class Gauge {
	constructor(ctx, opt) {
		this.ctx = ctx
		this.width = opt.width
		this.min = opt.min
		this.max = opt.max
		this.curValue = opt.value
		this.unit = opt.unit

		this.tickLength = this.max - this.min
		this.x = this.width / 2
		this.y = this.width / 2
		this.radius = this.width / 2

		// 轨道
		this.trackLineWidth = 10
		this.trackRadius = this.radius - this.trackLineWidth / 2

		this.draw()

	}
	draw() {
		this.ctx.clearRect(0, 0, this.radius, this.radius)
		// 将坐标中心点移动到圆心位置
		this.ctx.translate(this.radius, this.radius)
		this.drawTrack()
		this.drawProgress()
		this.drawTick()
		this.drawTickLine()

		this.ctx.draw()
	}
	drawTrack() {
		this.ctx.lineWidth = this.trackLineWidth
		this.ctx.strokeStyle = '#ddd'
		this.ctx.arc(0, 0, this.trackRadius, this.degToRad(135), this.degToRad(45))

		// 中间文本
		this.ctx.fillStyle = '#FFAB91'
		this.ctx.textAlign = 'center'
		this.ctx.font = "34px serif"
		this.ctx.fillText(`${this.curValue}${this.unit}`, 0, 0)

		this.ctx.stroke()
	}
	drawProgress() {
		const curValueRad = this.getCurValueRad()
		this.ctx.beginPath()
		this.ctx.lineWidth = this.trackLineWidth
		this.ctx.strokeStyle = '#FD7347'
		// 终点角度是动态的
		this.ctx.arc(0, 0, this.trackRadius, this.degToRad(135), curValueRad)
		this.ctx.stroke()

	}
	drawTick() {
		// 不可是使用旋转，否则文字也会旋转
		let deg = this.degToRad(135)
		for (let i = this.min; i <= this.max; i++) {
			this.ctx.lineWidth = 1
			this.ctx.strokeStyle = '#999'
			this.ctx.beginPath()
			// 刻度起点
			let x0 = (this.radius - this.trackLineWidth - 2) * Math.cos(deg)
			let y0 = (this.radius - this.trackLineWidth - 2) * Math.sin(deg)
			// 刻度终点
			var x1 = (this.radius - this.trackLineWidth - 8) * Math.cos(deg)
			var y1 = (this.radius - this.trackLineWidth - 8) * Math.sin(deg)
			this.ctx.moveTo(x0, y0)
			this.ctx.lineTo(x1, y1)
			deg += this.tickRad
			this.ctx.stroke()
		}

	}
	drawTickLine() {
		let deg = this.degToRad(135)
		for (let i = this.min; i <= this.max; i++) {
			let x = (this.radius - this.trackLineWidth - 20) * Math.cos(deg)
			let y = (this.radius - this.trackLineWidth - 20) * Math.sin(deg)
			deg += this.tickRad
			this.ctx.font = '12px serif'
			this.ctx.fillStyle = '#999'
			// 不设置会与tick错位
			this.ctx.textBaseline = 'middle'
			this.ctx.fillText(i, x, y)
		}

	}
	// 角度转化为弧度
	degToRad(deg) {
		return deg * Math.PI / 180
	}
	// 当前值的弧度
	getCurValueRad() {
		// 每个刻度的弧度，圆弧开口角度： 360-90 = 270
		this.tickRad = this.degToRad(270) / this.tickLength
		// 超出
		if (this.curValue > this.max) {
			return (this.max - this.min) * this.tickRad + 3 / 4 * Math.PI
		}
		return (this.curValue - this.min) * this.tickRad + 3 / 4 * Math.PI
	}
}

export default Gauge

```