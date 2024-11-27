scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(_1234, sprites.castle.tileDarkGrass2)
    tiles.placeOnRandomTile(_4545, assets.tile`myTile`)
    tiles.placeOnRandomTile(_1111, assets.tile`myTile18`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_1234.vy == 0) {
        _1234.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    _1234,
    [img`
        . . . . . . 
        a a a a a a 
        a 9 f 9 f a 
        a f f f f a 
        a a a a a a 
        `,img`
        a a a a a a 
        a 9 f 9 f a 
        a f f f f a 
        a f f f f a 
        a a a a a a 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    _1234,
    [img`
        . . . . . . 
        a a a a a a 
        a f 9 f 9 a 
        a f f f f a 
        a a a a a a 
        `,img`
        a a a a a a 
        a f 9 f 9 a 
        a f f f f a 
        a f f f f a 
        a a a a a a 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(_1234)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    sprites.destroy(_1234)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    statusbar.value += 50
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(_1234, assets.tile`myTile27`)
    tiles.placeOnRandomTile(_1111, assets.tile`myTile28`)
    tiles.placeOnRandomTile(_4545, assets.tile`myTile13`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    _1111.setPosition(100, 1000)
    _4545.setPosition(-100, 1000)
    tiles.setCurrentTilemap(tilemap`level14`)
    tiles.placeOnRandomTile(_1234, assets.tile`myTile25`)
    pause(1000)
    tiles.placeOnRandomTile(_1111, sprites.castle.tileGrass2)
    tiles.placeOnRandomTile(_4545, sprites.castle.tileGrass2)
})
let statusbar: StatusBarSprite = null
let _1234: Sprite = null
let _4545: Sprite = null
let _1111: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
info.setLife(100)
effects.smiles.startScreenEffect(500)
_1111 = sprites.create(img`
    ......55..555..55..555........
    ......55..555..55..555........
    ......55..555..55..555........
    ......5555555555555555........
    ......5555555555555555........
    ......5555555555555555........
    ........ff222ff222ff..........
    ........ff222ff222ff..........
    ........ff222ff222ff..........
    ....ff..ffffffffffff..........
    ....ff..ffffffffffff..........
    ....cc....ffffffff....ffffff..
    ....cc....ffffffff....ffffff..
    ....cc....ffffffff....ffffff..
    ....ccbbbbccccccccbbbbff......
    ....ccbbbbccccccccbbbbff......
    ..........cccccccc....ff......
    ..........cccccccc....ff......
    ..........cccccccc....ff......
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Enemy)
_1234 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . a f 9 f 9 a . . . . . . . 
    . . . a f f f f a . . . . . . . 
    . . . a f f f f a . . . . . . . 
    . . . a a a a a a . . . . . . . 
    `, SpriteKind.Player)
_1111.follow(_1234, 80)
controller.moveSprite(_1234, 100, 0)
let myMinimap = minimap.minimap()
minimap.includeSprite(myMinimap, _1234)
if (_1111.vy == 0) {
    _1111.vy = -200
}
animation.runImageAnimation(
_1234,
[img`
    . . . . . . 
    a a a a a a 
    a f 9 f 9 a 
    a f f f f a 
    a a a a a a 
    `,img`
    a a a a a a 
    a f 9 f 9 a 
    a f f f f a 
    a f f f f a 
    a a a a a a 
    `],
200,
true
)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(_1234)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
_1234.ay = 450
statusbar.attachToSprite(_1234)
_4545 = sprites.create(img`
    ......55..555..55..555........
    ......55..555..55..555........
    ......55..555..55..555........
    ......5555555555555555........
    ......5555555555555555........
    ......5555555555555555........
    ........ff222ff222ff..........
    ........ff222ff222ff..........
    ........ff222ff222ff..........
    ....ff..ffffffffffff..........
    ....ff..ffffffffffff..........
    ....cc....ffffffff....ffffff..
    ....cc....ffffffff....ffffff..
    ....cc....ffffffff....ffffff..
    ....ccbbbbccccccccbbbbff......
    ....ccbbbbccccccccbbbbff......
    ..........cccccccc....ff......
    ..........cccccccc....ff......
    ..........cccccccc....ff......
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..........fff..fff............
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(_4545, assets.tile`myTile13`)
_4545.follow(_1234, 80)
tiles.placeOnRandomTile(_1234, assets.tile`myTile28`)
tiles.placeOnRandomTile(_1111, assets.tile`myTile27`)
_4545.ay = 450
_1111.ay = 450
pause(5000)
story.spriteSayText(_1234, "i need to get out of here")
game.onUpdateInterval(100, function () {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 6 9 . . . . . 
        . . . . . . . . 6 9 6 . . . . . 
        . . . . . . . 6 9 6 . . . . . . 
        . . . . . . f 9 6 . . . . . . . 
        . . . . . f e f . . . . . . . . 
        . . . . f e f . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogFrame(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        8 6 6 9 6 6 6 6 6 6 9 6 6 6 8 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `)
})
