import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    height: 200,
    width: 200,
  },
});

const Card = ({
  children,
  containerStyles,
  containerHeight,
  containerWidth,
}) => {
  return (
    <View
      style={{
        ...styles.card,
        ...containerStyles,
        height: containerHeight,
        width: containerWidth,
      }}
    >
      {children}
    </View>
  );
};

export default Card;
