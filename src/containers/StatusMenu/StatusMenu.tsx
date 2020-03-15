import React, { FC, ReactNode } from 'react';
import { ArrowRight } from '@material-ui/icons';
import { Button, makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
            Move Card To
            <ArrowRight />
        </Button>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
        >
            {options.map((option: ReactNode, index: number) => {
                return (
                <MenuItem onClick={handleClose} key={index}>
                    {option}
                </MenuItem>);
            })}
        </Menu>
    </div>
  );
}

export default StatusMenu;
