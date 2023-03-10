//This file is automatically rebuilt by the Cesium build process.
export default "#ifdef INSTANCED\n\
in vec2 direction;\n\
#endif\n\
in vec4 positionHighAndScaleX;\n\
in vec4 positionLowAndScaleY;\n\
in vec4 packedAttribute0;\n\
in vec4 packedAttribute1;\n\
in vec4 color;\n\
\n\
out vec2 v_offset;\n\
out vec3 v_maximumSize;\n\
out vec4 v_color;\n\
out float v_slice;\n\
out float v_brightness;\n\
\n\
void main() {\n\
    // Unpack attributes.\n\
    vec3 positionHigh = positionHighAndScaleX.xyz;\n\
    vec3 positionLow = positionLowAndScaleY.xyz;\n\
    vec2 scale = vec2(positionHighAndScaleX.w, positionLowAndScaleY.w);\n\
\n\
    float show = packedAttribute0.x;\n\
    float brightness = packedAttribute0.y;\n\
    vec2 coordinates = packedAttribute0.wz;\n\
    vec3 maximumSize = packedAttribute1.xyz;\n\
    float slice = packedAttribute1.w;\n\
\n\
#ifdef INSTANCED\n\
    vec2 dir = direction;\n\
#else\n\
    vec2 dir = coordinates;\n\
#endif\n\
\n\
    vec2 offset = dir - vec2(0.5, 0.5);\n\
    vec2 scaledOffset = scale * offset;\n\
    vec4 p = czm_translateRelativeToEye(positionHigh, positionLow);\n\
    vec4 positionEC = czm_modelViewRelativeToEye * p;\n\
    positionEC.xy += scaledOffset;\n\
    \n\
    positionEC.xyz *= show;\n\
    gl_Position = czm_projection * positionEC;\n\
\n\
    v_offset = offset;\n\
    v_maximumSize = maximumSize;\n\
    v_color = color;\n\
    v_slice = slice;\n\
    v_brightness = brightness;\n\
}\n\
";
