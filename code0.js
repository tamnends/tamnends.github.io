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
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDDebugTextObjects1= [];
gdjs.Untitled_32sceneCode.GDDebugTextObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Untitled_32sceneCode.GDHeroObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHeroObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHeroObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "dungeon_theme_1.wav", true, 100, 1);
}{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScoreTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ScoreTimer") > 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScoreTimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Untitled_32sceneCode.GDHeroObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHeroObjects1[i].setCenterPositionInScene((( gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[0].getCenterXInScene()),(( gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i].setX(32);
}
}}

}


{



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



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BG1"), gdjs.Untitled_32sceneCode.GDBG1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BG2"), gdjs.Untitled_32sceneCode.GDBG2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBG1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBG1Objects1[i].setX(gdjs.Untitled_32sceneCode.GDBG1Objects1[i].getX() + (-(1.5)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBG2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBG2Objects1[i].setX(gdjs.Untitled_32sceneCode.GDBG2Objects1[i].getX() + (-(1.5)));
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


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DebugText"), gdjs.Untitled_32sceneCode.GDDebugTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDebugTextObjects1[i].getBehavior("Text").setText("Timer: " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "ScoreTimer")) + " | Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
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
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDebugTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDebugTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
