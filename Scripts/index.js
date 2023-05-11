const fetchWithTimeout = (url, timeout = 200) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error('Request timed out'));
    }, timeout);

    fetch(url, { signal: controller.signal })
      .then(response => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch(error => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
};

(async () => {
  for (let i = 1; i < Infinity; i++) {
    try {
      const url = "https://example.com/";
      await fetchWithTimeout(url, 5000);
      console.log(true);
    } catch (error) {
      console.log(false);
    }
  }
})();