'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { OptionUser } from './OptionUser';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    {
        path: '/about',
        text: 'Sobre Nosotros'
    },
    {
        path: '/certifications',
        text: 'Certificaciones'
    },
    {
        path: '/workWithUs',
        text: 'Trabaja con nosotros'
    },
    {
        path: '/news',
        text: 'Noticias'
    },
    {
        path: '/SCR',
        text: 'SCR'
    },
    {
        path: '/glossary',
        text: 'Glosario'
    },
    {
        path: '/help',
        text: 'Ayuda'
    },
];

export default function TopMenuUI(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const pathname = usePathname();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{ my: 2 }}
                className="navbar-logo flex justify-center">
                <Link href='/'>
                    <Image
                        alt="Logo"
                        width={70}
                        height={70}
                        src="/logo.jpg"
                    />
                </Link>
            </Typography>
            <Divider sx={{ background: '#fff' }} />
            <List className="navbar-links navbar-links-responsive">
                {navItems.map(({ path, text }) => (
                    <ListItem key={path} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link
                                className={`${pathname === path ? "active" : ""}`}
                                href={path}>
                                {text}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <AppBar component="nav" >
                <Toolbar className='navbar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        className="navbar-logo"
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}
                    >
                        <Link href='/'>
                            <Image
                                alt="Logo"
                                width={70}
                                height={70}
                                src="/logo.jpg"
                            />
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <ul className="navbar-links">
                            {navItems.map(({ path, text }) => (
                                <li key={path}>
                                    <Link
                                        className={`${pathname === path ? "active" : ""}`}
                                        href={path}>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <div >
                        <OptionUser />
                    </div>
                </Toolbar>
            </AppBar>
            <nav >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'var(--navbar)' },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}
