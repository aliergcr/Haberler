import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DrawerContent from './DrawerComponents/DrawerContent'
import NewsWebView from '../NewsWebView'
import World from '../NewsCategories/World'
import TopHeadlines from '../NewsCategories/TopHeadlines'
import Technology from '../NewsCategories/Technology'
import Magazine from '../NewsCategories/Magazine'
import Sports from '../NewsCategories/Sports'
import Cars from '../NewsCategories/Cars'
import Health from '../NewsCategories/Health'
import Art from '../NewsCategories/Art'

export const WorldStackNavigator = createStackNavigator(
    {
        World: {screen: World},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'World',
    }
)

export const TopHeadlinesStackNavigator = createStackNavigator(
    {
        TopHeadlines: {screen: TopHeadlines},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'TopHeadlines',
    }
)

export const SportsStackNavigator = createStackNavigator(
    {
        Sports: {screen: Sports},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Sports',
    }
)

export const TechnologyStackNavigator = createStackNavigator(
    {
        Technology: {screen: Technology},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Technology',
    }
)

export const MagazineStackNavigator = createStackNavigator(
    {
        Magazine: {screen: Magazine},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Magazine',
    }
)

export const ArtStackNavigator = createStackNavigator(
    {
        Art: {screen: Art},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Art',
    }
)

export const CarsStackNavigator = createStackNavigator(
    {
        Cars: {screen: Cars},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Cars',
    }
)

export const HealthStackNavigator = createStackNavigator(
    {
        Health: {screen: Health},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Health',
    }
)



export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TopHeadlinesStackNavigator,
        navigationOptions: {
                drawerLabel: 'Son Dakika'
        }
    },
    World: {
        screen: WorldStackNavigator,
        navigationOptions: {
                drawerLabel: 'Dünyadan'
        }
    },
    Sports: {
        screen: SportsStackNavigator,
        navigationOptions: {
                drawerLabel: 'Spor'
        }
    },
    Technology: {
        screen: TechnologyStackNavigator,
        navigationOptions: {
                drawerLabel: 'Teknoloji'
        }
    },
    Magazine: {
        screen: MagazineStackNavigator,
        navigationOptions: {
                drawerLabel: 'Magazin'
        }
    },
    Art: {
        screen: ArtStackNavigator,
        navigationOptions: {
                drawerLabel: 'Kültür-Sanat'
        }
    },
    Cars: {
        screen: CarsStackNavigator,
        navigationOptions: {
                drawerLabel: 'Otomobil'
        }
    },
    Health: {
        screen: HealthStackNavigator,
        navigationOptions: {
                drawerLabel: 'Sağlık'
        }
    }
},
    {
        initialRouteName: 'Home',
        contentComponent: DrawerContent,
        drawerPosition: 'left',
        drawerWidth: '60%',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    })

export const HomeDrawer = createAppContainer(DrawerNavigator)


