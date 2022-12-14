import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import { Feather as Icon, AntDesign as Icon2 } from "@expo/vector-icons";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.headerView}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Hi, John Moore</Text>
          <TouchableOpacity style={styles.headerTouchableIcon}>
            <Icon name="bell" color="white" size={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainTextView}>
          <Text style={styles.mainText}>Find your favourite</Text>
          <Text style={styles.mainText}>Course here!</Text>
        </View>
        <View style={styles.searchView}>
          <Icon
            name="search"
            size={16}
            color="white"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor="white"
          />
          <Icon name="mic" size={16} color="white" />
        </View>
      </View>
      <View style={styles.cardsView}>
        <View style={styles.singleCardView}>
          <TouchableOpacity style={styles.cardIconTouchable}>
            <Icon name="music" size={16} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Music</Text>
        </View>
        <View style={styles.singleCardView}>
          <TouchableOpacity style={styles.cardIconTouchable}>
            <Icon name="mail" size={16} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Email</Text>
        </View>
        <View style={styles.singleCardView}>
          <TouchableOpacity style={styles.cardIconTouchable}>
            <Icon2 name="mobile1" size={16} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Mobile</Text>
        </View>
      </View>
      <View style={styles.tenderingView}>
        <Text style={styles.tenderingText}>Trending Courses</Text>
        <TouchableOpacity style={styles.seeAllTouchable}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.trendingCardContainer}></View>
        <TouchableOpacity>
          <View style={styles.trendingCard}>
            <Image
              source={{
                uri: "https://www.insegment.com/blog/wp-content/uploads/2016/04/The-Role-of-Marketing-1.jpg",
              }}
              style={styles.trendingImage}
            />
            <View style={styles.trendingCardTextView}>
              <Text style={styles.trendingCardText}>Marketing</Text>
              <Icon name="heart" color="black" size={16} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.trendingCard}>
            <Image
              source={{
                uri: "https://leverageedu.com/blog/wp-content/uploads/2019/08/Short-Term-Courses-after-10th.jpg",
              }}
              style={styles.trendingImage}
            />
            <View style={styles.trendingCardTextView}>
              <Text style={styles.trendingCardText}>UI/UX Design</Text>
              <Icon name="heart" color="black" size={16} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.trendingCard}>
            <Image
              source={{
                uri: "https://pttejram.org.in/wp-content/uploads/2019/05/courses.jpg",
              }}
              style={styles.trendingImage}
            />
            <View style={styles.trendingCardTextView}>
              <Text style={styles.trendingCardText}>Design</Text>
              <Icon name="heart" color="black" size={16} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.trendingCard}>
            <Image
              source={{
                uri: "https://thumbs.dreamstime.com/b/computer-science-word-cloud-concept-grey-background-90729606.jpg",
              }}
              style={styles.trendingImage}
            />
            <View style={styles.trendingCardTextView}>
              <Text style={styles.trendingCardText}>Computer</Text>
              <Icon name="heart" color="black" size={16} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: "#09214f",
    borderBottomEndRadius: 60,
    borderBottomLeftRadius: 60,
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 56,
    paddingHorizontal: 16,
    padding: 12,
    alignItems: "center",
  },
  headerImage: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  headerText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 12,
    flex: 1,
  },
  headerTouchableIcon: {
    display: "flex",
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 1,
    padding: 8,
  },
  mainTextView: {
    marginTop: 24,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    paddingHorizontal: 16,
  },
  searchView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 32,
    marginTop: 24,
    marginBottom: 88,
    backgroundColor: "#5a719c",
    borderRadius: 24,
    padding: 12,
  },
  searchIcon: {
    marginLeft: 4,
  },
  searchInput: {
    color: "white",
    marginLeft: 8,
    flex: 1,
  },
  cardsView: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  singleCardView: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: -48,
    height: 100,
    width: 80,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  cardIconTouchable: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#dee0e3",
    borderRadius: 24,
  },
  cardText: {
    marginTop: 8,
  },

  tenderingView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 60,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  tenderingText: {
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
  },
  trendingCardContainer: {
    display: "flex",
    flexDirection: "row",
  },
  trendingCard: {
    height: 280,
    width: 200,
    marginTop: 48,
    marginHorizontal: 16,
  },
  trendingImage: {
    height: 220,
    width: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  trendingCardTextView: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  trendingCardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
});
