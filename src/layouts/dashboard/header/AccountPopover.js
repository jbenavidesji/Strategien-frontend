import { useState } from 'react';
import {Link as RouterLink} from "react-router-dom";
// @mui
import { alpha } from '@mui/material/styles';
import {Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover, Link} from '@mui/material';
// mocks_
import account from '../../../_mock/account';


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Profil',
    icon: 'eva:person-fill',
    linkTo: '/dashboard/profile',
  },
  {
    label: 'Einstellungen',
    icon: 'eva:settings-2-fill',
    linkTo: '/dashboard/settings'
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen();
  };


  const linkToLogin = '/login';

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
        id="buttonProfilSettings" title="Profil Settings"
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
              <Link key={option.label} to={option.linkTo} component={RouterLink} underline="none">
                <MenuItem key={option.label} onClick={handleClose}>
                  {option.label}
                </MenuItem>
              </Link>

          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Link to={linkToLogin} component={RouterLink} underline="none">
          <MenuItem onClick={handleClose} sx={{ m: 1 }}>
            Logout
          </MenuItem>
        </Link>
      </Popover>
    </>
  );
}
