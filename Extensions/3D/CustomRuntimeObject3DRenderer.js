var gdjs;(function(a){class u{constructor(e,t,i){this._isContainerDirty=!0;this._object=e,this._instanceContainer=t,this._threeGroup=new THREE.Group,this._threeGroup.rotation.order="ZYX";const r=i.getLayer("");r&&r.getRenderer().add3DRendererObject(this._threeGroup)}get3DRendererObject(){return this._threeGroup}getRendererObject(){return null}reinitialize(e,t){this._object=e,this._isContainerDirty=!0;const i=t.getLayer("");i&&i.getRenderer().add3DRendererObject(this._threeGroup)}_updateThreeGroup(){const e=this.get3DRendererObject(),t=this._object.getScaleX(),i=this._object.getScaleY(),r=this._object.getScaleZ(),n=this._object.getUnscaledCenterX()*t,s=this._object.getUnscaledCenterY()*i,o=this._object.getUnscaledCenterZ()*r;e.rotation.set(a.toRad(this._object.getRotationX()),a.toRad(this._object.getRotationY()),a.toRad(this._object.angle)),e.position.set(this._object.isFlippedX()?n:-n,this._object.isFlippedY()?s:-s,this._object.isFlippedZ()?o:-o),e.position.applyEuler(e.rotation),e.position.x+=this._object.getX()+n,e.position.y+=this._object.getY()+s,e.position.z+=this._object.getZ()+o,e.scale.set(this._object.isFlippedX()?-t:t,this._object.isFlippedY()?-i:i,this._object.isFlippedZ()?-r:r),e.visible=!this._object.hidden,this._isContainerDirty=!1}ensureUpToDate(){this._isContainerDirty&&this._updateThreeGroup()}update(){this._isContainerDirty=!0}updateX(){this._isContainerDirty=!0}updateY(){this._isContainerDirty=!0}updateAngle(){this._isContainerDirty=!0}updatePosition(){this._isContainerDirty=!0}updateRotation(){this._isContainerDirty=!0}updateSize(){this._isContainerDirty=!0}updateVisibility(){this._threeGroup.visible=!this._object.hidden}updateOpacity(){}setLayerIndex(e,t){}static getAnimationFrameTextureManager(e){return e._threeAnimationFrameTextureManager||(e._threeAnimationFrameTextureManager=new c(e)),e._threeAnimationFrameTextureManager}}a.CustomRuntimeObject3DRenderer=u;class c{constructor(e){this._imageManager=e}getAnimationFrameTexture(e){return this._imageManager.getThreeMaterial(e,{useTransparentTexture:!0,forceBasicMaterial:!0})}getAnimationFrameWidth(e){const t=e.map;return t?t.image.width:0}getAnimationFrameHeight(e){const t=e.map;return t?t.image.height:0}}})(gdjs||(gdjs={}));
//# sourceMappingURL=CustomRuntimeObject3DRenderer.js.map