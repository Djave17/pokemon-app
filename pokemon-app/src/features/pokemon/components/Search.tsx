import { styled, alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import "../../../App.css"
import "../../../index.css"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 13,
  backgroundColor: alpha(theme.palette.text.primary, 0.08),
  '&:hover': {
    backgroundColor: alpha(theme.palette.text.primary, 0.12),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface SearchBarProps {
    onSearch?: (searchTerm: string) => void;
    placeholder?: string;
    value: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function SearchBar({ placeholder, value, onChange, disabled }: SearchBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={placeholder || "Search…"}
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={onChange}
              disabled={disabled || false}
            />
          </Search>
    </Box>
  );
}
