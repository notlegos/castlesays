function isNearly (reference: number, reading: number, tolerance: number) {
    if (reading >= reference - tolerance && reading <= reference + tolerance) {
        return true
    } else {
        return false
    }
}
let lastRead = 0
let thisRead = 0
notLegos.potSet(AnalogPin.P10)
notLegos.mp3setPorts(SerialPin.P14)
notLegos.mp3setPorts(SerialPin.P15)
notLegos.mp3setPorts(SerialPin.P16)
notLegos.setSounds("Mario")
led.enable(false)
pins.setAudioPinEnabled(false)
pins.digitalWritePin(DigitalPin.P5, 0)
Connected.oledClear()
Connected.showUserText(2, "hi")
basic.pause(5000)
pins.digitalWritePin(DigitalPin.P5, 1)
loops.everyInterval(250, function () {
    thisRead = notLegos.potRead()
    if (!(isNearly(lastRead, thisRead, 0.005))) {
        notLegos.updateVolume()
    }
    lastRead = thisRead
})
