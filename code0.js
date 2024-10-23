gdjs.ClickToBeginCode = {};
gdjs.ClickToBeginCode.localVariables = [];
gdjs.ClickToBeginCode.GDNewSpriteObjects1= [];
gdjs.ClickToBeginCode.GDNewSpriteObjects2= [];


gdjs.ClickToBeginCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};

gdjs.ClickToBeginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickToBeginCode.GDNewSpriteObjects1.length = 0;
gdjs.ClickToBeginCode.GDNewSpriteObjects2.length = 0;

gdjs.ClickToBeginCode.eventsList0(runtimeScene);
gdjs.ClickToBeginCode.GDNewSpriteObjects1.length = 0;
gdjs.ClickToBeginCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['ClickToBeginCode'] = gdjs.ClickToBeginCode;
