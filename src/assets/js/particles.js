/**
 * 粒子背景效果
 */
export default class ParticleBackground {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationFrame = null;
    
    // 默认配置
    this.options = {
      particleCount: 100,
      particleColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.1)',
      particleSize: 2,
      lineWidth: 0.5,
      speed: 0.5,
      proximity: 100,
      ...options
    };
    
    this.init();
  }
  
  init() {
    // 设置画布大小
    this.setCanvasSize();
    
    // 创建粒子
    this.createParticles();
    
    // 开始动画
    this.animate();
    
    // 监听窗口大小变化
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  setCanvasSize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  
  createParticles() {
    this.particles = [];
    
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: Math.random() * this.options.speed * 2 - this.options.speed,
        vy: Math.random() * this.options.speed * 2 - this.options.speed,
        size: Math.random() * this.options.particleSize + 1,
        color: this.options.particleColor
      });
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 更新和绘制粒子
    this.updateParticles();
    
    // 绘制连接线
    this.drawLines();
    
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      // 更新位置
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // 边界检查
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx = -particle.vx;
      }
      
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy = -particle.vy;
      }
      
      // 绘制粒子
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.fill();
    });
  }
  
  drawLines() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.options.proximity) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = this.options.lineColor;
          this.ctx.lineWidth = this.options.lineWidth;
          this.ctx.stroke();
        }
      }
    }
  }
  
  handleResize() {
    this.setCanvasSize();
    this.createParticles();
  }
  
  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
}