class Faby {
  constructor(ctx, url, speedX, speedY, gravity, gravitySpeed, x, y) {
    this.ctx = ctx
    this.width = 70
    this.height = 50
    this.speedX = speedX
    this.speedY = speedY
    this.gravity = gravity
    this.gravitySpeed = gravitySpeed
    this.img = new Image()
    this.img.src = url
    this.x = x
    this.y = y
  }

  update() {
   

    console.log('hey')
  }


  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }


}