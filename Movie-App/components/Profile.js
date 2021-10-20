import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { Card, Button, Title, Paragraph, Avatar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');
// uri: 'https://picsum.photos/700'
export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <ImageBackground style={styles.cardbackground} source={{ uri: "https://cdn.hipwallpaper.com/i/31/75/Nav3ec.jpg" }} >
                    <View style={styles.profileImageContainer}>
                        <Image style={styles.profileImage} source={{ uri: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" }}>
                        </Image>
                    </View>
                    <Text style={styles.profileName}>Abdan Barkaath</Text>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardContainer: {
        height: height / 3,
        borderColor: 'black'
    },
    cardbackground: {
        resizeMode: 'cover',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImageContainer: {
        height: 150,
        width: 150,
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#8cffd1',
    },
    profileImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    profileName: {
        fontSize: 24,
        color: 'white',
    }
});