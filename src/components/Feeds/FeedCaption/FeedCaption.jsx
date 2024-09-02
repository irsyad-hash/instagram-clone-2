import { useState } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

//TODO: branch name suggestion: challenge-hari-ketiga
// TODO: buat agar text more-nya sejajar dengan caption, sebelum di klik more itu caption yang tampil maksimal 2 baris
// TODO: dan setelah di klik more nya, semua caption tampil
const FeedCaption = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const captionPreviewLength = 50;

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <Text style={{ fontWeight: "300", backgroundColor: "white" }}>
        <Text style={{ fontWeight: "bold", backgroundColor: "white" }}>
          {props.item.username}{" "}
        </Text>
        {isExpanded
          ? props.item.feed.caption
          : `${props.item.feed.caption.slice(0, captionPreviewLength)}... `}
        {!isExpanded &&
          props.item.feed.caption.length > captionPreviewLength && (
            <Text
              onPress={toggleExpansion}
              style={{
                color: "blue",
                marginLeft: 5,
                backgroundColor: "white",
              }}
            >
              more
            </Text>
          )}
      </Text>
    </View>
  );
};

export default FeedCaption;
