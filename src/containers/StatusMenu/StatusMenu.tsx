import React, { FC, ReactNode } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';

import styles from './styles';

interface Props {
    options: ReactNode[];
}

const StatusMenu: FC<Props> = ({ options }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = makeStyles(styles)();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option: ReactNode) => {
    setAnchorEl(null);
  }

  return (
    <div>
        <Button 
            size="small" 
            variant="contained" 
            onClick={handleClick}
            className={classes.menuButton}
        >
            Move
        </Button>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
        >
            {options.map((option: ReactNode) => option)}
        </Menu>
    </div>
  );
}

export default StatusMenu;
