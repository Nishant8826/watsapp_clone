

export const formateDate = (date) => {
    const hr = new Date(date).getHours();
    const min = new Date(date).getMinutes();
    return `${hr < 10 ? '0' + hr : hr}:${min < 10 ? '0' + min : min}`
}

export const downloadMedia = (e, origin) => {
    e.preventDefault();
    try {
        fetch(origin)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;

                const nameSplit = origin.split("/");
                const duplicateName = nameSplit.pop();

                // the filename you want
                a.download = "" + duplicateName + "";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => console.log('Error while downloading the image ', error))


    } catch (error) {
        console.log('Error while downloading media ', error.message);
    }
}
