import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
	garden: "garden",
	dim: "dim",
};
const getUserFromLocalStorage = () => {
	const user = localStorage.getItem("user") || null;

	return JSON.parse(user);
};

const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.garden;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};
const initialState = {
	user: getUserFromLocalStorage(),
	theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state) => {
			state.user = null;
			// localStorage.clear();
			localStorage.removeItem("user");
			toast.success("Logged out successfully");
		},
		toggleTheme: (state) => {
			const { garden, dim } = themes;
			state.theme = state.theme === garden ? dim : garden;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
