const Api = {
  async fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(async (response) => {
          const data = await response.json();
          resolve(data);
        })
        .catch((error) =>
          reject((error && error.response && error.response.data) || "")
        );
    });
  },
};
export default Api;
