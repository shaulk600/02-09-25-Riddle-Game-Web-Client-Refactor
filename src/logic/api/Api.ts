export const url = "" || "http://localhost:3005/login";

function IsConnection(url?: string, port?: string, RedirectPage?: string) {
    console.log('');
    // לעשות מתודה שתחזיר OK
}

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
}

const loadPage = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (err) {
        console.error("Error in loadPage function:", err);
    }
}



