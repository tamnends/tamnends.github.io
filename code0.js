gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDRunObjects1= [];
gdjs.Untitled_32sceneCode.GDRunObjects2= [];
gdjs.Untitled_32sceneCode.GDSummerTileObjects1= [];
gdjs.Untitled_32sceneCode.GDSummerTileObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDRunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSummerTileObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSummerTileObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
