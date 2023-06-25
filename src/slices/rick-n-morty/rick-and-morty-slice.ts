import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CharactersData,
  LocationsData,
  EpisodesData,
  ResponseInfo,
  CharacterResult,
  LocationResult,
  EpisodesResult,
  CharacterStatus,
} from "../../utils/types";
import axios from "axios";
import { RootState } from "../../app/store";

// character fetching methods
export const fetchAllCharacters = createAsyncThunk(
  "rickAndMorty/fetchAllCharacters",
  async () => {
    const response = await axios.get<CharactersData>(
      "https://rickandmortyapi.com/api/character"
    );
    console.log(response.data)
    return response.data;
  }
);

export const fetchCharacterById = createAsyncThunk(
  "rickAndMorty/fetchCharacterById",
  async (id: number) => {
    const response = await axios.get<CharacterResult>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.data;
  }
);

export const fetchCharactersByIds = createAsyncThunk(
  "rickAndMorty/fetchCharactersByIds",
  async (ids: number[]) => {
    const response = await axios.get<CharacterResult[]>(
      `https://rickandmortyapi.com/api/character/${ids}`
    );
    return response.data;
  }
);

export const fetchFilteredCharacters = createAsyncThunk(
  "rickAndMorty/fetchFilteredCharacters",
  async (args: { name: string, status: CharacterStatus }) => {
    const response = await axios.get<CharactersData>(
      `https://rickandmortyapi.com/api/character/?name=${args.name}&status=${args.status}`
    );
    return response.data;
  }
);

// location fetching methods
export const fetchAllLocations = createAsyncThunk(
  "rickAndMorty/fetchAllLocations",
  async () => {
    const response = await axios.get<LocationsData>(
      "https://rickandmortyapi.com/api/location"
    );
    return response;
  }
);

// episode fetching methods
export const fetchAllEpisodes = createAsyncThunk(
  "rickAndMorty/fetchAllEpisodes",
  async (api: string) => {
    const response = await axios.get<EpisodesData>(
      "https://rickandmortyapi.com/api/episode"
    );
    return response;
  }
);

interface RickNMortyState {
  characterInfo: ResponseInfo | null;
  locationInfo: ResponseInfo | null;
  episodeInfo: ResponseInfo | null;

  characters: CharacterResult[] | null;
  locations: LocationResult[] | null;
  episodes: EpisodesResult[] | null;

  error: string;
}

const initialState: RickNMortyState = {
  characterInfo: null,
  locationInfo: null,
  episodeInfo: null,

  characters: null,
  locations: null,
  episodes: null,
  error: "",
};

const rickAndMortySlice = createSlice({
  name: "rickAndMorty",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCharacters.pending, (state, action) => {
      // TODO: handle loading
    });

    builder.addCase(fetchAllCharacters.fulfilled, (state, action) => {
      console.log(action.payload.results)
      state.characterInfo = action.payload.info;
      state.characters = action.payload.results;
    });

    builder.addCase(fetchAllCharacters.rejected, (state, action) => {
      // TODO: handle rejected call
    });

    builder.addCase(fetchCharacterById.pending, (state, action) => {
      // TODO: handle loading
    });

    builder.addCase(fetchCharacterById.fulfilled, (state, action) => {
      state.characterInfo = null;
      state.characters = [action.payload];
    });

    builder.addCase(fetchCharacterById.rejected, (state, action) => {
      // TODO: handle rejected call
    });

    builder.addCase(fetchCharactersByIds.pending, (state, action) => {
      // TODO: handle loading
    });

    builder.addCase(fetchCharactersByIds.fulfilled, (state, action) => {
      state.characterInfo = null;
      state.characters = action.payload;
    });

    builder.addCase(fetchCharactersByIds.rejected, (state, action) => {
      // TODO: handle rejected call
    });
    builder.addCase(fetchFilteredCharacters.pending, (state, action) => {
      // TODO: handle loading
    });

    builder.addCase(fetchFilteredCharacters.fulfilled, (state, action) => {
      state.characterInfo = action.payload.info;
      state.characters = action.payload.results;
    });

    builder.addCase(fetchFilteredCharacters.rejected, (state, action) => {
      // TODO: handle rejected call
    });
  },
});

// selector
export const selectCharacters = (state: RootState) => {
    return state.rickAndMorty.characters;
} 
export const selectCharacterInfo = (state: RootState) => {
    return state.rickAndMorty.characterInfo;
}


export default rickAndMortySlice.reducer;