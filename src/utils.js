export default function FormattedTimestamp(startTime) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 100);
    return `${seconds}.${milliseconds}`;
}
