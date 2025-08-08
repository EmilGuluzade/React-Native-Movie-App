import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({ icon, text, focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden "
      >
        <Image
          source={icon}
          tintColor={focused ? "#151312" : "#B0B0B0"}
          className="size-5"
        />
        <Text className="text-base font-semibold ml-2 text-secondary">
          {text}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full ">
      <Image source={icon} tintColor={"#A8B5DB"} className="size-5" />
    </View>
  );
};
const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 38,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} text="Home" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} text="Search" focused={focused} />
          ),
        }}
      /> 
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.save} text="Saved" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} text="Profile" focused={focused} />
          ),
        }}
      />
     
    </Tabs>
  );
};

export default _Layout;
