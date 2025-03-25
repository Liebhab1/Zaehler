input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zahl = Zahl + 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Zahl = Zahl - 1
})
let Zahl = 0
Zahl = 0
basic.forever(function () {
    basic.showString("" + (Zahl))
})
