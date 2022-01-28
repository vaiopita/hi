input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
})
