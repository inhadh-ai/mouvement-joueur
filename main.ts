player.onChat("run", function () {
    agent.place(FORWARD)
})
player.onTravelled(WALK, function () {
	
})
player.onChat("run", function (num1) {
    mobs.spawn(CHICKEN, pos(Math.sqrt(0), 0, 0))
})
agent.move(FORWARD, 1)
