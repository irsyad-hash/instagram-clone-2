import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ReusableStoryAvatar from "../Reusables/ReusableStoryAvatar";

const StoryAvatar = ({ item }) => (
  <ReusableStoryAvatar
    size={60}
    imageUrl={item.imageUrl}
    hasActiveStory={item.hasActiveStory}
    hasAlreadyViewed={item.hasAlreadyViewed}
  />
);
const StoryAvatarWithName = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ alignItems: "center", maxWidth: 80 }}
    >
      <StoryAvatar item={item} />
      <Text ellipsizeMode="tail" numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

function Stories() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={storiesData.filter((story) => story.hasActiveStory)}
      contentContainerStyle={{
        padding: 10,
        backgroundColor: "white",
        gap: 8,
        alignItems: "center",
      }}
      keyExtractor={(item) => item.id}
      renderItem={StoryAvatarWithName}
    />
  );
}

const storiesData = [
  {
    id: "a-1",
    name: "Your Story",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://i.pinimg.com/originals/97/2f/1b/972f1b8aca65479e3c401b800a4bd76a.jpg",
  },
  {
    id: "b-2",
    name: "Tomski",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://ih1.redbubble.net/image.618880200.0955/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg",
  },
  {
    id: "c-3",
    name: "Ichad",
    hasActiveStory: false,
    hasAlreadyViewed: true,
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
  },
  {
    id: "d-4",
    name: "Levi",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
  },
  {
    id: "e-5",
    name: "Randy Randy",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
  },
  {
    id: "f-6",
    name: "Okkie",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
  },
  {
    id: "g-7",
    name: "Nudros",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
  },
  {
    id: "h-8",
    name: "Ipin",
    hasActiveStory: true,
    hasAlreadyViewed: false,
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
  },
];

export default Stories;
