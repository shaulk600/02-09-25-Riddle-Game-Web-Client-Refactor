

export const port: string = "3005"
export const url: string = `http://localhost:${port}/`;

// על הפונקציה הבאה :
 // לשלוח פינג מוסכם מראש שיחזיר OK
    // אגב: ברגע שיש פינג זה נותן אינדיקצייה לשרת לאשר פעולות
    // ולסרוק את URL

// לעשות ניתוב - עדין אין ניתוב
async function IsConnect(url: string) {
    try {
        let data = { msg: 'no' };
        const res = await fetch(`${url}/pinging`);
        data = await res.json();

        if (data['msg'] === 'ok') {
            return ('Is Connect');
        }
        return ('Is NOT Connect');
    }
    catch(err){
        return (`error: function 'IsConnect' Connect`);
    }
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



