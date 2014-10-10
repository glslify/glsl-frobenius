# glsl-frobenius

Computes the [Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) of a matrix in glsl (that is the sum of the squares of the entries of the matrix).

# Example

```glsl
#pragma glslify : frob = require(glsl-frobenius)
```

# Usage

Install with npm:

```
npm install glsl-frobenius
```

Then use with [glslify](https://github.com/stackgl/glslify).

# API

```glsl
#pragma glslify : frobenius = require(glsl-frobenius)
```

### `float frobenius(float|mat2|mat3|mat4 m)`
Computes the Frobenius norm of `m`

* `m` is a matrix

**Returns** The Frobenius norm of `m`

# License
MIT