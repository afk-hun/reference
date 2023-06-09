import { IconButton, NativeSelect, TextField } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ClearIcon from "@mui/icons-material/Clear";
import "./gtranslate.scss";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { getLangNameFromCode } from "language-name-map";
import { log } from "console";

type Language = {
  langCode: string;
  langName: string;
};

const GTranslate = () => {
  const [langueages, setLanguages] = useState<Language[]>([]);
  const [sourceLang, setSourceLang] = useState<string>("en");
  const [targetLang, setTargetLang] = useState<string>("sv");
  const [sourceText, setSourceText] = useState<string>("");
  const [targetText, setTargetText] = useState<string>("Translation");

  const fetchLanguages = () => {
    const options = {
        method: 'GET',
        url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
        params: {
          'api-version': '3.0'
        },
        headers: {
          'X-RapidAPI-Key': '686ea49de5msh110a5654fb41f87p166df2jsn2b45df0977ec',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        }
      };
      
      try {
          const response = axios.request(options);
          console.log(response.then((item: any) => {
            console.log(item)
          }));
      } catch (error) {
          //console.error(error);
      }
  };

  const fetchTranslatedText = (text: string) => {
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'to[0]': targetLang,
          'api-version': '3.0',
          from: sourceLang,
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '686ea49de5msh110a5654fb41f87p166df2jsn2b45df0977ec',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: [
          {
            Text: text
          }
        ]
    };
    axios(options).then((res) => {
      setTargetText(res.data.data.translations[0].translatedText);
    }); 
  };

  useEffect(() => {
    if (langueages.length === 0) {
      fetchLanguages();
    }
  }, [langueages]);

  useEffect(() => {
    if (sourceText !== "") {
      fetchTranslatedText(sourceText);
    }
  }, [targetLang, sourceLang, sourceText]);

  const langOptions = langueages.map((item, index) => {
    return (
      <option key={index} value={item.langCode}>
        {item.langName}
      </option>
    );
  });

  function sourceLangChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSourceLang(event.target.value);
  }

  function destLangChange(event: ChangeEvent<HTMLSelectElement>): void {
    setTargetLang(event.target.value);
  }

  function sourceTextChangeHandler(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setSourceText(event.target.value);
  }

  return (
    <div className="gtranslate-container">
      <div className="gtranslate-container-header">
        {langueages.length !== 0 && (
          <NativeSelect
            size="small"
            value={sourceLang}
            onChange={sourceLangChange}
          >
            {langOptions}
          </NativeSelect>
        )}

        <IconButton size="small" aria-label="sync">
          <SyncAltIcon />
        </IconButton>

        {langueages.length !== 0 && (
          <NativeSelect
            size="small"
            value={targetLang}
            onChange={destLangChange}
          >
            {langOptions}
          </NativeSelect>
        )}
      </div>
      <div className="gtranslate-container-body">
        <div className="gtranslate-source">
          <TextField
            sx={{
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",

              "&:hover fieldset &:focus-visible fieldset &:active fieldset ": {
                border: "1px solid rgba(133, 133, 133)!important",
              },
            }}
            id="outlined-basic"
            variant="outlined"
            multiline
            rows={4}
            onChange={sourceTextChangeHandler}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "0",
              right: "6px",
            }}
            size="small"
            aria-label="delete"
          >
            <ClearIcon />
          </IconButton>
        </div>
        <div className="gtranslate-target">
          <TextField
            sx={{
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              backgroundColor: "whitesmoke",
              borderRadius: "3px",

              "& fieldset": {
                border: "none!important",
              },

              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "rgba(0, 0, 0, 0.87)",
              },
            }}
            id="outlined-basic"
            variant="outlined"
            multiline
            rows={4}
            value={targetText}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default GTranslate;
