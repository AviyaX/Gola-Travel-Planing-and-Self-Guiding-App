import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowDownTrayIcon, HeartIcon } from 'react-native-heroicons/solid'
import { storeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import {useNavigation} from "@react-navigation/native";

export default function HotelCard({game}) {
    const [isFavourite, setFavourite] = useState(false);
    const navigation=useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Place")}>
        <View style={{ marginRight: 24, position: 'relative' }}>
            <View style={{ width: 230, height: 338, borderRadius: 30, overflow: 'hidden' }}>
                <Image source={game.image} style={{ width: 300, height: 340, borderRadius: 30 }} />
            </View>

            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
                            style={{ position: 'absolute', padding: 16, height: '100%', width: '100%', flex: 1, justifyContent: 'space-between', borderRadius: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={()=> setFavourite(!isFavourite)}
                        style={{ padding: 12, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    >
                        <HeartIcon size={25} color={isFavourite? storeColors.redHeart: 'white'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white',marginBottom:6  }}>
                        {game.title}
                    </Text>
                    <StarRating
                        disabled={true}
                        starSize={15}
                        containerStyle={{ width: 90 }}
                        maxStars={5}
                        rating={game.stars}
                        emptyStar={require('../assets/images/emptyStar.png')}
                        fullStar={require('../assets/images/fullStar.png')}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold', marginTop:4 }}>
                            {game.downloads}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
            </TouchableOpacity>
    )
}