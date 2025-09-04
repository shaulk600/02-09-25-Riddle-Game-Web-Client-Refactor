
function IsConnection(url?: string, port?: string, RedirectPage?: string) {
    if (!url || !port) {
        url = 'http://localhost';
        port = '3005';
        RedirectPage = '/'
    }
    return `${url}:${port}${RedirectPage}`;
}
// כרגע לא להפעיל את הפונקציה - לבחון את הסיטואציה בעיקר
// function IsOpen(objToFetch ="", objValueToEnterToBody="") {
//     const url = IsConnection(objToFetch.url, objToFetch.port, objToFetch.RedirectPage);
//     // לעשות מתודה שתחזיר OK
// }

function ApiConnection():void {
    const objToImport = {
        url: '',
        Headers: "",
        body: {key:""},

    }
    const url = '';
    const postPage = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ value: objToImport.body })
            });
            const data = await response.json();
            return data;

        } catch (err) {
            console.error("Error in postPage function:", err);
        }
    };

    const loadPage = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;

        } catch (err) {
            console.error("Error in loadPage function:", err);
        }
    };

    // return (
    //     <>
    //         <div>

    //         </div>
    //     </>
    // )
}
