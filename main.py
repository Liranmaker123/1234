def on_button_pressed():
    statusbar.value += -10
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

def on_a_pressed():
    if _1234.vy == 0:
        _1234.vy = -200
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_zero(status):
    statusbar.value += 50
statusbars.on_zero(StatusBarKind.energy, on_on_zero)

statusbar: StatusBarSprite = None
_1234: Sprite = None
_1234 = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(_1234, 100, 0)
_1234.set_position(68, 20)
animation.run_image_animation(_1234,
    [img("""
            . . . . . . 
                a a a a a a 
                a f 9 f 9 a 
                a f f f f a 
                a a a a a a
        """),
        img("""
            a a a a a a 
                a f 9 f 9 a 
                a f f f f a 
                a f f f f a 
                a a a a a a
        """)],
    200,
    True)
scene.set_background_color(9)
tiles.set_current_tilemap(tilemap("""
    level2
"""))
scene.camera_follow_sprite(_1234)
_1234.ay = 450
statusbar = statusbars.create(20, 4, StatusBarKind.energy)
statusbar.attach_to_sprite(_1234)

def on_forever():
    statusbar.value += 0.2
forever(on_forever)
