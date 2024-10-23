gdjs.ClickToBeginCode = {};
gdjs.ClickToBeginCode.localVariables = [];
gdjs.ClickToBeginCode.GDClickToBeginObjects1= [];
gdjs.ClickToBeginCode.GDClickToBeginObjects2= [];
gdjs.ClickToBeginCode.GDNewSpriteObjects1= [];
gdjs.ClickToBeginCode.GDNewSpriteObjects2= [];


gdjs.ClickToBeginCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
/* Reuse gdjs.ClickToBeginCode.GDClickToBeginObjects1 */
{for(var i = 0, len = gdjs.ClickToBeginCode.GDClickToBeginObjects1.length ;i < len;++i) {
    gdjs.ClickToBeginCode.GDClickToBeginObjects1[i].setString("Touch To Begin");
}
}}

}


};gdjs.ClickToBeginCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickToBegin"), gdjs.ClickToBeginCode.GDClickToBeginObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.ClickToBeginCode.GDClickToBeginObjects1.length === 0 ) ? 0 :gdjs.ClickToBeginCode.GDClickToBeginObjects1[0].getCenterXInScene()), "", 0);
}
{ //Subevents
gdjs.ClickToBeginCode.eventsList0(runtimeScene);} //End of subevents
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

gdjs.ClickToBeginCode.GDClickToBeginObjects1.length = 0;
gdjs.ClickToBeginCode.GDClickToBeginObjects2.length = 0;
gdjs.ClickToBeginCode.GDNewSpriteObjects1.length = 0;
gdjs.ClickToBeginCode.GDNewSpriteObjects2.length = 0;

gdjs.ClickToBeginCode.eventsList1(runtimeScene);
gdjs.ClickToBeginCode.GDClickToBeginObjects1.length = 0;
gdjs.ClickToBeginCode.GDClickToBeginObjects2.length = 0;
gdjs.ClickToBeginCode.GDNewSpriteObjects1.length = 0;
gdjs.ClickToBeginCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['ClickToBeginCode'] = gdjs.ClickToBeginCode;
