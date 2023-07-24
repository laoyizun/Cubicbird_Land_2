game.pushScene()
/**
 * scene_util.captureRegisteringRoomScenes(() => {
 * 
 * chickcoop.prepareChickCoop()
 * 
 * game.popScene()
 * 
 * })
 */

scene_util.captureRegisteringRoomScenes(()=>{
    DzBasketball.prepare_DzBasketball()
    game.popScene
})
cbland.startVillage(false)