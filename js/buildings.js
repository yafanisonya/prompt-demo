class BuildingMatrix {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('buildingMatrix'),
            alpha: true
        });
        
        this.buildings = [];
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        this.camera.position.z = 15;
        
        // 创建10x10建筑群
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                const height = 1 + Math.random() * 3;
                const geometry = new THREE.BoxGeometry(0.8, height, 0.8);
                const material = new THREE.MeshPhongMaterial({
                    color: 0x2C5F9D,
                    transparent: true,
                    opacity: 0.8
                });
                
                const building = new THREE.Mesh(geometry, material);
                building.position.set(i * 1 - 4.5, height/2 - 2, j * 1 - 4.5);
                this.scene.add(building);
                this.buildings.push({
                    mesh: building,
                    targetHeight: height,
                    currentHeight: 0
                });
            }
        }

        // 添加环境光和平行光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);

        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // 建筑生长动画
        this.buildings.forEach(building => {
            if(building.currentHeight < building.targetHeight) {
                building.currentHeight += 0.02;
                building.mesh.scale.y = building.currentHeight;
            }
        });

        this.scene.rotation.y += 0.002;
        this.renderer.render(this.scene, this.camera);
    }
} 