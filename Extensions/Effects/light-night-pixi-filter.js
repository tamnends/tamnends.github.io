var gdjs;(function(i){class a extends PIXI.Filter{constructor(){const e=void 0,t=["precision mediump float;","","varying vec2 vTextureCoord;","uniform sampler2D uSampler;","uniform float opacity;","","void main(void)","{","   mat3 nightMatrix = mat3(0.6, 0, 0, 0, 0.7, 0, 0, 0, 1.3);","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, nightMatrix * gl_FragColor.rgb, opacity);","}"].join(`
`),o={opacity:{type:"1f",value:1}};super(e,t,o)}}i.LightNightPixiFilter=a,a.prototype.constructor=i.LightNightPixiFilter,i.PixiFiltersTools.registerFilterCreator("LightNight",new class extends i.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,e){return new i.LightNightPixiFilter}updatePreRender(r,e){}updateDoubleParameter(r,e,t){e==="opacity"&&(r.uniforms.opacity=i.PixiFiltersTools.clampValue(t,0,1))}getDoubleParameter(r,e){return e==="opacity"?r.uniforms.opacity:0}updateStringParameter(r,e,t){}updateColorParameter(r,e,t){}getColorParameter(r,e){return 0}updateBooleanParameter(r,e,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=light-night-pixi-filter.js.map