import axios from "axios";

export async function getDataByLink(link: string) {
  return axios.get(link).then((res) => res.data);
}

export async function getDatasByLinks(
  links: string[],
  fetcher: (link: string) => Promise<any>
) {
  let promises = [];
  for (let i = 0; i < links.length; i++) {
    promises.push(fetcher(links[i]));
  }
  return Promise.all(promises)
    .then(function handleData(data) {
      return data;
    })
    .catch(function handleError(error) {
      console.log("Error" + error);
    });
}

// characters APIs
export async function getCharacters() {
  return axios
    .get(
      `https://rickandmortyapi.com/api/character
    `
    )
    .then((res) => res.data);
}

// locations APIs
export async function getLocations() {
  return axios
    .get("https://rickandmortyapi.com/api/location")
    .then((res) => res.data);
}

// episodes APIs
export async function getEpisods() {
  return axios
    .get("https://rickandmortyapi.com/api/episode")
    .then((res) => res.data);
}

export async function getSeasons(callback: (data: Promise<any>) => void) {
  let i = 1;
  let isError = false;
  while (!isError) {
    try {
      const data = await getEpisodeBySeason(i);
      callback(data);
      i++;
    } catch (error) {
      isError = true;
    }
  }
}

export async function getEpisodeBySeason(season: number) {
  return axios
    .get("https://rickandmortyapi.com/api/episode/?episode=S0" + season)
    .then((res) => res.data);
}
