function cloud () {
    Cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
. . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 c 1 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 c 1 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 c 1 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, 50, 0)
}
function hero () {
    Hero = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c 1 1 c 
f f c c . . . . . . f c 1 1 c . 
f c f c . . . . . . f 1 c c c . 
f f f c c . c c . f c 1 1 c c . 
f f c 3 c c 3 c c f 1 c 1 1 c . 
f f 1 3 1 c 3 1 c f 1 c c 1 c . 
. c 1 1 1 1 1 1 c 1 1 c c c . . 
. c f 1 1 1 f 1 1 c c c c . . . 
c 1 1 1 1 1 1 1 1 1 c c . . . . 
c 1 c 1 1 1 c 1 1 1 1 f . . . . 
f 1 1 f f f 1 1 1 1 1 f c . . . 
f 1 1 1 1 1 1 1 1 1 1 f c c . . 
. f 1 1 1 1 1 1 1 1 c f . . . . 
. . f 1 1 1 1 1 1 c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
    Hero.setPosition(126, 89)
}
function raindrop () {
    Raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 1 9 . . . . 
. . . . . 9 9 9 9 1 1 9 . . . . 
. . . . . 9 9 9 1 1 1 9 . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Cloud, 50, 100)
    Raindrop.y += 3
    Raindrop.x += Math.randomRange(0, 10)
}
function score () {
    info.changeScoreBy(1)
}
function ball () {
    Ball = sprites.create(img`
. . . . . c c c c . . . . . . . 
. . . . c 1 1 1 1 c . . . . . . 
. . . . c 1 1 1 1 1 c c . . . . 
. . . . c 1 1 1 1 1 1 1 c . . . 
. . . c 1 1 1 1 1 1 1 1 1 c . . 
. . . c 1 1 1 1 1 1 1 1 1 c . . 
. . c c 1 1 1 1 1 1 1 1 1 c . . 
. c 1 1 1 1 1 1 1 1 1 1 1 1 c . 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
. c 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
. . c c c c c 1 1 1 1 1 1 1 c . 
. . . . . . c 1 1 1 1 1 1 1 c . 
. . . . . . . c 1 1 1 1 c c . . 
. . . . . . . . c c c c . . . . 
`, SpriteKind.Player)
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 7 7 . 
. . . . . . . . . . . . 7 7 7 7 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . 5 5 5 5 5 5 
. . . . . . . . 5 5 5 5 5 5 5 5 
. . . . . . . 5 5 5 5 5 5 5 5 . 
. . . . . . 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 7 5 5 5 5 5 5 . . . . . . 
. . 7 7 5 5 5 5 . . . . . . . . 
. . 7 7 5 5 5 . . . . . . . . . 
`, Hero, 0, -50)
})
let projectile: Sprite = null
let Ball: Sprite = null
let Raindrop: Sprite = null
let Hero: Sprite = null
let Cloud: Sprite = null
hero()
score()
cloud()
raindrop()
game.onUpdateInterval(1000, function () {
	
})
