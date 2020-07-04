import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

import Colors from "../constant/Colors";

const MealItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onSelectMeal}>
			<View style={styles.mealItem}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						>
							<Text style={styles.title}>{props.title}</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}M</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.affordablity.toUpperCase()}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: Colors.liteYellowColor,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
		color: "white",
		backgroundColor: "rgba(0,0,0,0.4)",
		paddingVertical: 5,
		paddingHorizontal: 10,
		textAlign: "center",
	},
	mealRow: {
		flexDirection: "row",
	},
	mealHeader: {
		height: "85%",
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: "15%",
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
});

export default MealItem;
