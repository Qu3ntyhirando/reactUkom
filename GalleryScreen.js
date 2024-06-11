import React, {useEffect, useState} from 'react';
import { StatusBar } from "expo-status-bar";
import {
	Button,
	FlatList,
	Modal,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Image } from "expo-image";
import { Video, ResizeMode } from "expo-av";

const GalleryApp = () => {
	const [galleryFiles, setGalleryFiles] = useState([]);
	const [currentImage, setCurrentImage] = useState("");

	const [isLoading, setLoading] = useState(true);

  const getImages = async () => {
    try {
      const response = await fetch('https://random-image-pepebigotes.vercel.app/lists/example-images-list.json');
      const json = await response.json();
      setGalleryFiles(json.images);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);
	
	const renderItem = ({ item }) => (
		<View style={styles.imageContainer}>
			<Pressable
				onPress={() => {
					setCurrentImage(item);
				}}
			>
				<Image
					source={{ uri: item }}
					style={{ width: 200, height: 200 }}
				/>
			</Pressable>
		</View>
	);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.heading}>Gallery Apps</Text>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					width: "100%",
					padding: 10,
				}}
			>
				
			</View>

			{/* view full image in modal */}
			<Modal visible={currentImage !== ""} transparent={false}>
				<View style={{ flex: 1, backgroundColor: 0 }}>
					<Pressable
						style={{
							position: "absolute",
							top: 40,
							zIndex: 1,
							flex: 1,
							alignSelf: "center",
						}}
						title="Close"
						onPress={() => setCurrentImage("")}
					>
						<Text
							style={{
								color: "black",
								fontSize: 20,
								padding: 10,
								backgroundColor: "white",
							}}
						>
							Close
						</Text>
					</Pressable>
				
				</View>
			</Modal>
			<View style={styles.scrollContainer}>
				<Text style={{ fontSize: 20, marginBottom: 20 }}>
					My Gallery
				</Text>
				<FlatList
					data={galleryFiles}
					renderItem={renderItem}
					numColumns={3}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: "10%",
	},
	scrollContainer: {
		flex: 1,
		marginTop: 20,
		width: "100%",
	},
	heading: {
		color: "green",
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
	},
	imageContainer: {
		flex: 1,
		margin: 1,
		aspectRatio: 1, // This ensures that images maintain their aspect ratio
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {},
});


export default function GalleryScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <GalleryApp/>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  