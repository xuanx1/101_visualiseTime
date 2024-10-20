import * as d3 from 'd3';

const initialTime = Date.now();

const body = d3.select('body');

const clock = body.append('div').attr('id', 'clock');

const svg = clock.append('svg')
    .attr('viewBox', '0 0 500 500')
    .attr('width', 500)
    .attr('height', 500);

const timestamp = clock.append('div').attr('id', 'timestamp');

const circle = svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 10) 
    .attr('fill', 'red');


function loop() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const delta = (Date.now() - initialTime);
    const redChannel = (seconds / 60) * 255;

    circle
        .attr('r', (seconds / 60 * 100) + 5)
        .attr('fill', `rgba(${redChannel}, 0, 0, 1)`);

    timestamp.html(`${hours}:${minutes}:${seconds} [Frame: ${delta}]`)

    window.requestAnimationFrame(loop);
}

loop();