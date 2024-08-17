const RegisterFetch = async (setIsLoading, emailValue, passwordValue, repeatedPasswordValue, setError) => {
    setIsLoading(() => ({ ...setIsLoading, register: true }));
    try {
        if (passwordValue !== repeatedPasswordValue) {
            throw new Error("Error - Passwords do not match");
        }
        const response = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
            })
        })
        if (!response.ok) {
            throw new Error("Error - Failed Register");
        }
        const data = await response.json();
        return data;
        //Funciondalidad para redirigir a la pagina de inicio pendiente
    } catch (error) {
        setError(true);
    } finally {
        setIsLoading(() => ({ ...setIsLoading, register: false }));

    }
}

const LoginFetch = async (setIsLoading, emailValue, passwordValue, setError) => {
    setIsLoading(() => ({ ...setIsLoading, login: true }));
    try {
        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
            })
        })
        if (!response.ok) {
            throw new Error("Error - Failed Login");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        setError(true);
    } finally {
        setIsLoading(() => ({ ...setIsLoading, login: false }));
    }
}

export { RegisterFetch, LoginFetch };