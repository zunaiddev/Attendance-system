async function fakeResponse<T>(data: T, error = false): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject(new Error('Fake response Error'));
                return;
            }

            resolve(data);
        }, 1500);
    });
}

export default fakeResponse;