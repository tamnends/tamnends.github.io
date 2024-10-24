gdjs.StartSceneCode = {};
gdjs.StartSceneCode.localVariables = [];
gdjs.StartSceneCode.GDNewSpriteObjects1= [];
gdjs.StartSceneCode.GDNewSpriteObjects2= [];
gdjs.StartSceneCode.GDNewSprite2Objects1= [];
gdjs.StartSceneCode.GDNewSprite2Objects2= [];


gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartSceneCode.GDNewSprite2Objects1});
gdjs.StartSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};gdjs.StartSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartSceneCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.StartSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.StartSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects2.length = 0;

gdjs.StartSceneCode.eventsList1(runtimeScene);
gdjs.StartSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.StartSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['StartSceneCode'] = gdjs.StartSceneCode;
