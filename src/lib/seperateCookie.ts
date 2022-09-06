const separateCookie = (cookie) => {
    return Object.fromEntries(
        cookie.split("; ").map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
    );
};

export default separateCookie;
