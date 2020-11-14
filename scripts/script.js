const Patches = require('Patches')
const R = require('Reactive')
const D = require('Diagnostics')
const FaceTracking2D = require('FaceTracking2D')
const face = FaceTracking2D.face(0)

Patches.inputs.setPoint2D('face2DSize', R.point2d(face.boundingBox.width, face.boundingBox.height))
Patches.inputs.setPoint2D('face2DCenter', R.point2d(face.boundingBox.center.x, R.sub(1, face.boundingBox.center.y)))

D.watch('x', face.boundingBox.x)
D.watch('y', face.boundingBox.y)
D.watch('width', face.boundingBox.width)
D.watch('height', face.boundingBox.height)
D.watch('centerX', face.boundingBox.center.x)
D.watch('centerY', face.boundingBox.center.y)
