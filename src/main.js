import { bootstrapCameraKit, createMediaStreamSource, Transform2D, } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE2ODE2ODQ2LCJzdWIiOiIzZmUzYzEyMy1lODdlLTQzNjEtODYwMi1jODkxMzNlYzMyOWN-U1RBR0lOR34wOThhY2U3MS01OWQ0LTQ2NzUtYjk0MS04YjUyMmRiMjJiZGEifQ.Vndej82iEI6kjWKSS9dG1gnoRbjVzBYq32vwq_NLV8o' });

const session = await cameraKit.createSession()

document.getElementById('canvas').replaceWith(session.output.capture);

const lens = await cameraKit.lensRepository.loadLens(
    '27421317-68b3-4588-97a0-863629cd0d06',
    '<1ab5269b-f2b0-4570-a30f-74a123521727>'
  );

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

await session.applyLens();

})();