const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
    fetch(input, {
        credentials: "include",
        ...init,
    }).then((res) => res.json());

export default fetcher;
