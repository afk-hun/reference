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
    axios
      .get(
        `https://google-translate1.p.rapidapi.com/language/translate/v2/languages`,
        {
          headers: {
            "X-RapidAPI-Key":
              "686ea49de5msh110a5654fb41f87p166df2jsn2b45df0977ec",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        let langs: Language[] = [];
        res.data.data.languages.map((item: { language: string }) => {
          return langs.push({
            langCode: item.language,
            langName: getLangNameFromCode(item.language)?.name ?? item.language,
          });
        });
        setLanguages(langs);
      });
  };

  const fetchTranslatedText = (text: string) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("q", text);
    encodedParams.set("target", targetLang);
    encodedParams.set("source", sourceLang);

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "686ea49de5msh110a5654fb41f87p166df2jsn2b45df0977ec",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
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
