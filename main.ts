game.pushScene()

scene_util.captureRegisteringRoomScenes(() => {
    zhr_room.prepare_zhr_room()
    game.popScene()
})
scene_util.captureRegisteringRoomScenes(() => {
    zyx_room.prepare_zyx_room()
    game.popScene()
})
scene_util.captureRegisteringRoomScenes(() => {
    xcx_room.prepare_xcx_room()
    game.popScene()
})
cbland.startVillage(false)
