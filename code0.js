gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDHeroObjects1= [];
gdjs.Untitled_32sceneCode.GDHeroObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatform1Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform1Objects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];
gdjs.Untitled_32sceneCode.GD_951059Objects1= [];
gdjs.Untitled_32sceneCode.GD_951059Objects2= [];
gdjs.Untitled_32sceneCode.GD_951042Objects1= [];
gdjs.Untitled_32sceneCode.GD_951042Objects2= [];
gdjs.Untitled_32sceneCode.GD_951050Objects1= [];
gdjs.Untitled_32sceneCode.GD_951050Objects2= [];
gdjs.Untitled_32sceneCode.GD_951057Objects1= [];
gdjs.Untitled_32sceneCode.GD_951057Objects2= [];
gdjs.Untitled_32sceneCode.GD_951053Objects1= [];
gdjs.Untitled_32sceneCode.GD_951053Objects2= [];
gdjs.Untitled_32sceneCode.GD_951054Objects1= [];
gdjs.Untitled_32sceneCode.GD_951054Objects2= [];
gdjs.Untitled_32sceneCode.GD_951048Objects1= [];
gdjs.Untitled_32sceneCode.GD_951048Objects2= [];
gdjs.Untitled_32sceneCode.GDPlatform2Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform2Objects2= [];
gdjs.Untitled_32sceneCode.GDBG2Objects1= [];
gdjs.Untitled_32sceneCode.GDBG2Objects2= [];
gdjs.Untitled_32sceneCode.GDBG1Objects1= [];
gdjs.Untitled_32sceneCode.GDBG1Objects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.Untitled_32sceneCode.GDPlatform1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Untitled_32sceneCode.GDPlatform2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlatform1Objects1[i].setX(gdjs.Untitled_32sceneCode.GDPlatform1Objects1[i].getX() + (-(4)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlatform2Objects1[i].setX(gdjs.Untitled_32sceneCode.GDPlatform2Objects1[i].getX() + (-(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.Untitled_32sceneCode.GDPlatform1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlatform1Objects1[i].getX() < -((gdjs.Untitled_32sceneCode.GDPlatform1Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlatform1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlatform1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlatform1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Untitled_32sceneCode.GDPlatform2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlatform1Objects1[i].setX((( gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlatform2Objects1[0].getX()) + (( gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlatform2Objects1[0].getWidth()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Untitled_32sceneCode.GDPlatform2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlatform2Objects1[i].getX() < -((gdjs.Untitled_32sceneCode.GDPlatform2Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlatform2Objects1[k] = gdjs.Untitled_32sceneCode.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.Untitled_32sceneCode.GDPlatform1Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlatform2Objects1[i].setX((( gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlatform1Objects1[0].getX()) + (( gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlatform1Objects1[0].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BG1"), gdjs.Untitled_32sceneCode.GDBG1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BG2"), gdjs.Untitled_32sceneCode.GDBG2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBG1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBG1Objects1[i].setX(gdjs.Untitled_32sceneCode.GDBG1Objects1[i].getX() + (-(5)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBG2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBG2Objects1[i].setX(gdjs.Untitled_32sceneCode.GDBG2Objects1[i].getX() + (-(5)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG1"), gdjs.Untitled_32sceneCode.GDBG1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBG1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBG1Objects1[i].getX() < -((gdjs.Untitled_32sceneCode.GDBG1Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBG1Objects1[k] = gdjs.Untitled_32sceneCode.GDBG1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBG1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBG1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("BG2"), gdjs.Untitled_32sceneCode.GDBG2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBG1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBG1Objects1[i].setX((( gdjs.Untitled_32sceneCode.GDBG2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBG2Objects1[0].getX()) + (( gdjs.Untitled_32sceneCode.GDBG2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBG2Objects1[0].getWidth()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG2"), gdjs.Untitled_32sceneCode.GDBG2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBG2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBG2Objects1[i].getX() < -((gdjs.Untitled_32sceneCode.GDBG2Objects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBG2Objects1[k] = gdjs.Untitled_32sceneCode.GDBG2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBG2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG1"), gdjs.Untitled_32sceneCode.GDBG1Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDBG2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBG2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBG2Objects1[i].setX((( gdjs.Untitled_32sceneCode.GDBG1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBG1Objects1[0].getX()) + (( gdjs.Untitled_32sceneCode.GDBG1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBG1Objects1[0].getWidth()));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDHeroObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHeroObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951059Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951059Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951042Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951042Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951050Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951050Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951057Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951057Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951053Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951053Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951054Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951054Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_951048Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_951048Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBG1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBG1Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
