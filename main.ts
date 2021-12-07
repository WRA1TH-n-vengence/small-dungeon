scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile5, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.smallCrash.play()
    mySprite.startEffect(effects.halo)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile4, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile6, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
    mySprite3 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f 1 1 f f c c . 
        f f f f f 1 1 f f c c f . 
        f f f 2 f 1 1 f 2 f f f . 
        . f 1 2 f 1 1 f 2 1 f . . 
        . f b 1 1 1 1 1 1 b f . . 
        . f f b d 1 d 1 d f f . . 
        f b f f f f f f f f b f . 
        b 1 f f f f f f f f 1 b . 
        b b f f f f f f f f b b . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Enemy)
    mySprite3.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite3.follow(mySprite, 25)
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f d d f f c c . 
        f f f f f d d f f c c f . 
        f f f 2 f d d f 2 f f f . 
        . f 1 2 f 1 1 f 2 1 f . . 
        . f 1 1 1 1 1 1 1 d f . . 
        . f d 1 d 1 d 1 d f f . . 
        f b f f f f f f f f b f . 
        b d f f f f f f f f d b . 
        b b f f f f f f f f b b . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f d d f f c c 
        . f f f f f d d f f c c f 
        . f f f 2 f d d f 2 f f f 
        . f f 1 2 f 1 1 f 2 1 f f 
        . . f b 1 1 1 1 1 b b f b 
        . f b b f f f f b d d d b 
        . b d f f f f f b d d b . 
        . . . f f f f f f b b . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f d d f f f c c c . 
        f c c f f d d f f f f f . 
        f f f 2 f d d f 2 f f f . 
        f f 1 2 f 1 1 f 2 1 f f . 
        b f b b 1 1 1 1 1 b f . . 
        b d d d b f f f f f b f . 
        . b d d b f f f f f d b . 
        . . b b f f f f f f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    500,
    true
    )
    if (controller.B.isPressed()) {
        controller.player2.moveSprite(mySprite3, 100, 100)
    }
    if (mySprite.overlapsWith(mySprite3)) {
        scene.cameraShake(4, 500)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile1, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile7, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.builtin.field1, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.skillmap.islandTile4, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.bigCrash.play()
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundNorthWest1)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite.startEffect(effects.rings, 1000)
    scene.cameraShake(4, 500)
    controller.player1.moveSprite(mySprite2)
    if (true) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            mySprite2.startEffect(effects.halo)
        }
        scene.cameraShake(4, 500)
        mySprite2.startEffect(effects.halo)
        controller.player1.moveSprite(mySprite2)
        mySprite2.startEffect(effects.halo)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    scene.cameraShake(4, 500)
    music.jumpDown.play()
    tiles.setTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.skillmap.islandTile5, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile14, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.skillmap.islandTile2, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.greenSwitchUp)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.hazardWater, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile2, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile1, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile9, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile3, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile0, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    info.changeScoreBy(999999999)
    info.changeLifeBy(5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(3)
    info.changeLifeBy(1)
    music.baDing.play()
    tiles.setTileAt(location, sprites.dungeon.darkGroundNorthWest1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.builtin.field0, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile8, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.skillmap.islandTile0, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.skillmap.islandTile1, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
info.onLifeZero(function () {
    info.startCountdown(3)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile7, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile5, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile13, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(3, 1), sprites.builtin.forestTiles10)) {
        tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile6, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile8, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile1, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile5, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile4, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile14, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.hazardSpike, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    for (let value of tiles.getTilesByType(sprites.dungeon.floorMixed)) {
        tiles.setWallAt(location, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile12, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.skillmap.islandTile3, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile12, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.swamp.swampTile3, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
info.changeScoreBy(1)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df.2....
    ......fddd1111dddf......
    ......fbdbfddfbdbf..2...
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf.2....
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf..2...
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf..2...
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf.2..
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf.2..
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff........2.
    ........................
    ........................
    ........................
    ........................
    `],
500,
true
)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setBounceOnWall(true)
tiles.setWallAt(tiles.getTileLocation(1, 1), true)
tiles.setWallAt(tiles.getTileLocation(1, 1), true)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
mySprite.setBounceOnWall(true)
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
