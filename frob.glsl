float frobenius(float m) {
  return abs(m);
}

float frobenius(mat2 m) {
  return sqrt(m[0].dot(m[0]) + m[1].dot(m[1]);
}

float frobenius(mat3 m) {
  return sqrt(m[0].dot(m[0]) + m[1].dot(m[1]) + m[2].dot(m[2]));
}

float frobenius(mat4 m) {
  return sqrt(m[0].dot(m[0]) + m[1].dot(m[1]) + m[2].dot(m[2]) + m[3].dot(m[3]));
}

#pragma glslify : export(frobenius)