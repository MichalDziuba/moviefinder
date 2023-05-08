import Input from "@mui/material/Input";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC107",
    },
  },
});


export const SearchInput = () => {

const [inputValue,setInputValue]=useState<string>("")
    const inputHandler = (event:React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    setInputValue(event.target.value)
    }
    useEffect(() => {
        console.log(inputValue)
    },[inputValue])

    return (
      <div>
        <ThemeProvider theme={theme}>
          <TextField label="Przykładowy input" variant="standard" sx={{color:"#FFC107"}} />
        </ThemeProvider>
      </div>
    );
};
