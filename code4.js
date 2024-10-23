gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.GDNewSpriteObjects1= [];
gdjs.EndScreenCode.GDNewSpriteObjects2= [];
gdjs.EndScreenCode.GDNewSprite2Objects1= [];
gdjs.EndScreenCode.GDNewSprite2Objects2= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.EndScreenCode.GDNewSprite2Objects1});
gdjs.EndScreenCode.asyncCallback18042020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback18042020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.EndScreenCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.EndScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.EndScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.EndScreenCode.GDNewSprite2Objects2.length = 0;

gdjs.EndScreenCode.eventsList2(runtimeScene);
gdjs.EndScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.EndScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.EndScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.EndScreenCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
