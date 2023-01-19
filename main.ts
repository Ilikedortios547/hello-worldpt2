input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        . . . # .
        . . . . .
        . . . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	
})
