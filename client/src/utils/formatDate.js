

export const formateDate = (date) => {
    const hr = new Date(date).getHours();
    const min = new Date(date).getMinutes();
    return `${hr < 10 ? '0' + hr : hr}:${min < 10 ? '0' + min : min}`
}
