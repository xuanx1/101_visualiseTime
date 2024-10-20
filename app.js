//made with the help of copilot

const body = d3.select('body');
const sunset = body.append('div').attr('id', 'sunset');

const svg = sunset.append('svg')
    .attr('viewBox', '0 0 800 800')
    .attr('width', 800)
    .attr('height', 800)
    .style('background', '#f3dfcc');



const svgContent = `
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 2077.9 2077.9" style="enable-background:new 0 0 2077.9 2077.9;" xml:space="preserve">
<style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#fec76f;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#C8632D;}
	.st2{fill:#DC9965;}
	.st3{fill:#D47E45;}
	.st4{fill:#743C19;}
</style>
<path class="st0" d="M1039.9,247.8c127.5,0,230.9,103.4,230.9,230.9s-103.4,230.9-230.9,230.9C912.4,709.5,809,606.1,809,478.6
	S912.4,247.8,1039.9,247.8L1039.9,247.8z"/>

<path class="st1" d="M2076.4,1291.5c-8.9-0.2-17.9-1.9-26.4-5c-0.1,0-0.2-0.1-0.3-0.1c-94.9-34.9-549.4-173.8-581-182.8
	c-198-56.6-330.4,14.2-495.5,35.2c-83.4,10.6-376-55.2-429.1-124.1c-109.6-142-179.4-38-376.5-101.2c-4.5-1.4-85.7-9.4-166.1-16.9
	c-80.3,7.6-161.6,15.5-166.1,16.9c-197.1,63.1-266.9-40.8-376.5,101.2c-53.1,68.9-345.7,134.7-429.1,124.1
	c-165.1-21-297.6-91.8-495.5-35.2c-31.6,9-486.1,147.9-581,182.8c-0.1,0-0.2,0.1-0.3,0.1c-8.5,3.2-17.5,4.8-26.4,5l-1.9,786.8H1.5
	h2076.8L2076.4,1291.5z"/>

<path class="st2" d="M3727.6,1170.5c-164.3-38.9-202.5-105.7-422.4-120.4c-151.7-10.2-270.5-71.7-348.7-99
	c-195.2-68.2-277.2-7.2-399-53.2c-80.7-30.5-304-77.2-359.1-127c-28-25.2-73.5-35.4-120-36.1v0c-0.2,0-0.3,0-0.5,0
	c-0.2,0-0.3,0-0.5,0v0c-46.6,0.8-92.1,10.9-120,36.1c-55.2,49.8-278.4,96.5-359.1,127c-121.8,46-203.8-14.9-399,53.2
	c-78.2,27.3-197,88.8-348.7,99c-219.9,14.7-258.1,81.5-422.4,120.4c-274.5,65-257.7,101.2-426.5,200.2v707.6h2075.8h1h2075.8v-707.6
	C3985.3,1271.7,4002.1,1235.5,3727.6,1170.5z"/>

<path class="st3" d="M3776.5,1335.9c-378.9-148.3-421.9,105.6-699,103.3c-164.4-1.4-486.3,96.1-627.1,61.6
	c-169.6-41.5-214.7,25.7-373,26.9c-158.3-1.2-203.4-68.4-373-26.9c-140.8,34.4-462.7-63-627.1-61.6
	c-277.1,2.4-320.1-251.6-699-103.3c-149.4,58.5-251,69.6-375.8,82.7v656.9h2074.9h0h2074.9v-656.9
	C4027.5,1405.6,3925.9,1394.4,3776.5,1335.9z"/>
    
<path class="st4" d="M3979.9,1978.5c-254.3-123.9-174.3-65.9-419.4-107.9c-86.9-14.9-54.3-73.8-306-48.5
	c-101.3,10.2-192.8,75.4-338.3,26.3c-145.1-49-90,45.2-249.1-74.7c-93.5-70.4-159.6-30.7-271.7-89c-61.7-32.1-197.8-66.1-317.9-67.5
	c-120.1,1.5-256.2,35.4-317.9,67.5c-112.2,58.3-178.2,18.6-271.7,89c-159.1,119.9-104,25.7-249.1,74.7
	c-145.5,49.1-237.1-16.1-338.3-26.3c-251.8-25.4-219.1,33.6-306,48.5c-245.1,42-165-16-419.4,107.9C114.3,2008,56,2018.9,2.4,2034.4
	v41.1h2074.9h2074.9v-41.1C4098.7,2018.9,4040.4,2008,3979.9,1978.5z"/>
</svg>
`;



