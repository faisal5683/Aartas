export function timeConverter(time) {
    let [hours, minutes, seconds] = time.split(':').map(Number);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return "Invalid time format";
    }

    const period = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes || '00'} ${period}`;

    return formattedTime;
}