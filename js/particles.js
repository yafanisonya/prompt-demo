class ParticleBackground {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('particleBackground'),
            alpha: true
        });
        
        this.particles = [];
        this.init();
    }

    init() {
        // 设置渲染器
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        // 设置相机位置
        this.camera.position.z = 30;

        // 创建粒子
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for(let i = 0; i < particleCount * 3; i += 3) {
            // 随机位置
            positions[i] = (Math.random() - 0.5) * 100;
            positions[i + 1] = (Math.random() - 0.5) * 100;
            positions[i + 2] = (Math.random() - 0.5) * 100;
            
            // 蓝色系渐变
            colors[i] = 0.2 + Math.random() * 0.2;  // R
            colors[i + 1] = 0.4 + Math.random() * 0.2;  // G
            colors[i + 2] = 0.8 + Math.random() * 0.2;  // B
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        this.scene.add(particleSystem);
        this.particles.push(particleSystem);

        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // 粒子旋转效果
        this.particles.forEach(particle => {
            particle.rotation.x += 0.0005;
            particle.rotation.y += 0.0005;
        });

        this.renderer.render(this.scene, this.camera);
    }
} 