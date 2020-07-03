import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FavoritesScreen from "./FavoritesScreen";

const FiltersScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Filtered Meal Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FiltersScreen;
