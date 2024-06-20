import { bootstrapCameraKit, createMediaStreamSource, Transform2D, } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE2ODE2ODQ2LCJzdWIiOiIzZmUzYzEyMy1lODdlLTQzNjEtODYwMi1jODkxMzNlYzMyOWN-U1RBR0lOR34wOThhY2U3MS01OWQ0LTQ2NzUtYjk0MS04YjUyMmRiMjJiZGEifQ.Vndej82iEI6kjWKSS9dG1gnoRbjVzBYq32vwq_NLV8o' });

const session = await cameraKit.createSession()

document.getElementById('canvas').replaceWith(session.output.capture);

const {lenses} = await cameraKit.lensRepository.loadLensGroups(['b6b6e979-46ce-4c01-903f-0bd39ad43afc'])

//let s = 0;
//if (s = 1) {

  //await session.applyLens(lenses[1])
//}
//else{

  //await session.applyLens(lenses[0])
//}

document.getElementById('1').onclick = function(){switchLens(1)};
document.getElementById('2').onclick = function(){switchLens(2)};
document.getElementById('3').onclick = function(){switchLens(3)};
document.getElementById('4').onclick = function(){switchLens(4)};

function switchLens(int) {
  session.applyLens(lenses[int]);
}

const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true
});

const source = createMediaStreamSource(mediaStream, { cameraType: 'back' 
})

await session.setSource(source);

//source.setRenderSize(window.innerWidth, window.innerHeight)

session.play('capture');
//await session.applyLens(lenses[int])

//const lens = await cameraKit.lensRepository.loadLens(
//  '50507980875',
//  '7fa3fa7c-e626-4539-b9db-73cdb0b0b2ce'
//);

//await session.applyLens(lens);

})();