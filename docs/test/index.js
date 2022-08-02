let canvas = document.getElementById('canvas')
let canvas_width = canvas.width
let ctx = canvas.getContext('2d')

// 角度 -> 弧度
let rad = deg => (Math.PI * deg) / 180

class Gauge {
    constructor() {
        this.ctx = ctx
        this.width = canvas_width
        this.track_radius = this.width / 2
        this.track_width = 20
        this.start_angle = rad(135)
        this.end_angle = rad(45)
        this.current_value = 5

        this.max = 10
        this.min = 0
        this.tick_line_width = 10
        this.tick_rad = (2 * Math.PI - this.start_angle + this.end_angle) / (this.max - this.min)

        console.log(this)
        this.draw()
    }
    draw() {
        // 将坐标轴的圆点平移至canvas中心
        this.ctx.translate(this.track_radius, this.track_radius)
        this.drawTrack()
        this.drawProgress()
        this.drawPointer()
        this.drawTickLine()
        this.drawTickText()
    }
    // 绘制轨道
    drawTrack() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.lineWidth = this.track_width
        this.ctx.strokeStyle = '#F1F1F1'
        let track_radius = this.track_radius - this.track_width / 2
        this.ctx.arc(0, 0, track_radius, this.start_angle, this.end_angle)
        this.ctx.stroke()
        this.ctx.restore()
    }
    // 绘制进度圆
    drawProgress() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.lineWidth = this.track_width
        this.ctx.strokeStyle = '#f58220'
        let progress_radius = this.track_radius - this.track_width / 2
        this.ctx.arc(0, 0, progress_radius, this.start_angle, Math.PI)
        this.ctx.stroke()
        this.ctx.restore()
    }
    // 绘制刻度线
    drawTickLine() {
        let deg = this.start_angle
        for (let i = this.min; i <= this.max; i++) {
            this.ctx.save()
            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = '#999'
            this.ctx.beginPath()
            // 刻度起点
            let x0 = (this.track_radius - this.track_width - 2) * Math.cos(deg)
            let y0 = (this.track_radius - this.track_width - 2) * Math.sin(deg)
            // 刻度终点
            let x1 = (this.track_radius - this.track_width - 20) * Math.cos(deg)
            let y1 = (this.track_radius - this.track_width - 20) * Math.sin(deg)
            this.ctx.moveTo(x0, y0)
            this.ctx.lineTo(x1, y1)
            deg += this.tick_rad
            this.ctx.stroke()
            this.ctx.restore()
        }
    }
    // 绘制圆点
    drawPointer() {
        let pointer_radius = 10

        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.fillStyle = '#fff'
        this.ctx.arc(-(this.track_radius - 10), 0, pointer_radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.restore()
    }
    // 绘制刻度值
    drawTickText() {
        let deg = this.start_angle
        for (let i = this.min; i <= this.max; i++) {
            this.ctx.save()
            let x = (this.track_radius - this.track_width - 40) * Math.cos(deg)
            let y = (this.track_radius - this.track_width - 40) * Math.sin(deg)
            deg += this.tick_rad
            this.ctx.font = '18px serif'
            this.ctx.fillStyle = '#999'
            this.ctx.textAlign = 'center'
            // 不设置会与tick错位
            this.ctx.textBaseline = 'middle'
            this.ctx.fillText(i, x, y)
            this.ctx.restore()
        }
    }
}

new Gauge()