// Append the SVG content to the existing SVG element
svg.html(svgContent);

// Select each path and apply separate attributes
const pathSt0 = svg.select('path.st0');
const pathSt1 = svg.select('path.st1');
const pathSt2 = svg.select('path.st2');
const pathSt3 = svg.select('path.st3');
const pathSt4 = svg.select('path.st4');


// Define the translation parameters for st0 - circle -#fec76f 
const durationSt0 = 0.2 * 60 * 1000; // 0.5 minutes in milliseconds
const radiusSt0 = 600; // Radius of the circular path
const centerX = 15; // X-coordinate of the center
const centerY = 600; // Y-coordinate of the center
const startTimeSt0 = Date.now();


// Define the translation parameters for st1 - mid1
const durationSt1 = 0.2 * 60 * 1000; // 0.5 minutes in milliseconds
const distanceSt1 = -1000; // Distance to move
const startTimeSt1 = Date.now();

// Define the translation parameters for st2 - foreground
const durationSt2 = 0.3 * 60 * 1000; // 0.5 minutes in milliseconds
const distanceSt2 = -300; // Distance to move
const startTimeSt2 = Date.now();


// Create a div element for the timestamp
const timestamp = sunset.append('div').attr('id', 'timestamp')
    .style('position', 'absolute')
    .style('top', '10px')
    .style('left', '10px')
    .style('background', 'white')
    .style('padding', '5px')
    .style('border', '1px solid black');


// Function to update the path's position for st0 and the timestamp
function updatePathPositionSt0() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTimeSt0;
    const progress = (elapsedTime % durationSt0) / durationSt0; // Loop progress

    const angle = 2 * Math.PI * progress;
    const translateX = centerX + radiusSt0 * Math.cos(angle);
    const translateY = centerY + radiusSt0 * Math.sin(angle);

    pathSt0.attr('transform', `translate(${translateX}, ${translateY})`);

    // Update the timestamp text
    const timestampText = new Date(currentTime).toLocaleTimeString();
    timestamp.text(`Time: ${timestampText}`);

    requestAnimationFrame(updatePathPositionSt0);
}

// Define the translation parameters for st3
const durationSt3 = 0.1 * 60 * 1000; // 0.5 minutes in milliseconds
const distanceSt3 = -600; // Distance to move
const startTimeSt3 = Date.now();

// Define the translation parameters for st4
const durationSt4 = 0.2 * 60 * 1000; // 0.5 minutes in milliseconds
const distanceSt4 = -400; // Distance to move
const startTimeSt4 = Date.now();


// Function to update the path's position for st2
function updatePathPositionSt2() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTimeSt2;
    const progress = (elapsedTime % durationSt2) / durationSt2; // Loop progress

    const translateX = distanceSt2 * progress;

    pathSt2.attr('transform', `translate(${translateX}, 0)`);

    requestAnimationFrame(updatePathPositionSt2);
}

// Function to update the path's position for st1
function updatePathPositionSt1() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTimeSt1;
    const progress = (elapsedTime % durationSt1) / durationSt1; // Loop progress

    const translateX = distanceSt1 * progress;

    pathSt1.attr('transform', `translate(${translateX}, 0)`);

    requestAnimationFrame(updatePathPositionSt1);
}


// Function to update the path's position for st3
function updatePathPositionSt3() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTimeSt3;
    const progress = (elapsedTime % durationSt3) / durationSt3; // Loop progress

    const translateX = distanceSt3 * progress;

    pathSt3.attr('transform', `translate(${translateX}, 0)`);

    requestAnimationFrame(updatePathPositionSt3);
}

// Function to update the path's position for st4
function updatePathPositionSt4() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTimeSt4;
    const progress = (elapsedTime % durationSt4) / durationSt4; // Loop progress

    const translateX = distanceSt4 * progress;

    pathSt4.attr('transform', `translate(${translateX}, 0)`);

    requestAnimationFrame(updatePathPositionSt4);
}


// Start the animations
updatePathPositionSt0();
updatePathPositionSt1();
updatePathPositionSt2();
updatePathPositionSt3();
updatePathPositionSt4();