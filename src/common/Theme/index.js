import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
	color: {
		primary: "##0d47a1",
		secondary: "#ffcdd2",
		errors: "#f44336"
	},
	typography: {
		fontFamily: "Roboto"
	},
	shape: {
		borderRadius: 4,
		backgroundColor: "#FFF",
		textColor: "#333"
	}
})

export default theme