const URL = "https://corona.lmao.ninja";

export const getGeneralData = uri => {
  return fetch(URL + uri, {
    headers: {
      mode: "no-cors"
    }
  }).then(res => res.json());
};
