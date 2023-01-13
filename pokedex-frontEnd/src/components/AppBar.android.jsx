import {StyleSheet,View, ScrollView,Image} from "react-native"
import {Link, useLocation} from "react-router-native"
import StyledText from "./StyledText.jsx"
import Constants from "expo-constants"
import theme from "../theme.js"



const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 40,
      },
    container:{
        backgroundColor:"#DE1537",
        paddingTop:Constants.statusBarHeight + 10,
        flexDirection:"row",
       
        paddingLeft:10

    },
    text:{
        color:theme.appBar.textSecondary,
        paddingHorizontal:10
    },
    scroll:{
        paddingBottom:15
    },
    active:{
        color:theme.appBar.textPrimary,

    }

})

const AppBarTab = ({children, to}) => {
    const {pathname} = useLocation()
    const active = pathname === to
    const textStyles = [
        styles.text,
        active && styles.active

    ]
    return (
        <Link to={to} underlayColor="#24292e"><StyledText fontWeight="bold" style={textStyles}>
       {children}
       </StyledText></Link>
    )
}


const AppBar = () =>{
    
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}> 
            <Image
          style={styles.image}
          source={{ uri: "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"}}
        />
            
           <AppBarTab  to="/">Pokedex</AppBarTab>
           <AppBarTab  to="/signin">Sign in</AppBarTab>
           </ScrollView>
      

        </View>
    )
}

export default AppBar
