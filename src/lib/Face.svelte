<script>
    import * as faceapi from "@vladmandic/face-api";

    // configuration options
    const modelPath = "./models"; // path to model folder that will be loaded using http
    // const modelPath = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'; // path to model folder that will be loaded using http
    const minScore = 0.2; // minimum score
    const maxResults = 5; // maximum number of results to return
    let optionsSSDMobileNet;
    let faceDetectionResult = [];

    async function setupFaceApi() {
        //console.log(faceapi.nets);
        log('setup FaceAPI WebCam');

        // if you want to use wasm backend location for wasm binaries must be specified
        // await faceapi.tf.setWasmPaths(`https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${faceapi.tf.version_core}/dist/`);

        await faceapi.tf.setBackend('webgl'); // wasm
        await faceapi.tf.ready();

        // check version
        log(`Version: FaceAPI ${str(faceapi?.version || '(not loaded)')} TensorFlow/JS ${str(faceapi?.tf?.version_core || '(not loaded)')} Backend: ${str(faceapi?.tf?.getBackend() || '(not loaded)')}`);

        await setupFaceAPI();
        await setupCamera();
    }

    // helper function to pretty-print json object to string
    function str(json) {
        let text = '<font color="lightblue">';
        text += json
            ? JSON.stringify(json)
                  .replace(/{|}|"|\[|\]/g, "")
                  .replace(/,/g, ", ")
            : "";
        text += "</font>";
        return text;
    }

    // helper function to print strings to html document as a log
    function log(...txt) {
        console.log(...txt); // eslint-disable-line no-console
        const div = document.getElementById("log");
        if (div) div.innerHTML += `<br>${txt}`;
    }

    // helper function to draw detected faces
    function drawFaces(canvas, data, fps) {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // draw title
        ctx.font = 'small-caps 20px "Segoe UI"';
        ctx.fillStyle = "white";
        ctx.fillText(`FPS: ${fps}`, 10, 25);
        for (const person of data) {
            // draw box around each face
            ctx.lineWidth = 3;
            ctx.strokeStyle = "deepskyblue";
            ctx.fillStyle = "deepskyblue";
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            ctx.rect(
                person.detection.box.x,
                person.detection.box.y,
                person.detection.box.width,
                person.detection.box.height
            );
            ctx.stroke();
            ctx.globalAlpha = 1;
            // draw text labels
            const expression = Object.entries(person.expressions).sort(
                (a, b) => b[1] - a[1]
            );
            ctx.fillStyle = "black";
            ctx.fillText(
                `gender: ${Math.round(100 * person.genderProbability)}% ${
                    person.gender
                }`,
                person.detection.box.x,
                person.detection.box.y - 59
            );
            ctx.fillText(
                `expression: ${Math.round(100 * expression[0][1])}% ${
                    expression[0][0]
                }`,
                person.detection.box.x,
                person.detection.box.y - 41
            );
            ctx.fillText(
                `age: ${Math.round(person.age)} years`,
                person.detection.box.x,
                person.detection.box.y - 23
            );
            ctx.fillText(
                `roll:${person.angle.roll}° pitch:${person.angle.pitch}° yaw:${person.angle.yaw}°`,
                person.detection.box.x,
                person.detection.box.y - 5
            );
            ctx.fillStyle = "lightblue";
            ctx.fillText(
                `gender: ${Math.round(100 * person.genderProbability)}% ${
                    person.gender
                }`,
                person.detection.box.x,
                person.detection.box.y - 60
            );
            ctx.fillText(
                `expression: ${Math.round(100 * expression[0][1])}% ${
                    expression[0][0]
                }`,
                person.detection.box.x,
                person.detection.box.y - 42
            );
            ctx.fillText(
                `age: ${Math.round(person.age)} years`,
                person.detection.box.x,
                person.detection.box.y - 24
            );
            ctx.fillText(
                `roll:${person.angle.roll}° pitch:${person.angle.pitch}° yaw:${person.angle.yaw}°`,
                person.detection.box.x,
                person.detection.box.y - 6
            );
            // draw face points for each face
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = "lightblue";
            const pointSize = 2;
            for (let i = 0; i < person.landmarks.positions.length; i++) {
                ctx.beginPath();
                ctx.arc(
                    person.landmarks.positions[i].x,
                    person.landmarks.positions[i].y,
                    pointSize,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
            }
        }
    }

    async function detectVideo(video, canvas) {
        if (!video || video.paused) return false;
        const t0 = performance.now();
        faceapi
            .detectAllFaces(video, optionsSSDMobileNet)
            .withFaceLandmarks()
            .withFaceExpressions()
            // .withFaceDescriptors()
            .withAgeAndGender()
            .then((result) => {
                faceDetectionResult = result;
                console.log(result);
                const fps = 1000 / (performance.now() - t0);
                drawFaces(canvas, result, fps.toLocaleString());
                requestAnimationFrame(() => detectVideo(video, canvas));
                return true;
            })
            .catch((err) => {
                log(`Detect Error: ${str(err)}`);
                return false;
            });
        return false;
    }
    async function setupCamera() {
        const video = document.getElementById("video");
        const canvas = document.getElementById("canvas");
        if (!video || !canvas) return null;

        log("Setting up camera");
        // setup webcam. note that navigator.mediaDevices requires that page is accessed via https
        if (!navigator.mediaDevices) {
            log("Camera Error: access not supported");
            return null;
        }
        let stream;
        const constraints = {
            audio: false,
            video: { facingMode: "user", resizeMode: "crop-and-scale" },
        };
        if (window.innerWidth > window.innerHeight)
            constraints.video.width = { ideal: window.innerWidth };
        else constraints.video.height = { ideal: window.innerHeight };
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (err) {
            if (
                err.name === "PermissionDeniedError" ||
                err.name === "NotAllowedError"
            )
                log(
                    `Camera Error: camera permission denied: ${
                        err.message || err
                    }`
                );
            if (err.name === "SourceUnavailableError")
                log(
                    `Camera Error: camera not available: ${err.message || err}`
                );
            return null;
        }
        if (stream) video.srcObject = stream;
        else {
            log("Camera Error: stream empty");
            return null;
        }
        const track = stream.getVideoTracks()[0];
        const settings = track.getSettings();
        if (settings.deviceId) delete settings.deviceId;
        if (settings.groupId) delete settings.groupId;
        if (settings.aspectRatio)
            settings.aspectRatio = Math.trunc(100 * settings.aspectRatio) / 100;
        log(`Camera active: ${track.label}`);
        log(`Camera settings: ${str(settings)}`);
        canvas.addEventListener("click", () => {
            if (video && video.readyState >= 2) {
                if (video.paused) {
                    video.play();
                    detectVideo(video, canvas);
                } else {
                    video.pause();
                }
            }
            log(`Camera state: ${video.paused ? "paused" : "playing"}`);
        });
        return new Promise((resolve) => {
            video.onloadeddata = async () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                video.play();
                detectVideo(video, canvas);
                resolve(true);
            };
        });
    }
    async function setupFaceAPI() {
        // await faceapi.nets.tinyFaceDetector.load(modelPath); // using ssdMobilenetv1
        await faceapi.nets.ssdMobilenetv1.load(modelPath);
        await faceapi.nets.ageGenderNet.load(modelPath);
        await faceapi.nets.faceLandmark68Net.load(modelPath);
        await faceapi.nets.faceRecognitionNet.load(modelPath);
        await faceapi.nets.faceExpressionNet.load(modelPath);
        optionsSSDMobileNet = new faceapi.SsdMobilenetv1Options({
            minConfidence: minScore,
            maxResults,
        });
        // check tf engine state
        log(
            `Models loaded: ${str(
                faceapi.tf.engine().state.numTensors
            )} tensors`
        );
    }

</script>

<h1>face</h1>
<button on:click={setupFaceApi}>setupFaceApi</button>

<video id="video" playsinline class="video" />
<canvas
    id="canvas"
    class="canvas"
    style="position: fixed; top: 0; left: 0; z-index: 10"
/>

<div>
    {#each faceDetectionResult as person}
        <p>gender: {person.gender}</p>
        <p>age: {person.age}</p> 
    {/each }
</div>
<!-- <div id="log" style="overflow-y: scroll; height: 16.5rem" /> -->
