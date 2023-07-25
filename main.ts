game.pushScene()
scene_util.captureRegisteringRoomScenes(()=>{
    DzBasketball.prepare_DzBasketball()
    game.popScene()
})
scene_util.captureRegisteringRoomScenes(() => {
    zhr_room.prepare_zhr_room()
    game.popScene()
})
cbland.startVillage(false)
