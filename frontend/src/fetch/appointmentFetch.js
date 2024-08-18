const getAppointments = async (setIsLoading, id, token, refreshToken, setError) => {
    setIsLoading(true);
    try {
        const response = await fetch(`http://localhost:8000/appointments/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
                "auth-refresh-token": refreshToken,
            },
        })
        if (!response.ok) throw new Error();
        const data = await response.json();
        console.log("APPOOINTMENT DATA", data);
        return data;
    } catch (error) {
        setError(true);
    } finally {
        setIsLoading(false);
    }
}

const createAppointment = async (setIsLoading, id, token, refreshToken, appointmentData, setError) => {
    setIsLoading(true);
    try {
        const response = await fetch(`http://localhost:8000/newappointment/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
                "auth-refresh-token": refreshToken,
            },
            body: JSON.stringify(appointmentData),
        })
        if (!response.ok) throw new Error();
        const data = await response.json();
        console.log("APPOOINTMENT DATA", data);
        return data;
    } catch (error) {
        setError(true);
    } finally {
        setIsLoading(false);
    }
}

export { getAppointments, createAppointment };