import platform from '../images/platform.png'
import platformSmallTall from '../images/platformSmallTall.png'
import hills from '../images/hills.png'
import background from '../images/background.png'
import ramp from '../images/ramp.png'
import tree from '../images/tree.png'
import spriteDeadLeft from '../images/DeadLeft.png'
import spriteDeadRight from '../images/DeadRight.png'
import spriteIdleLeft from '../images/IdleLeft.png'
import spriteIdleRight from '../images/IdleRight.png'
import spriteJumpRight from '../images/JumpRight.png'
import spriteJumpLeft from '../images/JumpLeft.png'
import spriteRunRight from '../images/RunRight.png'
import spriteRunLeft from '../images/RunLeft.png'
import spriteWalkRight from '../images/WalkRight.png'
import spriteWalkLeft from '../images/WalkLeft.png'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1.5;

class Player {
    constructor() {
        this.speed = 10;
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 163.3;
        this.height = 150;

        this.image = createImage(spriteIdleRight)
    }

    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            614,
            466,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }
        else
        {
            this.velocity.y = 0;
        }
    }
}

class Platform
{
    constructor({ x, y, image }) {
        this.position = { x, y };

        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw()
    {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject
{
    constructor({ x, y, image }) {
        this.position = { x, y };

        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

function createImage(imageSrc)
{
    const image = new Image();
    image.src = imageSrc;
    return image;
}

const player = new Player();

const platformImage = createImage(platform);
const platformSmallTallImage = createImage(platformSmallTall);

const platforms = [
,
    new Platform({
        x: 1000, y: canvas.height - 230, image: platformImage
    }),
    //new Platform({
    //    x: 1000, y: canvas.height - 230, image: platformImage
    //}),
    new Platform({
        x: -1, y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: platformImage.width - 3, y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 2 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 3 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 4 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 5 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 6 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 7 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 8 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 9 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 10 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 11 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 12 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 13 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 14 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 15 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 16 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 17 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 18 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 19 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 20 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 21 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 22 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 23 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 24 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 25 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 26 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
    new Platform({
        x: 27 * (platformImage.width - 3), y: canvas.height - 120, image: platformImage
    }),
];

const genericObjects = [
    new GenericObject({
        x: 0,
        y: 0,
        image: createImage(background)
    }),
    new GenericObject({
        x: 0,
        y: canvas.height - 700,
        image: createImage(hills)
    })
]

const keys = { right: { pressed: false }, left: { pressed: false } };

let scrollOffset = 0;

function animate() {
    requestAnimationFrame(animate);

    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    genericObjects.forEach((genericObject) => {
        genericObject.draw()
    });

    // Check for platform collision before updating player position
    platforms.forEach((platform) => {
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }
    })

    platforms.forEach((platform) => {
        platform.draw()
    });

    player.update();

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    } else if ((keys.left.pressed && player.position.x > 100)
        || keys.left.pressed && scrollOffset === 0
        && player.position.x > 0) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += player.speed;
            platforms.forEach(platform => {
                platform.position.x -= player.speed;
            });
            genericObjects.forEach(genericObject => {
                genericObject.position.x -= player.speed * 0.66
            });
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed;
            platforms.forEach(platform => {
                platform.position.x += player.speed
            });
            genericObjects.forEach(genericObject => {
                genericObject.position.x += player.speed * 0.66
            });
        }
    }

    if (scrollOffset > 2000) {
        console.log("you win");
    }
}

animate();

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left');
            keys.left.pressed = true;
            break;
        case 'd':
            console.log('right');
            keys.right.pressed = true;
            break;
        case 'w':
            console.log('up');
            player.velocity.y -= 25;
            break;
        case 's':
            console.log('down');
            break;
    }
});

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left');
            keys.left.pressed = false;
            break;
        case 'd':
            console.log('right');
            keys.right.pressed = false;
            break;
        case 'w':
            console.log('up');
            break;
        case 's':
            console.log('down');
            break;
    }
});

