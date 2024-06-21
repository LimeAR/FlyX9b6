import { bootstrapCameraKit, createMediaStreamSource, Transform2D, } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE4OTE4NTM1LCJzdWIiOiJkN2UwNWJjYS02ODVkLTQ0ZGItODE0Mi01ZDg0YTA3YjRlYWJ-U1RBR0lOR34xYTRjMzhiOS05MmMyLTQ4NjMtYWRmMC03OGIyNzI2N2M3ZDAifQ.5cjphNHA4_YVy_2pQ3e-xOO-_Ty68IO9pqHvkoEqiUk' });

const session = await cameraKit.createSession();

document.getElementById('canvas').replaceWith(session.output.capture);

const lens = await cameraKit.lensRepository.loadLens(
    '27421317-68b3-4588-97a0-863629cd0d06',
    '1ab5269b-f2b0-4570-a30f-74a123521727'
  );

const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true
});

const source = createMediaStreamSource(mediaStream, { cameraType: 'environment' 
})

await session.setSource(source);

//source.setRenderSize(window.innerWidth, window.innerHeight)

session.play('capture');

await session.applyLens();

})();