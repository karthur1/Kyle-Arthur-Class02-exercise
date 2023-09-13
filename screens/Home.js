import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Avatar, Button, TabBar, InfoRow, Icon, } from 'react-native-ios-kit';
 

export default function Home({navigation}) {
    return (
        
            
        <View style={styles.container}>
            
            <Avatar initials="KA" size={50} />
            <Text>Welcome!</Text>
            <StatusBar style="auto" />
                <Button onPress={() => navigation.push('About')} style={styles.button} inline rounded>
               About
                </Button>
                <InfoRow title="InfoRow" info="1" />
                <Icon
  name={'ios-paper-outline'}
  size={30}
  color={'blue'}
/>
                <TabBar
        tabs={[
            
            {
            icon: 'ios-podium',
            title: 'Scores',
            onPress: this.selectTab,
            disabled: true,

            },
            {
            icon: 'ios-star-outline',
            title: 'Favorites',
            onPress: this.selectTab,
            disabled: true,

            },
            {
            icon: 'ios-people',
            title: 'Disabled',
            onPress: this.selectTab,
            disabled: true,
            },
        ]}
        />
                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
});
