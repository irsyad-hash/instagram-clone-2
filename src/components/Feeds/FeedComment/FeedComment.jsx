import React, { useRef, useState } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const FeedComment = (props) => {
  const refRBSheet = useRef(null);
  const [comments, setComments] = useState([
    { id: 1, text: "Great post!" },
    { id: 2, text: "Amazing picture!" },
    { id: 3, text: "So cool!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Text
          style={{
            color: "gray",
            backgroundColor: "white",
          }}
        >
          View All {props.item.feed.totalComments} Comments
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <RBSheet
          ref={refRBSheet}
          closeOnPressBack={true}
          closeOnPressMask={true}
          height={500}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 15,
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <FlatList
            data={comments}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            )}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Add a comment..."
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
            />
            <TouchableOpacity
              onPress={handleAddComment}
              style={styles.sendButton}
            >
              <Text style={styles.sendButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  commentContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  commentText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#3498db",
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default FeedComment;
