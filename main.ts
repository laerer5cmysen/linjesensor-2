bitbot.select_model(BBModel.XL)
basic.forever(function () {
    bitbot.move(BBMotor.Left, BBDirection.Forward, (1 - bitbot.readLine(BBLineSensor.Left)) * 15)
    bitbot.move(BBMotor.Right, BBDirection.Forward, (1 - bitbot.readLine(BBLineSensor.Right)) * 15)
})
