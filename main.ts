input.onButtonPressed(Button.A, function () {
    basic.showString(mypass)
    mypass = ""
})
let item = ""
let mypass = ""
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(500)
keypad.setKeyPad4(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P6,
DigitalPin.P11,
DigitalPin.P8,
DigitalPin.P9,
DigitalPin.P10
)
basic.forever(function () {
    item = keypad.getKeyString()
    if (item != "") {
        mypass += item
        basic.showString(item)
        I2C_LCD1602.BacklightOn()
        I2C_LCD1602.ShowString("mypass=", 0, 0)
        I2C_LCD1602.ShowString(item, 8, 0)
    }
})
