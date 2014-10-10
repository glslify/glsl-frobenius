var glslify       = require('glslify')
var drawTriangle  = require('a-big-triangle')
=
var canvas = document.createElement('canvas')
var gl = canvas.getContext('webgl')

var shader = glslify({
  vert: '\
attribute vec2 position;\
void main() {\
  gl_Position = vec4(position,0.0,1.0);\
}',
  frag: '\
#pragma glslify : frob = require(../frob.glsl)\n\
uniform float m0;\
uniform mat2  m1;\
uniform mat3  m2;\
uniform mat4  m3;\
uniform float e0, e1, e2, e3;\
void main() {\
  gl_FragColor = vec4(frob(m0)-e0, frob(m1)-e1, frob(m2)-e2, frob(m3)-e3);\
}'
})(gl)


function runTest(m0, m1, m2, m3) {
  function f(m) {
    var s = 0.0
    for(var i=0; i<m.length; ++i) {
      s += m[i]*m[i]
    }
    return Math.sqrt(s)
  }

  shader.bind()
  shader.uniforms = {
    e0: Math.abs(e0),
    e1: f(m1),
    e2: f(m2),
    e3: f(m3),
    m0: m0,
    m1: m1,
    m2: m2,
    m3: m3
  }
  drawTriangle(gl)

  var result = new Uint8Array(4)
  gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, result)

  console.log(result[0], result[1], result[2], result[3])
}


function randFloat() {
  return (Math.random() - 0.5) * Math.pow(2, 20*(Math.random()-0.5))
}
function randArray(n) {
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    r[i] = randFloat()
  }
  return r
}

for(var i=0; i<100; ++i) {
  runTest(randFloat(), randArray(4), randArray(9), randArray(16))
}