import React, { useContext, useState, useEffect } from 'react';
import { Select, FormControl, InputLabel } from '@material-ui/core';
import { GlobalContext } from '../../context/State';
import { fetchGlobalData, fetchCountryData } from '../../api/index';
import Axios from 'axios';

export const SelectSituation = () => {
  const { updateData, updateCountryData } = useContext(GlobalContext);

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await Axios.get('https://covid19.mathdro.id/api/countries');
        setCountries(res.data.countries);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleChange = async ({ target: { value } }) => {
    if(value === 'global'){
    const globalData = await fetchGlobalData(value);
    updateData(globalData);
    }else{
    const countryData = await fetchCountryData(value);
    updateCountryData(countryData);
    }
    setCountry(value);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="age-native-simple"></InputLabel>
        <Select
          value={country}
          native
          onChange={handleChange}
          inputProps={{ name: 'country', id: 'age-native-simple' }}
        >
          <option value="global">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
