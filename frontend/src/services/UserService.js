export const fetchCurrentUser = async () => {
    const apiUrl = "http://localhost:8001/api/method/frappe.auth.get_logged_user"; // ERPNext API URL
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include',
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Kullanıcı bilgilerini konsola yazdır
        return data.message; // Kullanıcı bilgilerini döndür
    } catch (error) {
        console.error("Hata:", error);
    }
};