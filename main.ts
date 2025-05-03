input.onButtonPressed(Button.A, function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, randint(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Indigo)))
})
input.onButtonPressed(Button.AB, function () {
    cuteBot.stopcar()
})
input.onButtonPressed(Button.B, function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, randint(neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Indigo)))
})
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (cuteBot.trackSide(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine)) {
        cuteBot.turnright()
    } else if (cuteBot.trackSide(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine)) {
        cuteBot.turnleft()
    } else if (cuteBot.trackSide(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine) && cuteBot.trackSide(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine)) {
        cuteBot.forward()
    } else if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 5) {
        cuteBot.setServo(cuteBot.ServoList.S1, 30)
        cuteBot.forward()
    } else {
        cuteBot.stopcar()
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.pause(2000)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . # . # .
            . # # . .
            . # . . .
            . # # . .
            . # . # .
            `)
        basic.pause(2000)
    }
})
