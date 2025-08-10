import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// Get theme from localStorage or default to 'light'
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || 'light';
	});

	useEffect(() => {
		// Save theme to localStorage whenever it changes
		localStorage.setItem('theme', theme);
		
		// Apply theme to document body
		document.body.setAttribute('data-theme', theme);
		
		// Update CSS custom properties
		if (theme === 'dark') {
			document.documentElement.style.setProperty('--bg-primary', '#1a1a1a');
			document.documentElement.style.setProperty('--bg-secondary', '#2d2d2d');
			document.documentElement.style.setProperty('--text-primary', '#ffffff');
			document.documentElement.style.setProperty('--text-secondary', '#b3b3b3');
			document.documentElement.style.setProperty('--border-color', '#404040');
			document.documentElement.style.setProperty('--shadow-color', 'rgba(0,0,0,0.3)');
			document.documentElement.style.setProperty('--icon-color', '#ffffff');
			document.documentElement.style.setProperty('--icon-hover-color', '#ffffff');
			document.documentElement.style.setProperty('--icon-filter', 'brightness(0) invert(1)');
		} else {
			document.documentElement.style.setProperty('--bg-primary', '#ffffff');
			document.documentElement.style.setProperty('--bg-secondary', '#f8f9fa');
			document.documentElement.style.setProperty('--text-primary', '#484848');
			document.documentElement.style.setProperty('--text-secondary', '#6c757d');
			document.documentElement.style.setProperty('--border-color', '#dee2e6');
			document.documentElement.style.setProperty('--shadow-color', 'rgba(0,0,0,0.1)');
			document.documentElement.style.setProperty('--icon-color', '#484848');
			document.documentElement.style.setProperty('--icon-hover-color', '#ffffff');
			document.documentElement.style.setProperty('--icon-filter', 'brightness(0)');
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
	};

	const setThemeMode = (mode) => {
		setTheme(mode);
	};

	const value = {
		theme,
		toggleTheme,
		setThemeMode
	};

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};
