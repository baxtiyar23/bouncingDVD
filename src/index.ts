let speed: number = 20;
let scale: number = 0.17;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let logoColor: string;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
    img: new Image() as HTMLImageElement,
};

(function main(): void {
    canvas = document.getElementById("tv-screen") as HTMLCanvasElement;
    ctx = canvas.getContext("2d")!;
    dvd.img.src = 'dvd-logo.png';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 3.5;

    pickColor();
    update();
})();

function update(): void {
    setTimeout(() => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        checkHitBox();
        update();
    }, speed);
}

function checkHitBox(): void {
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        pickColor();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        pickColor();
    }
}

function pickColor(): void {
    const r: number = Math.random() * (254 - 0) + 0;
    const g: number = Math.random() * (254 - 0) + 0;
    const b: number = Math.random() * (254 - 0) + 0;

    logoColor = `rgb(${r},${g},${b})`;
}
