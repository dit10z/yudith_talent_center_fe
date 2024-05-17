import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
  alpha,
} from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: alpha("#FDFDFD", 0.8),
    borderRadius: "36px",
    height: "62px",
    display: "flex",
    width: "800px",
  },
  "& .MuiInputBase-input": {
    color: "inherit",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
    },
  },
  "& .MuiInputAdornment-root": {
    position: "absolute",
    right: 0, // Geser ikon ke kanan
  },
}));

const SearchBar = (props) => {
  return (
    <StyledAutocomplete
      multiple
      freeSolo
      options={props.tags}
      getOptionLabel={(option) => option.tagsName}
      filterOptions={(options, state) => {
        const inputValue = state.inputValue.toLowerCase();
        return options.filter((option) =>
          option.tagsName.toLowerCase().includes(inputValue)
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              notched: false,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={props.handleSearch}>
                    {" "}
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );
      }}
      value={props.selectedTag}
      onChange={(event, newValue) => {
        props.handleTagSelection(newValue || selectedTag);
      }}
    />
  );
};

export default SearchBar;
