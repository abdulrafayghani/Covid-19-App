import axios from 'axios';

let url = 'https://covid19.mathdro.id/api';

export const fetchGlobalData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountryData = async (country) => {
  try {
    const countries = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await countries;

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};

export const uzairData = async (country) => {

    try {
        const res = await axios.get(`https://covid19.mathdro.id/api/countries`);
        return res
    }
    catch (err){
      console.log(err)
    }
}
